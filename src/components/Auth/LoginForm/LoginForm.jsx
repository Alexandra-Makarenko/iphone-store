import { useDispatch } from 'react-redux';
import { Container } from '../../../components/Container/Container'; 
import { Form } from '../Form/Form'; 
import { setUser } from '../../../redux/auth/authSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { redirect } from "react-router-dom";



 
export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              }))
            })
        .catch((e) => alert(e.message))
      redirect("/user");
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

