import { reducerActionType } from "../types/reducerActionType";

export type MenuType = {
  openedMenu: boolean;
}

export const menuInitialState: MenuType = {
  openedMenu: false,
}

export const menuReducer = (state: MenuType, action: reducerActionType) => {
  switch (action.type) {
    case 'MENU_CHANGE_OPENED':
      return { ...state, openedMenu: action.payload.openedMenu };
  }

  return state;
}
