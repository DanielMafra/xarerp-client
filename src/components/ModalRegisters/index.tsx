import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useApi } from '../../hooks/useApi';
import { useCleanup } from '../../hooks/useCleanup';
import { ThemeContext } from 'styled-components';
import * as C from './styles';
import { Close } from '@material-ui/icons';

import Loading from '../Loading';
import Error from '../Error';

type ModalRegistersProps = {
  endpoint: string;
  type: string;
  dataKey: string;
  title: string;
  children: JSX.Element;
}

const ModalRegisters = ({ endpoint, type, dataKey, title, children }: ModalRegistersProps) => {
  const api = useApi();
  const {
    clearOnAnyModalRegisterClosed,
    clearOnRegisterUpdateCancel,
    clearOnRegisterDeleteCancel,
    clearOnRegisterCreated,
    clearOnRegisterUpdated,
    clearOnRegisterDeleted
  } = useCleanup();
  const { state, dispatch } = useContext(GlobalContext);
  const { modal_registers } = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleCancel = () => {
    clearOnAnyModalRegisterClosed();
    clearOnRegisterUpdateCancel();
    clearOnRegisterDeleteCancel();
  }

  const handleSubmit = async () => {
    if (state.register.isReady) {
      dispatch({
        type: 'REGISTER_CHANGE_ISSENDING',
        payload: {
          isSending: true
        }
      });
      let result;
      if (type === 'update') {
        result = await api.updateRegister(endpoint, state.modalRegisters.registerEditingId, state.register.props);
      } else if (type === 'create') {
        result = await api.createRegister(endpoint, state.register.props);
      }
      //const result = await api.createRegister(endpoint, state.register.props);
      if (result[dataKey]) {
        clearOnAnyModalRegisterClosed();
        if (type === 'create') {
          clearOnRegisterCreated();
        } else if (type === 'update') {
          clearOnRegisterUpdated();
        }
      } else if (result.error) {
        dispatch({
          type: 'REGISTER_CHANGE_ERROR',
          payload: {
            error: result.error
          }
        });
        dispatch({
          type: 'REGISTER_CHANGE_HASERROR',
          payload: {
            hasError: true
          }
        });
      } else {
        dispatch({
          type: 'REGISTER_CHANGE_ERROR',
          payload: {
            error: 'Ocorreu um erro.'
          }
        });
        dispatch({
          type: 'REGISTER_CHANGE_HASERROR',
          payload: {
            hasError: true
          }
        });
      }
    } else {
      dispatch({
        type: 'REGISTER_CHANGE_HASERROR',
        payload: {
          hasError: true
        }
      });
    }
    dispatch({
      type: 'REGISTER_CHANGE_ISSENDING',
      payload: {
        isSending: false
      }
    });
  }

  const handleDelete = async () => {
    const result = await api.deleteRegister(endpoint, state.modalRegisters.registerEditingId);
    if (result.status) {
      clearOnAnyModalRegisterClosed();
      clearOnRegisterDeleted();
    }
  }

  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (state.modalRegisters.openedModal && ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        dispatch({
          type: 'MODALREGISTERS_SET_OPENEDMODAL',
          payload: {
            openedModal: false
          }
        });
      }
    }

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.modalRegisters.openedModal]);

  return (
    <C.ModalContainer>
      <C.ModalContent className="onEnterModal" ref={ref}>
        <C.ModalHeader>
          <C.ModalTitle>{title}</C.ModalTitle>
          <C.ModalCloseButton
            disabled={state.register.isSending}
            onClick={handleCancel}
          >
            <Close style={{ color: modal_registers.font, fontSize: '24px' }} />
          </C.ModalCloseButton>
        </C.ModalHeader>

        {state.modalRegisters.loadingRegister ? (
          <Loading />
        ) : (
          <C.Form>
            {children}
          </C.Form>
        )}

        {state.register.hasError
          &&
          <Error>
            <span>{state.register.error}</span>
          </Error>
        }

        <C.ButtonArea>
          {!state.modalRegisters.loadingRegister
            &&
            <C.Button
              className={`${state.modalRegisters.deletingRegister ? 'buttonDelete' : 'buttonSave'}`}
              disabled={state.register.isSending}
              onClick={state.modalRegisters.deletingRegister ? handleDelete : handleSubmit}
            >
              {state.modalRegisters.deletingRegister ? 'Excluir' : 'Salvar'}
            </C.Button>}
          <C.Button
            className="buttonCancel"
            disabled={state.register.isSending}
            onClick={handleCancel}
          >
            Cancelar
          </C.Button>
        </C.ButtonArea>

      </C.ModalContent>
    </C.ModalContainer>
  );
}

export default ModalRegisters;
