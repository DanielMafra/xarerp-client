import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Input from '../../components/ModalRegisters/Input';
import Select from '../../components/ModalRegisters/Select';

import { CreateFinancial } from '../../types/Financial';
import { TableRegisters } from '../../types/TableRegisters';

type Options = {
  name: string;
  value: string;
}

const Financial = () => {
  const api = useApi();
  const { state, dispatch } = useContext(GlobalContext);

  const [stores, setStores] = useState<Options[]>([]);

  const [type, setType] = useState(1);
  const [unity, setUnity] = useState('');
  const [value, setValue] = useState(0);

  const dataProps: CreateFinancial = {
    type,
    unity,
    value
  }

  const registerOptions: Options[] = [
    {
      name: 'Entrada',
      value: '1'
    },
    {
      name: 'Saída',
      value: '0'
    }
  ]

  const dataTable: TableRegisters = {
    endpoint: "financial/registers",
    key: "financial",
    roles: ['create_financial', 'update_financial', 'delete_financial'],
    tableHeads: [
      {
        key: 'unity',
        title: 'Loja',
        width: 480
      },
      {
        key: 'type',
        title: 'Tipo',
        width: 280
      },
      {
        key: 'value_formatted',
        title: 'Valor',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 380
      }
    ],
    tableTitle: 'Registros cadastrados'
  }

  const handleNewFinancial = async () => {
    setType(1);
    setUnity('');
    setValue(0);

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
      (type === 0 || type === 1) &&
      unity !== '' &&
      value > 0
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
  }, [type, unity, value]);

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

      setType(state.register.props.type === 'Entrada' ? 1 : 0);
      setUnity(state.register.props.unity_id);
      setValue(state.register.props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewFinancial} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'financial/registers' : 'financial/registers'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="financial"
          title={state.modalRegisters.editingRegister ? 'Editar registro' : state.modalRegisters.deletingRegister ? 'Excluir registro' : 'Cadastrar registro'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Select
                label="Tipo"
                dataOptions={registerOptions}
                value={type}
                onChange={(e: any) => setType(parseInt(e.target.value))} />

              <Select
                label="Loja"
                dataOptions={stores}
                value={unity}
                onChange={(e: any) => setUnity(e.target.value)} />

              <Input
                label="Valor"
                placeholder="50"
                value={value > 0 ? value : ''}
                onChange={(e: any) => setValue(parseInt(e.target.value))} />

            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Financial;
