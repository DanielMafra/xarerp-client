import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';
import Select from '../../components/ModalRegisters/Select';

import { CreateClient } from '../../types/Client';
import { TableRegisters } from '../../types/TableRegisters';

type Options = {
  name: string;
  value: string;
}

const Clients = () => {
  const api = useApi();
  const { state, dispatch } = useContext(GlobalContext);

  const [stores, setStores] = useState<Options[]>([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [unity, setUnity] = useState('');

  const dataProps: CreateClient = {
    name,
    email,
    tel,
    cep,
    city,
    state: uf,
    unity
  }

  const dataTable: TableRegisters = {
    endpoint: "clients",
    key: "clients",
    roles: ['create_client', 'update_client', 'delete_client'],
    tableHeads: [
      {
        key: 'name',
        title: 'Nome',
        width: 480
      },
      {
        key: 'email',
        title: 'E-mail',
        width: 280
      },
      {
        key: 'tel',
        title: 'Telefone',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 280
      }
    ],
    tableTitle: 'Clientes cadastrados'
  }

  const handleNewClient = async () => {
    setName('');
    setEmail('');
    setTel('');
    setCep('');
    setCity('');
    setUf('');
    setUnity('');

    setStores([]);

    const resultStores = await api.getRegisters('stores', Number(0));

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
      tel !== '' &&
      cep !== '' &&
      city !== '' &&
      uf !== '' &&
      unity !== ''
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
  }, [name, email, tel, cep, city, uf, unity]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      (async () => {
        setStores([]);

        const resultStores = await api.getRegisters('stores', Number(0));

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
      setTel(state.register.props.tel);
      setCep(state.register.props.cep);
      setCity(state.register.props.city);
      setUf(state.register.props.state);
      setUnity(state.register.props.unity_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewClient} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'clients' : 'clients'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="client"
          title={state.modalRegisters.editingRegister ? 'Editar cliente' : state.modalRegisters.deletingRegister ? 'Excluir cliente' : 'Cadastrar cliente'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Input
                label="Nome"
                placeholder="Cliente 1"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />

              <Input
                label="E-mail"
                placeholder="cliente1@email.com"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Input
                label="Telefone"
                placeholder="11 99999-9999"
                value={tel}
                onChange={(e: any) => setTel(e.target.value)}
              />

              <Input
                label="CEP"
                placeholder="88888888"
                value={cep}
                onChange={(e: any) => setCep(e.target.value)}
              />

              <Input
                label="Cidade"
                placeholder="Cidade 1"
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
              />

              <Input
                label="Estado"
                placeholder="SC"
                value={uf}
                onChange={(e: any) => setUf(e.target.value)}
              />

              <Select
                label="Loja"
                dataOptions={stores}
                value={unity}
                onChange={(e: any) => setUnity(e.target.value)}
              />
            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Clients;
