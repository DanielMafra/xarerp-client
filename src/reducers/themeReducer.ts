import { reducerActionType } from "../types/reducerActionType";

export type ThemeType = {
  type: 'light' | 'dark';
}

export const themeInitialState: ThemeType = {
  type: 'dark',
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
  switch (action.type) {
    case 'THEME_CHANGE_TYPE':
      return { ...state, type: action.payload.type };
  }

  return state;
}
