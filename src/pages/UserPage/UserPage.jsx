import { Container } from '../../components/Container/Container'; 
import { Image } from '@chakra-ui/react'

const UserPage = () => {
  return (
    <Container>
   <Image
              borderRadius='full'
              boxSize='200px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
      />
      
      
    </Container>
  );
};

export default UserPage;