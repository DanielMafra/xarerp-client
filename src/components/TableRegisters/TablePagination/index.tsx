import { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const TablePagination = () => {
  const { table_registers } = useContext(ThemeContext);
  const { state, dispatch } = useContext(GlobalContext);

  const handleNextPage = () => {
    dispatch({
      type: 'TABLEREGISTERS_SET_INITIALFETCH',
      payload: {
        initialFetch: false
      }
    });
    if ((state.tableRegisters.currentPage + 1) < state.tableRegisters.totalPages) {
      dispatch({
        type: 'TABLEREGISTERS_SET_CURRENTPAGE',
        payload: {
          currentPage: state.tableRegisters.currentPage + 1
        }
      });
      dispatch({
        type: 'TABLEREGISTERS_SET_LOADINGPAGE',
        payload: {
          loadingPage: true
        }
      });
    }
  }

  const handlePreviousPage = () => {
    dispatch({
      type: 'TABLEREGISTERS_SET_INITIALFETCH',
      payload: {
        initialFetch: false
      }
    });
    if (state.tableRegisters.currentPage > 0) {
      dispatch({
        type: 'TABLEREGISTERS_SET_CURRENTPAGE',
        payload: {
          currentPage: state.tableRegisters.currentPage - 1
        }
      });
      dispatch({
        type: 'TABLEREGISTERS_SET_LOADINGPAGE',
        payload: {
          loadingPage: true
        }
      });
    }
  }

  return (
    <C.PaginationArea>
      <p>
        {`Página ${state.tableRegisters.currentPage + 1} `}
        de
        {` ${state.tableRegisters.totalPages}`}
      </p>

      {state.tableRegisters.currentPage > 0 &&
        <button onClick={handlePreviousPage}>
          <ArrowBackIos style={{ color: table_registers.title_table, fontSize: '18px' }} />
        </button>
      }

      {(state.tableRegisters.currentPage + 1) < state.tableRegisters.totalPages &&
        <button onClick={handleNextPage}>
          <ArrowForwardIos style={{ color: table_registers.title_table, fontSize: '18px' }} />
        </button>
      }
    </C.PaginationArea>
  );
}

export default TablePagination;
