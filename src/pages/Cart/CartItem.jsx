import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Button, HStack, Box,Image } from '@chakra-ui/react'

export const CartItem = ({id, image, title, price, quantity=0})=> {
  const dispatch = useDispatch()
  

  return (
    <HStack spacing='24px'>
     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>

      <Image src='https://bit.ly/2Z4KKcF' alt='Rear view of modern home with pool' />
</Box>
        <Box>{title}</Box>
        <Box>{price}
        </Box>
        <Box >
          <Button colorScheme='teal' variant='outline' onClick={() => dispatch(decrementQuantity(id))}>-</Button>
          <p>{quantity}</p>
          <Button colorScheme='teal' variant='outline' onClick={() => dispatch(incrementQuantity(id))}>+</Button>
        </Box >
        <Button colorScheme='teal'
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </Button>
        
    </HStack>
  )
}
