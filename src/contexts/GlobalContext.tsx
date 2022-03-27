import React, { createContext, useReducer } from "react";
import { reducerActionType } from "../types/reducerActionType";
import { ThemeType, themeInitialState, themeReducer } from "../reducers/themeReducer";

type initialStateType = {
  theme: ThemeType;
}

type GlobalContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  theme: themeInitialState
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
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
