// import { useDispatch } from 'react-redux';
import { Container } from '../../../components/Container/Container'; 
import { Form } from '../Form/Form'; 
// import { setUser } from '../../../redux/auth/authSlice'
import {getAuth, createUserWithEmailAndPassword  } from 'firebase/auth'

 
const RegisterForm = () => {
    // const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword (auth, email, password)
            .then(console.log)
            .catch(console.error)
}

  return (
    <Container>
          <Form
              title="register"
              handleClick={handleRegister}
          />
     
    </Container>
  );
};

export default RegisterForm;