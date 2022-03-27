import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth/AuthContext';
import { GlobalContext } from '../../../contexts/GlobalContext';
import * as C from './styles';
import { Edit, Delete } from '@material-ui/icons';

type ItemProps = {
  [key: string]: any
}

type TableItemProps = {
  item: ItemProps,
  roles: string[]
}

const TableItem = ({ item, roles }: TableItemProps) => {
  const auth = useContext(AuthContext);
  const { state, dispatch } = useContext(GlobalContext);

  const handleEdit = () => {
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: item.id
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_EDITINGREGISTER',
      payload: {
        editingRegister: true
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_PROPS',
      payload: {
        props: {
          ...item
        }
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_LOADINGREGISTER',
      payload: {
        loadingRegister: false
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_OPENEDMODAL',
      payload: {
        openedModal: true
      }
    });
  }

  const handleDelete = () => {
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: item.id
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_LOADINGREGISTER',
      payload: {
        loadingRegister: false
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_DELETINGREGISTER',
      payload: {
        deletingRegister: true
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_OPENEDMODAL',
      payload: {
        openedModal: true
      }
    });
  }

  return (
    <C.TableLine>
      {state.tableRegisters.heads.map((e, i) => (
        e.key === 'actions' ? (
          <C.TableColumn key={i}>

            <C.Buttons>
              {auth.permissions.includes(roles[1]) &&
                <C.Button className="editButton" onClick={handleEdit}>
                  <Edit style={{ color: '#fff', fontSize: '16px' }} />
                </C.Button>
              }

              {auth.permissions.includes(roles[2]) &&
                <C.Button className="deleteButton" onClick={handleDelete}>
                  <Delete style={{ color: '#fff', fontSize: '16px' }} />
                </C.Button>
              }
            </C.Buttons>

          </C.TableColumn>
        ) : (
          <C.TableColumn key={i}>{item[e.key]}</C.TableColumn>
        )
      ))}
    </C.TableLine>
  );
}

export default TableItem;
