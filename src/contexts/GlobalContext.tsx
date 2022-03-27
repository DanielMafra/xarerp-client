import React, { createContext, useReducer } from "react";
import { reducerActionType } from "../types/reducerActionType";
import { RegisterType, registerInitialState, registerReducer } from "../reducers/registerReducer";
import { ThemeType, themeInitialState, themeReducer } from "../reducers/themeReducer";
import { MenuType, menuInitialState, menuReducer } from "../reducers/menuReducer";
import { TableRegistersType, tableRegistersInitialState, tableRegistersReducer } from "../reducers/tableRegistersReducer";
import { ModalRegistersType, modalRegistersInitialState, modalRegistersReducer } from "../reducers/modalRegistersReducer";

type initialStateType = {
  register: RegisterType;
  tableRegisters: TableRegistersType;
  modalRegisters: ModalRegistersType;
  menu: MenuType;
  theme: ThemeType;
}

type GlobalContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  register: registerInitialState,
  tableRegisters: tableRegistersInitialState,
  modalRegisters: modalRegistersInitialState,
  menu: menuInitialState,
  theme: themeInitialState
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  register: registerReducer(state.register, action),
  tableRegisters: tableRegistersReducer(state.tableRegisters, action),
  modalRegisters: modalRegistersReducer(state.modalRegisters, action),
  menu: menuReducer(state.menu, action),
  theme: themeReducer(state.theme, action)
});

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
