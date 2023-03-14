import { Container } from '../../components/Container/Container'; 
import { CartList } from './CartList'; 
import { useSelector } from 'react-redux';
import {CartBox} from './Cart.styled'

 
const Cart = () => {

const cart = useSelector((state) => state.cart.cart)


  const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
}
  
  return (
    <CartBox>
    <Container>
      <p>total ({getTotal().totalQuantity} items) 
      : <strong>${getTotal().totalPrice}</strong>
      </p>
      <CartList/>
      </Container>
      </CartBox>
  );
};

export default Cart;