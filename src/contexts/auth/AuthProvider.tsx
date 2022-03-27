import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [loadingValidation, setLoadingValidation] = useState(true);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const storageData = localStorage.getItem('token');
        if (storageData) {
          const data = await api.validateToken(storageData);
          if (data.user) {
            setUser(data.user);
            setPermissions(data.user.permissions.split(','));
          }
        }
      } catch (err: any) {
        console.log(err.response.data);
        if (!err.response.data.isValid) {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      } finally {
        setLoadingValidation(false);
      }
    }
    validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signin = async (email: string, password: string) => {
    try {
      const data = await api.signin(email, password);
      if (data.user && data.token) {
        setUser(data.user);
        setToken(data.token);
        setPermissions(data.user.permissions.split(','));
        return true;
      }
    } catch (err) {
      return false;
    }
    return false;
  }

  const signout = async () => {
    setUser(null);
    setToken('');
    await api.logout();
  }

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout, loadingValidation, permissions }}>
      {children}
    </AuthContext.Provider>
  );
}
