import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ThemeContext } from 'styled-components';
import { useWindowSize } from "../../hooks/useResize";
import * as C from './styles';
import { Menu } from '@material-ui/icons';

import SwitcherTheme from "../SwitcherTheme";
import UserMenu from "./UserMenu";
import Notifications from "./Notifications";

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { menu } = useContext(ThemeContext);
  const [width] = useWindowSize();
  const auth = useContext(AuthContext);

  const handleOpenMenu = () => {
    dispatch({
      type: 'MENU_CHANGE_OPENED',
      payload: {
        openedMenu: !state.menu.openedMenu
      }
    })
  }

  return (
    <>
      {auth.user ? (
        <C.Container>
          {width < 720 &&
            <C.MenuBtn onClick={handleOpenMenu}>
              <Menu style={{ color: menu.icon, fontSize: '32px' }} />
            </ C.MenuBtn>
          }

          <C.HeaderMenuArea>
            <Notifications />
            <UserMenu />
          </C.HeaderMenuArea>
        </C.Container>

      ) : (
        <SwitcherTheme noAuth="noAuth" />
      )}
    </>
  );
}

export default Header;
