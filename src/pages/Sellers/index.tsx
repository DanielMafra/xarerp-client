import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';
import Select from '../../components/ModalRegisters/Select';

import { CreateSeller } from '../../types/Seller';
import { TableRegisters } from '../../types/TableRegisters';

type Options = {
  name: string;
  value: string;
}

const Sellers = () => {
  const api = useApi();
  const { state, dispatch } = useContext(GlobalContext);

  const [users, setUsers] = useState<Options[]>([]);

  const [user, setUser] = useState('');
  const [commission, setCommission] = useState(0);

  const dataProps: CreateSeller = {
    user,
    commission
  }

  const dataTable: TableRegisters = {
    endpoint: "sellers",
    key: "sellers",
    roles: ['create_seller', 'update_seller', 'delete_seller'],
    tableHeads: [
      {
        key: 'user',
        title: 'Nome',
        width: 280
      },
      {
        key: 'commission_formatted',
        title: 'Comissão',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 180
      }
    ],
    tableTitle: 'Vendedores cadastrados'
  }

  const handleNewSeller = async () => {
    setUser('');
    setCommission(0);

    setUsers([]);

    const resultUsers = await api.getRegisters('users', Number(0));

    if (resultUsers.users) {
      resultUsers.users[1].map((item: { name: string; id: string; }, index: any) => (
        setUsers(oldArray => [...oldArray,
        {
          name: item.name,
          value: item.id
        }
        ])
      ));
    }

    dispatch({
      type: 'MODALREGISTERS_SET_LOADINGREGISTER',
      payload: {
        loadingRegister: false
      }
    })
    dispatch({
      type: 'MODALREGISTERS_SET_OPENEDMODAL',
      payload: {
        openedModal: true
      }
    });
  }

  useEffect(() => {
    dispatch({
      type: 'REGISTER_CHANGE_HASERROR',
      payload: {
        hasError: false
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_PROPS',
      payload: {
        props: { ...dataProps }
      }
    });

    if (
      user !== '' &&
      commission > 0
    ) {
      dispatch({
        type: 'REGISTER_CHANGE_ISREADY',
        payload: {
          isReady: true
        }
      });
    } else {
      dispatch({
        type: 'REGISTER_CHANGE_ISREADY',
        payload: {
          isReady: false
        }
      });
      dispatch({
        type: 'REGISTER_CHANGE_ERROR',
        payload: {
          error: 'Preencha todos os campos.'
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, commission]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      (async () => {
        setUsers([]);

        const resultUsers = await api.getRegisters('users', Number(0));

        if (resultUsers.users) {
          resultUsers.users[1].map((item: { name: string; id: string; }, index: any) => (
            setUsers(oldArray => [...oldArray,
            {
              name: item.name,
              value: item.id
            }
            ])
          ));
        }
      })();

      setUser(state.register.props.user_id);
      setCommission(state.register.props.commission);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewSeller} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'sellers' : 'sellers'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="seller"
          title={state.modalRegisters.editingRegister ? 'Editar vendedor' : state.modalRegisters.deletingRegister ? 'Excluir vendedor' : 'Cadastrar vendedor'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Select
                label="Usuário"
                dataOptions={users}
                value={user}
                onChange={(e: any) => setUser(e.target.value)} />
              <Input
                label="Comissão"
                placeholder="3"
                value={commission > 0 ? commission : ''}
                onChange={(e: any) => setCommission(parseInt(e.target.value))} />
            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Sellers;
