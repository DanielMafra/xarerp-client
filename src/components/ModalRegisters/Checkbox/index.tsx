import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import * as C from './styles';

type CheckBoxProps = {
  title: string;
  roles: string[];
}

const Checkbox = ({ title, roles }: CheckBoxProps) => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({
        type: 'REGISTER_CHANGE_PERMISSIONS',
        payload: {
          permissions: [
            ...state.register.permissions,
            e.target.name
          ]
        }
      });
    } else if (!e.target.checked) {
      dispatch({
        type: 'REGISTER_CHANGE_PERMISSIONS',
        payload: {
          permissions: state.register.permissions.filter((permission) => permission !== e.target.name)
        }
      });
    }
  }

  return (
    <C.Container>
      <C.TitleArea>{title}</C.TitleArea>
      <C.Roles>
        <C.Role>
          <C.Input
            name={roles[0]}
            checked={state.register.permissions.includes(roles[0])}
            type="checkbox"
            onChange={handleChange}
          />
          <C.Title>Ver</C.Title>
        </C.Role>
        <C.Role>
          <C.Input
            name={roles[1]}
            checked={state.register.permissions.includes(roles[1])}
            type="checkbox"
            onChange={handleChange}
          />
          <C.Title>Criar</C.Title>
        </C.Role>
        <C.Role>
          <C.Input
            name={roles[2]}
            checked={state.register.permissions.includes(roles[2])}
            type="checkbox"
            onChange={handleChange}
          />
          <C.Title>Editar</C.Title>
        </C.Role>
        <C.Role>
          <C.Input
            name={roles[3]}
            checked={state.register.permissions.includes(roles[3])}
            type="checkbox"
            onChange={handleChange}
          />
          <C.Title>Excluir</C.Title>
        </C.Role>
      </C.Roles>
    </C.Container>
  );
}

export default Checkbox;
