import { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/common/input';
import Button from '../components/common/button';
import logoImage from '../assets/logo.jpg';
import illustrationImage from '../assets/ilustration.png';
import { useNavigate } from 'react-router-dom';


const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: var(--white);
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
`;

const IllustrationSection = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-bg);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Login = () => {

  const navigate = useNavigate(); 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const MOCK_EMAIL = 'admin@tienda.com';
    const MOCK_PASSWORD = '123';

  
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      console.log('Login exitoso! Redirigiendo...');

      navigate('/dashboard'); 

    } else {
      setError('Credenciales inválidas. Usa: ' + MOCK_EMAIL + ' / ' + MOCK_PASSWORD);
    }
  };

  return (
    // ... (El resto de tu JSX con los Inputs y el Button)
    <LoginContainer>
      <FormSection>
        <FormWrapper>
          <h2>Bienvenido de Vuelta</h2>
          <p>Ingresa tus credenciales para acceder al sistema.</p>
          <form 
            onSubmit={handleSubmit} // Asigna el manejador de envío
            style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Input y manejo de estado para Email */}
            <Input 
              label="Correo Electrónico" 
              id="email" 
              type="email" 
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* Input y manejo de estado para Contraseña */}
            <Input 
              label="Contraseña" 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red', margin: '0', fontWeight: '500' }}>{error}</p>}
            <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Ingresar</Button>
          </form>
        </FormWrapper>
      </FormSection>
      <IllustrationSection>
      </IllustrationSection>
    </LoginContainer>
  );
};

export default Login;