import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import { NotificationsNone } from '@material-ui/icons';

const Notifications = () => {
  const { notifications } = useContext(ThemeContext);

  return (
    <C.Container>
      <NotificationsNone style={{ color: notifications.icon, fontSize: '26px' }} />
    </C.Container>
  );
}

export default Notifications;
