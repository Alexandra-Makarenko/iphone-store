import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/products/constants";
import { getProductsFilter } from "redux/selectors";
import { setProductsFilter } from "redux/products/filtersSlice";
import { Button, Stack  } from '@chakra-ui/react'

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getProductsFilter);

  const handleFilterChange = filter => dispatch(setProductsFilter(filter));

  return (
    <Stack spacing={4} direction='row' align='center' >
      <Button colorScheme='teal' size='sm'
        selected={filter === statusFilters.sortByPopularDown}
        onClick={() => handleFilterChange(statusFilters.sortByPopularDown)}
      >
        PopularDown
      </Button>
      <Button colorScheme='teal' size='sm'
        selected={filter === statusFilters.sortByPopularUp}
        onClick={() => handleFilterChange(statusFilters.sortByPopularUp)}
      >
       PopularUp
      </Button>
      <Button colorScheme='teal' size='sm'
        selected={filter === statusFilters.sortByPriceDown}
        onClick={() => handleFilterChange(statusFilters.sortByPriceDown)}
      >
        PriceDown
          </Button>
          <Button colorScheme='teal' size='sm'
        selected={filter === statusFilters.sortByPriceUp}
        onClick={() => handleFilterChange(statusFilters.sortByPriceUp)}
      >
       PriceUp
      </Button>
    </Stack>
  );
};
