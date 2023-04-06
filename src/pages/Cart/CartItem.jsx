import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Button, HStack, Box,Image,Flex  } from '@chakra-ui/react'

export const CartItem = ({id, photoUrl, title, price, quantity=0})=> {
  const dispatch = useDispatch()
  

  return (
    <HStack spacing='24px'>
     <Box maxW='200px' borderWidth='1px' borderRadius='lg' overflow='hidden'>

      <Image src={photoUrl} alt={title} />
</Box>
        <Box>{title}</Box>
        <Box>{price}
        </Box>
        <Flex gap='2' align={'baseline'}>
          <Button colorScheme='teal' variant='outline' onClick={() => dispatch(decrementQuantity(id))}>-</Button>
          <p>{quantity}</p>
          <Button colorScheme='teal' variant='outline' onClick={() => dispatch(incrementQuantity(id))}>+</Button>
        </Flex >
        <Button colorScheme='teal'
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </Button>
        
    </HStack>
  )
}
