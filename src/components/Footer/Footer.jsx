import { Container } from '../Container/Container';
import { FooterBox } from './Footer.styled'
import { SimpleGrid,Box } from '@chakra-ui/react'
export const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <SimpleGrid columns={2} spacing={10}>
          <Box bg='tomato' height='80px'>
             <ul>
              <li><a href=' '>Instagram</a></li>
              <li><a href=' '>Prom</a></li>
              <li><a href=' '>FaceBook</a></li>
            </ul>
          </Box>
          <Box bg='tomato' height='80px'>
            <ul>
              <li><a href=' '>Phone</a></li>
              <li><a href=' '>Adress</a></li>
            </ul>
          </Box>
        </SimpleGrid>
        
       
      
      </Container>
      </FooterBox>
  );
};