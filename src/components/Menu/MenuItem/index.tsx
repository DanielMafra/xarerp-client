import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import {
  ListAlt,
  Dashboard,
  Store,
  ShowChart,
  EmojiPeople,
  ShoppingCart,
  LocalShipping,
  AssignmentInd,
  BusinessCenter,
  ShopTwo,
  MonetizationOn,
  SupervisedUserCircle,
  Help,
} from '@material-ui/icons';

type MenuItemProps = {
  title: string;
  icon: string;
  link: string;
}

const MenuItem = ({ title, icon, link }: MenuItemProps) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { menu } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();
  let isActive = location.pathname === link;

  const iconProps = {
    color: menu.icon,
    fontSize: '24px'
  }

  const handleClick = (path: string) => {
    dispatch({
      type: 'MENU_CHANGE_OPENED',
      payload: {
        openedMenu: state.menu.openedMenu && false
      }
    });
    navigate(`${path}`);
  }

  return (
    <C.Container active={isActive} onClick={() => handleClick(link)}>
      <C.ItemIcon>
        {icon === 'Dashboard' && <Dashboard style={iconProps} />}
        {icon === 'Store' && <Store style={iconProps} />}
        {icon === 'Stock' && <ShowChart style={iconProps} />}
        {icon === 'Product' && <ListAlt style={iconProps} />}
        {icon === 'Client' && <EmojiPeople style={iconProps} />}
        {icon === 'Sale' && <ShoppingCart style={iconProps} />}
        {icon === 'Carrier' && <LocalShipping style={iconProps} />}
        {icon === 'Provider' && <BusinessCenter style={iconProps} />}
        {icon === 'Seller' && <AssignmentInd style={iconProps} />}
        {icon === 'Purchase' && <ShopTwo style={iconProps} />}
        {icon === 'Financial' && <MonetizationOn style={iconProps} />}
        {icon === 'User' && <SupervisedUserCircle style={iconProps} />}
        {icon === 'Ticket' && <Help style={iconProps} />}
      </C.ItemIcon>
      <C.ItemTitle>
        {title}
      </C.ItemTitle>
    </C.Container>
  );
}

export default MenuItem;
