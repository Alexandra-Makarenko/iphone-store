import { useDispatch } from 'react-redux';
import { Container } from '../../../components/Container/Container'; 
import { Form } from '../Form/Form'; 
import { setUser } from '../../../redux/auth/authSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

 
const RegisterForm = () => {
  const dispatch = useDispatch();
  
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword (auth, email, password)
          .then(({ user }) => {
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              }))
            })
            .catch(()=>alert('Invalid data'))
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