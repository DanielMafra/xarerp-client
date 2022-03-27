import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import { Brightness2, WbSunny } from '@material-ui/icons';

const SwitcherTheme = ({ noAuth }: { noAuth?: string }) => {
  const { switcher } = useContext(ThemeContext);
  const { state, dispatch } = useContext(GlobalContext);

  const handleChangeTheme = (type: string) => {
    dispatch({
      type: 'THEME_CHANGE_TYPE',
      payload: {
        type
      }
    });
    localStorage.setItem('theme', type);
  }

  return (
    <C.SwitcherContainer className={noAuth}>
      <C.SwitchButton
        className={`left ${state.theme.type === 'dark' ? 'active' : ''}`}
        onClick={() => handleChangeTheme('dark')}
      >
        <Brightness2 style={{ color: switcher.icon, fontSize: '16px' }} />
      </C.SwitchButton>
      <C.SwitchButton
        className={`right ${state.theme.type === 'light' ? 'active' : ''}`}
        onClick={() => handleChangeTheme('light')}
      >
        <WbSunny style={{ color: switcher.icon, fontSize: '16px' }} />
      </C.SwitchButton>
    </C.SwitcherContainer>
  );
}

export default SwitcherTheme;
