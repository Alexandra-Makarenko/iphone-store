import { Container } from '../Container/Container';
import { FooterBox } from './Footer.styled'
import { Flex,Link, Box } from '@chakra-ui/react'
import { FaInstagram, FaFacebook,FaPhoneAlt,FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterBox>
      <Container centerContent>
        <Flex  justify='center' gap='8' h='10'>              
              <Box ><Link href=''>
                <FaInstagram mx='8px' color='teal'/>
              </Link>
              </Box>
              <Box><Link href=''>
                <FaFacebook mx='8px' color='teal'/>
              </Link>
              </Box>
              <Box><Link href=''>
                <FaPhoneAlt mx='8px' color='teal'/>
              </Link>
              </Box>
              <Box><Link href=''>
                <FaMapMarkerAlt mx='8px' color='teal'/>
              </Link>
              </Box>
        </Flex>
      </Container>
      </FooterBox>
  );
};