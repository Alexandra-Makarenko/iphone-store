import { useDispatch } from 'react-redux';
import { addToCart,removeItem } from '../../../redux/cart/cartSlice';
import { Button, Box, Image, Badge ,ButtonGroup} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";


export const ProductsItem = ({item}) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const location = useLocation();
  
    return (
      <Box>
      <Image src={item.photoUrl} alt={item.title} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {item.state}
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          >
            <Link  to={`${item.id}`} state={{ from: location }}>
              {item.title}
            </Link>
        </Box>

        <Box>
          {item.price} $
                </Box>
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal' variant='outline' size='sm'  
                    onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>             
                     {cart.find(cartItem => cartItem.id === item.id)
                  && <Button colorScheme='teal' size='sm'
                    onClick={() => dispatch(removeItem(item.id))}>Delete from Cart</Button> }
                </ButtonGroup>
      </Box>
    </Box >
  );
};