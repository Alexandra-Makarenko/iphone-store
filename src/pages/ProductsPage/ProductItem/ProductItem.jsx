import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';
import { Button, Box, Image, Badge } from '@chakra-ui/react'
import { useSelector } from 'react-redux';





export const ProductsItem = ({item}) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src='https://bit.ly/2Z4KKcF' alt='Rear view of modern home with pool' />

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
         <a href=' '>{item.title}</a> 
        </Box>

        <Box>
          {item.price} $
                </Box>
                <Box>
                    <Button colorScheme='teal' variant='outline'  
              onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>             
            {cart.find(cartItem=>cartItem.id===item.id) && <Badge borderRadius='full' px='2' colorScheme='teal'>In cart</Badge>}
                </Box>
      </Box>
    </Box>
  );
};