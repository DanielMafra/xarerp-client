import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';
import Select from '../../components/ModalRegisters/Select';

import { CreateCarrier } from '../../types/Carrier';
import { TableRegisters } from '../../types/TableRegisters';

const Carriers = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [states, setStates] = useState('Sul');

  const dataProps: CreateCarrier = {
    name,
    states
  }

  const dataOptionsCarrier = [
    {
      name: 'Sul',
      value: 'Sul'
    },
    {
      name: 'Sudeste',
      value: 'Sudeste'
    },
    {
      name: 'Centro-Oeste',
      value: 'Centro-Oeste'
    },
    {
      name: 'Norte',
      value: 'Norte'
    },
    {
      name: 'Nordeste',
      value: 'Nordeste'
    }
  ]

  const data: TableRegisters = {
    endpoint: "carriers",
    key: "carriers",
    roles: ['create_carrier', 'update_carrier', 'delete_carrier'],
    tableHeads: [
      {
        key: 'name',
        title: 'Nome',
        width: 280
      },
      {
        key: 'states',
        title: 'Cobertura',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 180
      }
    ],
    tableTitle: 'Transportadoras cadastradas'
  }

  const handleNewCarrier = () => {
    setName('');
    setStates('Sul');

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

    if (name !== '' && states !== '') {
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
  }, [name, states]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      setName(state.register.props.name);
      setStates(state.register.props.states);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={data} handleNew={handleNewCarrier} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'carriers' : 'carriers'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="carrier"
          title={state.modalRegisters.editingRegister ? 'Editar transportadora' : state.modalRegisters.deletingRegister ? 'Excluir transportadora' : 'Cadastrar transportadora'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Input label="Nome" placeholder="Transportadora 1" value={name} onChange={(e: any) => setName(e.target.value)} />
              <Select label="Cobertura" dataOptions={dataOptionsCarrier} value={states} onChange={(e: any) => setStates(e.target.value)} />
            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Carriers;
