import { Container } from '../../components/Container/Container'; 
import { AuthProvider } from './AuthProvider'; 

const Auth = () => {
  return (
    <Container>
      <AuthProvider/>     
    </Container>
  );
};

export default Auth;