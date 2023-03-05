import { ProductsItem } from "../ProductItem/ProductItem";


export const ProductsList = ({ products }) => {
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}><ProductsItem item={product } />
        </li>
      ))}
    </ul>
  );
};