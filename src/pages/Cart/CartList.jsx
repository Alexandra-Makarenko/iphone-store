import { useSelector } from 'react-redux';
import {CartItem} from './CartItem'


export const CartList = () => {
 const cart = useSelector((state) => state.cart.cart)

  return (
    <ul>
      {cart?.map((item,idx )=> (
        <li key={idx}><CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      /></li>
      ))}
    </ul>
  );
};