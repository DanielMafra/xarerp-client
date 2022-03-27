import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/auth/AuthContext";
import { GlobalContext } from "./contexts/GlobalContext";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./helpers/RequireAuth";

import * as C from './AppStyles';
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from './styles/global';

import Menu from "./components/Menu";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Stores from "./pages/Stores";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Sales from "./pages/Sales";
import Carriers from "./pages/Carriers";
import Providers from "./pages/Providers";
import Sellers from "./pages/Sellers";
import Purchases from "./pages/Purchases";
import Financial from "./pages/Financial";
import Users from "./pages/Users";
import Tickets from "./pages/Tickets";

function App () {
  const auth = useContext(AuthContext);
  const { state, dispatch } = useContext(GlobalContext);
  const themeMode = state.theme.type === 'light' ? light : dark;

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme');

    if (themeStorage) {
      dispatch({
        type: 'THEME_CHANGE_TYPE',
        payload: {
          type: themeStorage
        }
      })
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <C.Container>
        {auth.user && <Menu />}
        <C.PageBody>
          <Header />
          <C.Content>
            <Routes>

              <Route path="/" element={
                <RequireAuth role={"view_dashboard"}>
                  <Dashboard />
                </RequireAuth>}
              />

              <Route path="/stores" element={
                <RequireAuth role={"view_store"}>
                  <Stores />
                </RequireAuth>}
              />

              <Route path="/stocks" element={
                <RequireAuth role={"view_stock"}>
                  <h1>Estoque</h1>
                </RequireAuth>}
              />

              <Route path="/products" element={
                <RequireAuth role={"view_product"}>
                  <Products />
                </RequireAuth>}
              />

              <Route path="/clients" element={
                <RequireAuth role={"view_client"}>
                  <Clients />
                </RequireAuth>}
              />

              <Route path="/sales" element={
                <RequireAuth role={"view_sale"}>
                  <Sales />
                </RequireAuth>}
              />

              <Route path="/carriers" element={
                <RequireAuth role={"view_carrier"}>
                  <Carriers />
                </RequireAuth>}
              />

              <Route path="/providers" element={
                <RequireAuth role={"view_provider"}>
                  <Providers />
                </RequireAuth>}
              />

              <Route path="/sellers" element={
                <RequireAuth role={"view_seller"}>
                  <Sellers />
                </RequireAuth>}
              />

              <Route path="/purchases" element={
                <RequireAuth role={"view_purchase"}>
                  <Purchases />
                </RequireAuth>}
              />

              <Route path="/financial" element={
                <RequireAuth role={"view_financial"}>
                  <Financial />
                </RequireAuth>}
              />

              <Route path="/users" element={
                <RequireAuth role={"view_user"}>
                  <Users />
                </RequireAuth>}
              />

              <Route path="/tickets" element={
                <RequireAuth role={"view_ticket"}>
                  <Tickets />
                </RequireAuth>}
              />

            </Routes>
          </C.Content>
        </C.PageBody>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
