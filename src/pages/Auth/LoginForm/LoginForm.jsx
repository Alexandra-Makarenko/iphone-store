// import { useDispatch } from 'react-redux';
import { Container } from '../../../components/Container/Container'; 
import { Form } from '../Form/Form'; 
// import { setUser } from '../../../redux/auth/authSlice'
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'

 
const LoginForm = () => {
    // const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
}

  return (
    <Container>
          <Form
              title="login"
              handleClick={handleLogin}
          />
     
    </Container>
  );
};

export default LoginForm;