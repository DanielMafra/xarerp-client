import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import * as C from './styles';
import TablePagination from './TablePagination';
import Loading from '../Loading';

import TableItem from './TableItem';

const TableRegisters = ({ roles }: { roles: string[] }) => {
  const { state } = useContext(GlobalContext);

  return (
    <C.Container>
      <C.TitleArea>
        <C.Title>{state.tableRegisters.title}</C.Title>
      </C.TitleArea>

      <C.TableContainer>
        {state.tableRegisters.loadingTable ? (
          <Loading />
        ) : (
          <C.Table>
            <thead>
              <tr className="teste">
                {state.tableRegisters.heads.map((item, index) => (
                  <C.TableHeadColumn
                    key={index}
                    width={item.width}>
                    {item.title}
                  </C.TableHeadColumn>
                ))}
              </tr>
            </thead>
            <tbody>
              {state.tableRegisters.results.map((item, index) => (
                <TableItem key={index} item={item} roles={roles} />
              ))}
            </tbody>
          </C.Table>
        )}
      </C.TableContainer>

      <TablePagination />

      {state.tableRegisters.loadingPage &&
        <C.LoadingPage>
          <Loading />
        </C.LoadingPage>
      }

    </C.Container>
  );
}

export default TableRegisters;
