import { Container } from '../Container/Container';
import { StyledLink, HeaderBox} from './Header.styled';
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import { useAuth } from 'hooks';
import { removeUser } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <HeaderBox>
    <Container>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
    <Heading size='md'>Iphone shop</Heading>
        </Box>
        <Flex gap='4'>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
        <StyledLink to="/user">User</StyledLink>  
        </Flex>
   <Spacer />
          {!isAuth ?
            <Flex gap='4'>
            <StyledLink to="/register">Sign Up</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
            </Flex> :
            <Flex gap='4'>
              <StyledLink to="/user">{email}</StyledLink>
              <button onClick={()=>dispatch(removeUser())}>Log out</button>
          </Flex> 
   }
</Flex>
    </Container>
    </HeaderBox>
  );
};