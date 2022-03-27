import { reducerActionType } from "../types/reducerActionType";

export type ModalRegistersType = {
  openedModal: boolean;
  deletingRegister: boolean;
  editingRegister: boolean;
  registerEditingId: string;
  loadingRegister: boolean;
}

export const modalRegistersInitialState: ModalRegistersType = {
  openedModal: false,
  deletingRegister: false,
  editingRegister: false,
  registerEditingId: '',
  loadingRegister: true
}

export const modalRegistersReducer = (state: ModalRegistersType, action: reducerActionType) => {
  switch (action.type) {
    case 'MODALREGISTERS_SET_OPENEDMODAL':
      return { ...state, openedModal: action.payload.openedModal };
    case 'MODALREGISTERS_SET_DELETINGREGISTER':
      return { ...state, deletingRegister: action.payload.deletingRegister };
    case 'MODALREGISTERS_SET_EDITINGREGISTER':
      return { ...state, editingRegister: action.payload.editingRegister };
    case 'MODALREGISTERS_SET_REGISTEREDITINGID':
      return { ...state, registerEditingId: action.payload.registerEditingId };
    case 'MODALREGISTERS_SET_LOADINGREGISTER':
      return { ...state, loadingRegister: action.payload.loadingRegister };
  }

  return state;
}
