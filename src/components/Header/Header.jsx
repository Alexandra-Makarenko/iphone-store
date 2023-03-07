import { Container } from '../Container/Container';
import { StyledLink, HeaderBox} from './Header.styled';
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react'

export const Header = () => {
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
        <StyledLink to="/auth">User</StyledLink>  
        </Flex>
   <Spacer />
   <Flex gap='4'>
    <StyledLink to="/register">Sign Up</StyledLink>
    <StyledLink to="/login">Log in</StyledLink>
   </Flex>
</Flex>
    </Container>
    </HeaderBox>
  );
};