import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/products/constants";
import { getProductsFilter } from "redux/selectors";
import { setProductsFilter } from "redux/products/filtersSlice";

export const ProductsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getProductsFilter);

  const handleFilterChange = filter => dispatch(setProductsFilter(filter));

  return (
    <div >
      <button
        selected={filter === statusFilters.sortByPopularDown}
        onClick={() => handleFilterChange(statusFilters.sortByPopularDown)}
      >
        sortByPopularDown
      </button>
      <button
        selected={filter === statusFilters.sortByPopularUp}
        onClick={() => handleFilterChange(statusFilters.sortByPopularUp)}
      >
        sortByPopularUp
      </button>
      <button
        selected={filter === statusFilters.sortByPriceDown}
        onClick={() => handleFilterChange(statusFilters.sortByPriceDown)}
      >
        sortByPriceDown
          </button>
          <button
        selected={filter === statusFilters.sortByPriceUp}
        onClick={() => handleFilterChange(statusFilters.sortByPriceUp)}
      >
        sortByPriceUp
      </button>
    </div>
  );
};
