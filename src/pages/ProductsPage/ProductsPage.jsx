import { Container } from '../../components/Container/Container'; 
import { ProductsList } from './ProductsList/ProductsList'; 
import { ProductsFilter } from './ProductsFilter/ProductsFilter'; 
import { useSelector } from "react-redux";
import { getProducts,getProductsFilter } from "redux/selectors";
import { statusFilters } from "redux/products/constants";
import {ProductsBox} from './ProductsPage.styled'


const getVisibleProducts = (products, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.sortByPriceUp:
      return [...products].sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
    case statusFilters.sortByPriceDown:
      return [...products].sort(
      (firstProduct, secondProduct) => firstProduct.price - secondProduct.price
      );
    case statusFilters.sortByPopularUp:
      return [...products].sort(
      (firstProduct, secondProduct) => secondProduct.rate - firstProduct.rate
      );
    case statusFilters.sortByPopularDown:
      return [...products].sort(
      (firstProduct, secondProduct) => firstProduct.rate - secondProduct.rate
     );
    default:
      return [...products];
  }
};

const ProductsPage = () => {
  const products = useSelector(getProducts);
  const statusFilter = useSelector(getProductsFilter);
  const visibleProducts = getVisibleProducts(products, statusFilter);

  return (
    <ProductsBox>
    <Container>
      <ProductsFilter/>
      <ProductsList products={visibleProducts}/>
      
      </Container>
      </ProductsBox>
  );
};

export default ProductsPage;