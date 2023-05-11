import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/products/constants";
import { getProductsFilter } from "redux/selectors";
import { setProductsFilter } from "redux/products/filtersSlice";
import { Button,Menu, MenuButton,MenuList,MenuItemOption , MenuOptionGroup } from '@chakra-ui/react'

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getProductsFilter);

  const handleFilterChange = filter => dispatch(setProductsFilter(filter));

  return (
      <Menu>
  <MenuButton as={Button}>
    Sort by
  </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue='sortByPopularDown' type='radio'>
          <MenuItemOption  
            value='sortByPopularDown'
            selected={filter === statusFilters.sortByPopularDown}
            onClick={() => handleFilterChange(statusFilters.sortByPopularDown)}
      >
        PopularDown
         
          </MenuItemOption >
          <MenuItemOption  
             value='sortByPopularUp'
             selected={filter === statusFilters.sortByPopularUp}
             onClick={() => handleFilterChange(statusFilters.sortByPopularUp)}
      >
       PopularUp
          </MenuItemOption  >
          <MenuItemOption 
             value='sortByPriceDown'
             selected={filter === statusFilters.sortByPriceDown}
             onClick={() => handleFilterChange(statusFilters.sortByPriceDown)}
      >
        PriceDown
            </MenuItemOption >
          <MenuItemOption 
             value='sortByPriceUp'
             selected={filter === statusFilters.sortByPriceUp}
             onClick={() => handleFilterChange(statusFilters.sortByPriceUp)}
      >
       PriceUp
            </MenuItemOption >

        </MenuOptionGroup>
     
           
            
  </MenuList>
      </Menu>
      
          

    
  );
};
