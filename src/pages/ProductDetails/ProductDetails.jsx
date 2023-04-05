import { useParams } from "react-router-dom";
import { getProducts } from '../../redux/selectors';
import { useSelector,useDispatch } from "react-redux";
import { Button, Box, Image, Badge } from '@chakra-ui/react'
import { addToCart } from '../../redux/cart/cartSlice';
import { Container } from '../../components/Container/Container'; 




const ProductDetails = () => {
  const { id } = useParams();
    const products = useSelector(getProducts);
    let item = products?.find(product => product.id === Number(id))
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)

  return (
    <Container>
      <Image src={item.photoUrl} alt={item.title} />
      <Box>
        <h2>
          Product - {item.title}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
          </Box>
           <Box>
                    <Button colorScheme='teal' variant='outline'  
              onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>             
            {cart.find(cartItem=>cartItem.id===item.id) && <Badge borderRadius='full' px='2' colorScheme='teal'>In cart</Badge>}
                </Box>
    </Container>
  );
};

export default ProductDetails;
