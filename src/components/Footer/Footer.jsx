import { Container } from '../Container/Container';
import { FooterBox } from './Footer.styled'
import { SimpleGrid, Box,Link } from '@chakra-ui/react'
import { FaInstagram, FaFacebook,FaPhoneAlt,FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <SimpleGrid columns={2} spacing={10}>
          <Box height='80px'>
            <ul>              
              <li><Link href=''>
                <FaInstagram mx='8px' color='teal'/>
              </Link>
              </li>
              <li><Link href=''>
                <FaFacebook mx='8px' color='teal'/>
              </Link>
              </li>
              <li><Link href=''>
                <FaPhoneAlt mx='8px' color='teal'/>
              </Link>
              </li>
              <li><Link href=''>
                <FaMapMarkerAlt mx='8px' color='teal'/>
              </Link>
              </li>
            </ul>
          </Box>
        </SimpleGrid>
      </Container>
      </FooterBox>
  );
};