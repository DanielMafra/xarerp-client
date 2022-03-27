import { useContext } from "react";
import Login from "../pages/Login";
import { AuthContext } from "../contexts/auth/AuthContext";

export const RequireAuth = ({ children, role }: { children: JSX.Element, role: string }) => {
  const token = localStorage.getItem('token');
  const auth = useContext(AuthContext);

  if (token && auth.loadingValidation) {
    return <h1>Carregando...</h1>
  }

  if (!auth.user) {
    return <Login />;
  }

  if (!auth.permissions.includes(role)) {
    return <h1>Você não tem permissão para acessar essa rota.</h1>
  }

  return children;
}
