import { Container } from '../../components/Container/Container'; 
import { CartList } from './CartList'; 
import { useSelector } from 'react-redux';

 
const Cart = () => {

const cart = useSelector((state) => state.cart.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
  }
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
    <Container>
      <h2>Cart must be here</h2>
      <p>{getTotalQuantity() || 0}</p>
      <p>total ({getTotal().totalQuantity} items) 
      : <strong>${getTotal().totalPrice}</strong>
      </p>
      <CartList/>
    </Container>
  );
};

export default Cart;