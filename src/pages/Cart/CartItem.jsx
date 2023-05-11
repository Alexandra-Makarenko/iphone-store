import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Button, SimpleGrid, Box,Image,Flex  } from '@chakra-ui/react'

export const CartItem = ({id, photoUrl, title, price, quantity=0})=> {
  const dispatch = useDispatch()
  

  return (
    <SimpleGrid minChildWidth='200px' spacing='24px'>
     <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>

      <Image src={photoUrl} alt={title} />
      </Box>
      <Flex gap='2' align={'center'}>
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
        </Flex>
    </SimpleGrid>
  )
}
