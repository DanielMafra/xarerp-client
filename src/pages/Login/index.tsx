import { FormEvent, useState, useContext } from 'react';
import * as C from './styles';
import { AuthContext } from '../../contexts/auth/AuthContext';

const Login = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        setLoading(false);
        window.location.href = '/';
      } else {
        setLoading(false);
        setError(true);
      }
    }
  }

  return (
    <C.Container>
      <C.LoginCard>
        <C.Title>
          Login
        </C.Title>
        <C.Description>
          Acesse sua conta para continuar
        </C.Description>

        <C.Form onSubmit={handleSubmit}>
          <C.Input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='E-mail'
            disabled={loading}
            required
          />
          <C.Input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Senha'
            disabled={loading}
            required
          />

          {error &&
            <C.Error>
              E-mail ou senha inválido.
            </C.Error>
          }

          <C.Button
            disabled={loading}
          >
            Entrar
          </C.Button>
        </C.Form>

      </C.LoginCard>
    </C.Container>
  )
}

export default Login;
