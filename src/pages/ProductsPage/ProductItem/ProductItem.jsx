import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';



export const ProductsItem = ({item}) => {
 const dispatch = useDispatch()
  
  return (
      <div>
        <p>{item.title}</p>  
      <button 
  onClick={() => 
    dispatch(addToCart(item))
  }>Add to Cart
</button>
    </div>
  );
};