import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';
import * as C from './styles';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';
import Select from '../../components/ModalRegisters/Select';
import Checkbox from '../../components/ModalRegisters/Checkbox';

import { NewCreateUser } from '../../types/UserCreate';
import { TableRegisters } from '../../types/TableRegisters';

type Options = {
  name: string;
  value: string;
}

const Users = () => {
  const api = useApi();
  const { state, dispatch } = useContext(GlobalContext);

  const [stores, setStores] = useState<Options[]>([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [unity, setUnity] = useState('');
  const [position, setPosition] = useState('');

  const dataProps: NewCreateUser = {
    name,
    email,
    unity,
    position,
    permissions: state.register.permissions.join(',')
  }

  const dataTable: TableRegisters = {
    endpoint: "users",
    key: "users",
    roles: ['create_user', 'update_user', 'delete_user'],
    tableHeads: [
      {
        key: 'name',
        title: 'Nome',
        width: 480
      },
      {
        key: 'unity',
        title: 'Loja',
        width: 280
      },
      {
        key: 'position',
        title: 'Área',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 380
      }
    ],
    tableTitle: 'Usuários cadastrados'
  }

  const dataOptionsArea = [
    {
      name: 'Administração',
      value: 'Administração'
    },
    {
      name: 'Financeiro',
      value: 'Financeiro'
    },
    {
      name: 'Vendas',
      value: 'Vendas'
    },
    {
      name: 'Depósito',
      value: 'Depósito'
    }
  ]

  const dataCheckbox = [
    {
      title: 'Lojas',
      roles: ['view_store', 'create_store', 'update_store', 'delete_store']
    },
    {
      title: 'Produtos',
      roles: ['view_product', 'create_product', 'update_product', 'delete_product']
    },
    {
      title: 'Clientes',
      roles: ['view_client', 'create_client', 'update_client', 'delete_client']
    },
    {
      title: 'Vendas',
      roles: ['view_sale', 'create_sale', 'update_sale', 'delete_sale']
    },
    {
      title: 'Transportadoras',
      roles: ['view_carrier', 'create_carrier', 'update_carrier', 'delete_carrier']
    },
    {
      title: 'Fornecedores',
      roles: ['view_provider', 'create_provider', 'update_provider', 'delete_provider']
    },
    {
      title: 'Vendedores',
      roles: ['view_seller', 'create_seller', 'update_seller', 'delete_seller']
    },
    {
      title: 'Compras',
      roles: ['view_purchase', 'create_purchase', 'update_purchase', 'delete_purchase']
    },
    {
      title: 'Financeiro',
      roles: ['view_financial', 'create_register', 'update_register', 'delete_register']
    },
    {
      title: 'Usuários',
      roles: ['view_user', 'create_user', 'update_user', 'delete_user']
    },
    {
      title: 'Tickets',
      roles: ['view_ticket', 'create_ticket', 'update_ticket', 'delete_ticket']
    }
  ]

  const handleNewUser = async () => {
    setName('');
    setEmail('');
    setUnity('');
    setPosition('');
    dispatch({
      type: 'REGISTER_CHANGE_PERMISSIONS',
      payload: {
        permissions: []
      }
    });

    const resultStores = await api.fetchAllData('stores', Number(0));

    if (resultStores.stores) {
      resultStores.stores[1].map((item: { name: string; id: string; }, index: any) => (
        setStores(oldArray => [...oldArray,
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
      name !== '' &&
      email !== '' &&
      unity !== '' &&
      position !== '' &&
      state.register.permissions.length > 0
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
  }, [name, email, unity, position, state.register.permissions]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      (async () => {
        const resultStores = await api.fetchAllData('stores', Number(0));

        if (resultStores.stores) {
          resultStores.stores[1].map((item: { name: string; id: string; }, index: any) => (
            setStores(oldArray => [...oldArray,
            {
              name: item.name,
              value: item.id
            }
            ])
          ));
        }
      })();

      setName(state.register.props.name);
      setEmail(state.register.props.email);
      setUnity(state.register.props.unity_id);
      setPosition(state.register.props.position);
      dispatch({
        type: 'REGISTER_CHANGE_PERMISSIONS',
        payload: {
          permissions: state.register.props.permissions.split(',')
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewUser} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'users' : 'users'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="user"
          title={state.modalRegisters.editingRegister ? 'Editar usuário' : state.modalRegisters.deletingRegister ? 'Excluir usuário' : 'Cadastrar usuário'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Input
                label="Nome"
                placeholder="Usuário 1"
                value={name}
                onChange={(e: any) => setName(e.target.value)} />

              <Input
                label="E-mail"
                placeholder="usuario1@email.com"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} />

              <Select
                label="Loja"
                dataOptions={stores}
                value={unity}
                onChange={(e: any) => setUnity(e.target.value)} />

              <Select
                label="Área"
                dataOptions={dataOptionsArea}
                value={position || ''}
                onChange={(e: any) => setPosition(e.target.value)} />

              <C.Title>
                Permissões de acesso
              </C.Title>

              {dataCheckbox.map((e, i) => (
                <Checkbox key={i} title={e.title} roles={e.roles} />
              ))}

            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Users;
