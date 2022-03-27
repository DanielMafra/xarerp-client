import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import { ArrowDropDown } from '@material-ui/icons';
import ProfilePic from '../../../assets/profile.png';

import SwitcherTheme from '../../SwitcherTheme';

const UserMenu = () => {
  const auth = useContext(AuthContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const { user_menu } = useContext(ThemeContext);
  const [openedMenu, setOpenedMenu] = useState(false);

  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (openedMenu && ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        setOpenedMenu(false);
      }
    }

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    }
  }, [openedMenu]);

  const handleOpenMenu = () => {
    setOpenedMenu(!openedMenu);
  }

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = '/';
  }

  return (
    <C.Container ref={ref}>
      <C.AreaMenu onClick={handleOpenMenu}>
        <C.ImgProfile src={ProfilePic} />
        <ArrowDropDown style={{ color: user_menu.icon, fontSize: '20px' }} />
      </C.AreaMenu>

      {openedMenu &&
        <C.Menu>
          <C.Title>
            Conta
          </C.Title>
          <C.ContainerLinks>
            <C.LinkBtn>
              Configurações
            </C.LinkBtn>
            <C.LinkBtn onClick={handleLogout}>
              Sair
            </C.LinkBtn>
          </C.ContainerLinks>
          <C.Title>
            Tema
          </C.Title>
          <C.ContainerLinks className="theme">
            <SwitcherTheme />
          </C.ContainerLinks>
        </C.Menu>
      }
    </ C.Container>
  )
}

export default UserMenu;
