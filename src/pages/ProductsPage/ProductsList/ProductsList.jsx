import { ProductsItem } from "../ProductItem/ProductItem";


import { SimpleGrid,Box} from '@chakra-ui/react'

export const ProductsList = ({ products }) => {
  
  return (
    <SimpleGrid minChildWidth='250px' spacing='20px' mt={2}>
      {products.map(product => (
        <Box key={product.id}><ProductsItem item={product } />
        </Box>
      ))}
    </SimpleGrid>
  );
};