import React from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import logoImage from '../assets/logo.jpg';
import illustrationImage from '../assets/ilustration.png';

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
  return (
    <LoginContainer>
      <FormSection>
        <FormWrapper>
          {/* <img src={logoImage} alt="Logo" style={{ width: '100px', marginBottom: '30px' }} /> */}
          <h2>Bienvenido de Vuelta</h2>
          <p>Ingresa tus credenciales para acceder al sistema.</p>
          <form style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Input label="Correo Electrónico" id="email" type="email" placeholder="tucorreo@ejemplo.com" />
            <Input label="Contraseña" id="password" type="password" placeholder="••••••••" />
            <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Ingresar</Button>
          </form>
        </FormWrapper>
      </FormSection>
      <IllustrationSection>
        {/* <img src={illustrationImage} alt="Ilustración de tienda de ropa" /> */}
        <div style={{width: '100%', height: '100%', backgroundColor: '#f3f6fd'}}></div>
      </IllustrationSection>
    </LoginContainer>
  );
};

export default Login;