import { useDispatch } from 'react-redux';
import { addToCart,removeItem} from '../../../redux/cart/cartSlice';
import { Button, Box, Image, Badge, Flex,Tooltip } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { BsFillCartCheckFill,BsCartPlus } from 'react-icons/bs'



export const ProductsItem = ({item}) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const location = useLocation();
  
    return (
      <Box  borderWidth='1px' borderRadius='lg'>
      <Image src={item.photoUrl} alt={item.title} />

        <Flex p='6' alignItems='baseline' gap={4} wrap='wrap'>
        <Flex alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {item.state}
          </Badge>
        </Flex>

        <Flex
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          ><Tooltip label={item.title}>
            <Link  to={`${item.id}`} state={{ from: location }}>
              {item.title}
              </Link>
              </Tooltip>
        </Flex>

        <Box>
          {item.price}$
                </Box>
                              
                     {cart.find(cartItem => cartItem.id === item.id)?
                  <Button colorScheme='teal' size='sm'
                  onClick={() => dispatch(removeItem(item.id))}><BsFillCartCheckFill/></Button> :
                     <Button colorScheme='teal' variant='outline' size='sm'  
                    onClick={() => dispatch(addToCart(item))}><BsCartPlus/> </Button>  }

      </Flex>
    </Box >
  );
};