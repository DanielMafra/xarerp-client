import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export const useCleanup = () => {
  const { dispatch } = useContext(GlobalContext);

  const clearOnAnyModalRegisterClosed = () => {
    dispatch({
      type: 'MODALREGISTERS_SET_LOADINGREGISTER',
      payload: {
        loadingRegister: false
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_OPENEDMODAL',
      payload: {
        openedModal: false
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_HASERROR',
      payload: {
        hasError: false
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_PROPS',
      payload: {
        props: {}
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_ISREADY',
      payload: {
        isReady: false
      }
    });
    dispatch({
      type: 'REGISTER_CHANGE_ERROR',
      payload: {
        error: ''
      }
    });
  }

  const clearOnRegisterCreated = () => {
    dispatch({
      type: 'REGISTER_CHANGE_ISSENDING',
      payload: {
        isSending: false
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_INITIALFETCH',
      payload: {
        initialFetch: false
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_REFRESHTABLE',
      payload: {
        refreshTable: new Date().getTime().toString()
      }
    });
  }

  const clearOnRegisterUpdated = () => {
    dispatch({
      type: 'REGISTER_CHANGE_ISSENDING',
      payload: {
        isSending: false
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_INITIALFETCH',
      payload: {
        initialFetch: false
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_REFRESHTABLE',
      payload: {
        refreshTable: new Date().getTime().toString()
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: ''
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_EDITINGREGISTER',
      payload: {
        editingRegister: false
      }
    });
  }

  const clearOnRegisterDeleted = () => {
    dispatch({
      type: 'TABLEREGISTERS_SET_INITIALFETCH',
      payload: {
        initialFetch: false
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_REFRESHTABLE',
      payload: {
        refreshTable: new Date().getTime().toString()
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: ''
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_DELETINGREGISTER',
      payload: {
        deletingRegister: false
      }
    });
  }

  const clearOnRegisterUpdateCancel = () => {
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: ''
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_EDITINGREGISTER',
      payload: {
        editingRegister: false
      }
    });
  }

  const clearOnRegisterDeleteCancel = () => {
    dispatch({
      type: 'MODALREGISTERS_SET_REGISTEREDITINGID',
      payload: {
        registerEditingId: ''
      }
    });
    dispatch({
      type: 'MODALREGISTERS_SET_DELETINGREGISTER',
      payload: {
        deletingRegister: false
      }
    });
  }

  const clearOnPageChange = () => {
    dispatch({
      type: 'TABLEREGISTERS_SET_CURRENTPAGE',
      payload: {
        currentPage: 0
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_RESULTS',
      payload: {
        results: []
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_HEADS',
      payload: {
        heads: []
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_TOTALREGISTERS',
      payload: {
        totalRegisters: 0
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_TOTALPAGES',
      payload: {
        totalPages: 0
      }
    });
    dispatch({
      type: 'TABLEREGISTERS_SET_SEARCHQUERY',
      payload: {
        searchQuery: ''
      }
    });
  }

  return {
    clearOnAnyModalRegisterClosed,
    clearOnRegisterCreated,
    clearOnRegisterUpdated,
    clearOnRegisterDeleted,
    clearOnRegisterUpdateCancel,
    clearOnRegisterDeleteCancel,
    clearOnPageChange
  }
}
