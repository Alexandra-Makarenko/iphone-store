import { Container } from '../Container/Container';
import { StyledLink, HeaderBox} from './Header.styled';
import { Flex, Box, Spacer} from '@chakra-ui/react'
import { useAuth } from 'hooks';
import { removeUser } from 'redux/auth/authSlice';
import { useDispatch   } from 'react-redux';


export const Header = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <HeaderBox>
    <Container>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
    <StyledLink to="/">Iphone shop</StyledLink>
        </Box>
        <Flex gap='4'>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
        </Flex>
   <Spacer />
          {!isAuth ?
            <Flex gap='4'>
            <StyledLink to="/register">Sign Up</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
            </Flex> :
            <Flex gap='4'>
              <StyledLink to="/user">{email}</StyledLink>
              <button onClick={() => dispatch(removeUser())}>Log out</button>
          </Flex> 
   }
</Flex>
    </Container>
    </HeaderBox>
  );
};