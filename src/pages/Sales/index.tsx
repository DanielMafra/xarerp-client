import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';

import CommonSections from '../../components/CommonSections';

import ModalRegisters from '../../components/ModalRegisters';
import Select from '../../components/ModalRegisters/Select';
import Input from '../../components/ModalRegisters/Input';

import { CreateSale } from '../../types/Sale';
import { TableRegisters } from '../../types/TableRegisters';

type Options = {
  name: string;
  value: string;
}

const Sales = () => {
  const api = useApi();
  const { state, dispatch } = useContext(GlobalContext);

  const [products, setProducts] = useState<Options[]>([]);
  const [stores, setStores] = useState<Options[]>([]);
  const [clients, setClients] = useState<Options[]>([]);
  const [sellers, setSellers] = useState<Options[]>([]);
  const [carriers, setCarriers] = useState<Options[]>([]);

  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unity, setUnity] = useState('');
  const [client, setClient] = useState('');
  const [seller, setSeller] = useState('');
  const [carrier, setCarrier] = useState('');

  const dataProps: CreateSale = {
    product,
    quantity,
    unity,
    client,
    seller,
    carrier
  }

  const dataTable: TableRegisters = {
    endpoint: "sales",
    key: "sales",
    roles: ['create_sale', 'update_sale', 'delete_sale'],
    tableHeads: [
      {
        key: 'product_name',
        title: 'Produto',
        width: 480
      },
      {
        key: 'unity',
        title: 'Loja',
        width: 280
      },
      {
        key: 'seller',
        title: 'Vendedor',
        width: 280
      },
      {
        key: 'actions',
        title: 'Ações',
        width: 380
      }
    ],
    tableTitle: 'Vendas cadastradas'
  }

  const handleNewSale = async () => {
    setProduct('');
    setQuantity(0);
    setUnity('');
    setClient('');
    setSeller('');
    setCarrier('');

    setProducts([]);
    setStores([]);
    setClients([]);
    setSellers([]);
    setCarriers([]);

    const resultProducts = await api.getRegisters('products', Number(0));
    const resultStores = await api.getRegisters('stores', Number(0));
    const resultClients = await api.getRegisters('clients', Number(0));
    const resultSellers = await api.getRegisters('sellers', Number(0));
    const resultCarriers = await api.getRegisters('carriers', Number(0));

    if (resultProducts.products) {
      resultProducts.products[1].map((item: { name: string; id: string; }, index: any) => (
        setProducts(oldArray => [...oldArray,
        {
          name: item.name,
          value: item.id
        }
        ])
      ));
    }

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

    if (resultClients.clients) {
      resultClients.clients[1].map((item: { name: string; id: string; }, index: any) => (
        setClients(oldArray => [...oldArray,
        {
          name: item.name,
          value: item.id
        }
        ])
      ));
    }

    if (resultSellers.sellers) {
      resultSellers.sellers[1].map((item: { user: string; id: string; }, index: any) => (
        setSellers(oldArray => [...oldArray,
        {
          name: item.user,
          value: item.id
        }
        ])
      ));
    }

    if (resultCarriers.carriers) {
      resultCarriers.carriers[1].map((item: { name: string; id: string; }, index: any) => (
        setCarriers(oldArray => [...oldArray,
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
      product !== '' &&
      quantity > 0 &&
      unity !== '' &&
      client !== '' &&
      unity !== '' &&
      seller !== '' &&
      carrier !== ''
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
  }, [product, quantity, unity, client, seller, carrier]);

  useEffect(() => {
    if (state.modalRegisters.editingRegister && state.modalRegisters.registerEditingId !== '') {
      (async () => {
        setProducts([]);
        setStores([]);
        setClients([]);
        setSellers([]);
        setCarriers([]);

        const resultProducts = await api.getRegisters('products', Number(0));
        const resultStores = await api.getRegisters('stores', Number(0));
        const resultClients = await api.getRegisters('clients', Number(0));
        const resultSellers = await api.getRegisters('sellers', Number(0));
        const resultCarriers = await api.getRegisters('carriers', Number(0));

        if (resultProducts.products) {
          resultProducts.products[1].map((item: { name: string; id: string; }, index: any) => (
            setProducts(oldArray => [...oldArray,
            {
              name: item.name,
              value: item.id
            }
            ])
          ));
        }

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

        if (resultClients.clients) {
          resultClients.clients[1].map((item: { name: string; id: string; }, index: any) => (
            setClients(oldArray => [...oldArray,
            {
              name: item.name,
              value: item.id
            }
            ])
          ));
        }

        if (resultSellers.sellers) {
          resultSellers.sellers[1].map((item: { user: string; id: string; }, index: any) => (
            setSellers(oldArray => [...oldArray,
            {
              name: item.user,
              value: item.id
            }
            ])
          ));
        }

        if (resultCarriers.carriers) {
          resultCarriers.carriers[1].map((item: { name: string; id: string; }, index: any) => (
            setCarriers(oldArray => [...oldArray,
            {
              name: item.name,
              value: item.id
            }
            ])
          ));
        }
      })();

      setProduct(state.register.props.product_id);
      setQuantity(state.register.props.quantity);
      setUnity(state.register.props.unity_id);
      setClient(state.register.props.client_id);
      setSeller(state.register.props.seller_id);
      setCarrier(state.register.props.carrier_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.editingRegister, state.modalRegisters.registerEditingId]);

  return (
    <>
      <CommonSections data={dataTable} handleNew={handleNewSale} />

      {state.modalRegisters.openedModal &&
        <ModalRegisters
          endpoint={state.modalRegisters.editingRegister ? 'sales' : 'sales'}
          type={state.modalRegisters.editingRegister ? 'update' : state.modalRegisters.deletingRegister ? 'delete' : 'create'}
          dataKey="sale"
          title={state.modalRegisters.editingRegister ? 'Editar venda' : state.modalRegisters.deletingRegister ? 'Excluir venda' : 'Cadastrar venda'}
        >
          {state.modalRegisters.deletingRegister ? (
            <p>Esse processo é irreversível e excluirá também outros dados que estejam relacionados a esse registro. Deseja continuar?</p>
          ) : (
            <>
              <Select
                label="Produto"
                dataOptions={products}
                value={product}
                onChange={(e: any) => setProduct(e.target.value)} />

              <Input
                label="Quantidade"
                placeholder="5"
                value={quantity > 0 ? quantity : ''}
                onChange={(e: any) => setQuantity(parseInt(e.target.value))}
              />

              <Select
                label="Loja"
                dataOptions={stores}
                value={unity}
                onChange={(e: any) => setUnity(e.target.value)} />

              <Select
                label="Cliente"
                dataOptions={clients}
                value={client}
                onChange={(e: any) => setClient(e.target.value)} />

              <Select
                label="Vendedor"
                dataOptions={sellers}
                value={seller}
                onChange={(e: any) => setSeller(e.target.value)} />

              <Select
                label="Transportadora"
                dataOptions={carriers}
                value={carrier}
                onChange={(e: any) => setCarrier(e.target.value)} />
            </>
          )}
        </ModalRegisters>
      }

    </>
  );
}

export default Sales;
