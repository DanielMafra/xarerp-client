import { reducerActionType } from "../types/reducerActionType";

type RegisterProps = {
  [key: string]: any;
}

export type RegisterType = {
  props: RegisterProps;
  isReady: boolean;
  permissions: string[];
  isSending: boolean;
  hasError: boolean;
  error: string;
}

export const registerInitialState: RegisterType = {
  props: {},
  isReady: false,
  permissions: [],
  isSending: false,
  hasError: false,
  error: ''
}

export const registerReducer = (state: RegisterType, action: reducerActionType) => {
  switch (action.type) {
    case 'REGISTER_CHANGE_PROPS':
      return { ...state, props: action.payload.props };
    case 'REGISTER_CHANGE_ISREADY':
      return { ...state, isReady: action.payload.isReady };
    case 'REGISTER_CHANGE_PERMISSIONS':
      return { ...state, permissions: action.payload.permissions };
    case 'REGISTER_CHANGE_ISSENDING':
      return { ...state, isSending: action.payload.isSending };
    case 'REGISTER_CHANGE_HASERROR':
      return { ...state, hasError: action.payload.hasError };
    case 'REGISTER_CHANGE_ERROR':
      return { ...state, error: action.payload.error };
  }

  return state;
}
