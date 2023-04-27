import { useSelector } from 'react-redux';
import { CartItem } from './CartItem'
import {
  List,
  ListItem
} from '@chakra-ui/react'


export const CartList = () => {
 const cart = useSelector((state) => state.cart.cart)

  return (
    <List spacing={3}>
      {cart?.map((item,idx )=> (
        <ListItem key={idx}><CartItem
        key={item.id}
        id={item.id}
        photoUrl={item.photoUrl}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      /></ListItem>
      ))}
    </List>
  );
};