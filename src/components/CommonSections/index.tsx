import { useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';
import { useCleanup } from '../../hooks/useCleanup';
import * as C from './styles';
import { Add } from '@material-ui/icons';

import Search from '../Search';
import TableRegisters from '../../components/TableRegisters';

type HeadsTable = {
  key: string,
  title: string,
  width: number
}

type CommonSectionsProps = {
  data: {
    endpoint: string;
    key: string;
    roles: string[];
    tableHeads: HeadsTable[];
    tableTitle: string;
  };
  handleNew: () => void;
}

const CommonSections = ({ data, handleNew }: CommonSectionsProps) => {
  const auth = useContext(AuthContext);
  const { state, dispatch } = useContext(GlobalContext);
  const api = useApi();
  const { clearOnPageChange } = useCleanup();

  useEffect(() => {
    clearOnPageChange();
    dispatch({
      type: 'TABLEREGISTERS_SET_TITLE',
      payload: {
        title: data.tableTitle
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_LOADINGTABLE',
      payload: {
        loadingTable: true
      }
    });
    (async () => {
      try {
        const result = await api.fetchAllData(data.endpoint, 0);

        if (result[data.key]) {
          dispatch({
            type: 'TABLEREGISTERS_SET_RESULTS',
            payload: {
              results: result[data.key][1]
            }
          });
          dispatch({
            type: 'TABLEREGISTERS_SET_HEADS',
            payload: {
              heads: data.tableHeads
            }
          });
          dispatch({
            type: 'TABLEREGISTERS_SET_TOTALREGISTERS',
            payload: {
              totalRegisters: result[data.key][0]
            }
          });
          dispatch({
            type: 'TABLEREGISTERS_SET_TOTALPAGES',
            payload: {
              totalPages: Math.ceil(result[data.key][0] / 10)
            }
          });
        }
      } catch (err) {

      } finally {
        dispatch({
          type: 'TABLEREGISTERS_SET_LOADINGTABLE',
          payload: {
            loadingTable: false
          }
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!state.tableRegisters.initialFetch) {
      (async () => {
        try {
          const result = await api.fetchAllData(data.endpoint, Number(state.tableRegisters.currentPage), state.tableRegisters.searchQuery);

          if (result[data.key]) {
            dispatch({
              type: 'TABLEREGISTERS_SET_RESULTS',
              payload: {
                results: result[data.key][1]
              }
            });
            dispatch({
              type: 'TABLEREGISTERS_SET_TOTALREGISTERS',
              payload: {
                totalRegisters: result[data.key][0]
              }
            });
            dispatch({
              type: 'TABLEREGISTERS_SET_TOTALPAGES',
              payload: {
                totalPages: Math.ceil(result[data.key][0] / 10)
              }
            });
          }
        } catch (err) {

        } finally {
          dispatch({
            type: 'TABLEREGISTERS_SET_LOADINGPAGE',
            payload: {
              loadingPage: false
            }
          });
          dispatch({
            type: 'TABLEREGISTERS_SET_INITIALFETCH',
            payload: {
              initialFetch: true
            }
          });
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.tableRegisters.currentPage, state.tableRegisters.searchQuery, state.tableRegisters.refreshTable]);

  return (
    <C.Container>
      <C.NewAndSearch>
        <Search />

        {auth.permissions.includes(data.roles[0]) &&
          <C.NewButton onClick={handleNew}>
            <Add style={{ color: '#ffffff', fontSize: '16px', marginRight: '4px' }} />
            Novo registro
          </C.NewButton>
        }
      </C.NewAndSearch>

      <TableRegisters roles={data.roles} />
    </C.Container>
  );
}

export default CommonSections;
