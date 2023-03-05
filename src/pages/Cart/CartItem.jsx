import { incrementQuantity, decrementQuantity, removeItem } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

export const CartItem = ({id, image, title, price, quantity=0})=> {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{price}
        </p>
        <div>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}
