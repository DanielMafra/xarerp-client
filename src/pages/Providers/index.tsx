import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';

import { CreateProvider } from '../../types/Provider';
import { TableRegisters } from '../../types/TableRegisters';

const Providers = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const dataProps: CreateProvider = {
    name,
    email,
    tel
  }

  const dataTable: TableRegisters = {
    endpoint: "providers",
    key: "providers",
    roles: ['create_provider', 'update_provider', 'delete_provider'],
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
        width: 380
      }
    ],
    tableTitle: 'Fornecedores cadastrados'
  }

  const handleNewProvider = () => {
    setName('');
    setEmail('');
    setTel('');

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

    if (name !== '' && email !== '' && tel !== '') {
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
  }, [name, email, tel]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      setName(state.register.props.name);
      setEmail(state.register.props.email);
      setTel(state.register.props.tel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewProvider} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'providers' : 'providers'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="provider"
          title={state.modalRegisters.editingRegister ? 'Editar fornecedor' : state.modalRegisters.deletingRegister ? 'Excluir fornecedor' : 'Cadastrar fornecedor'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Input label="Nome" placeholder="Fornecedor 1" value={name} onChange={(e: any) => setName(e.target.value)} />
              <Input label="E-mail" placeholder="fornecedor1@email.com" value={email} onChange={(e: any) => setEmail(e.target.value)} />
              <Input label="Telefone" placeholder="11 99999-9999" value={tel} onChange={(e: any) => setTel(e.target.value)} />
            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Providers;
