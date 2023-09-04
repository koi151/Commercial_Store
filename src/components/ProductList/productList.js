import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../services/getProductList'
import { getProducts, getProductsLoadingStatus, setProducts } from '../../features/products/productsSlice';
import { getSearchTerm, getCategorySearch } from '../../features/search/searchSlice';

import ProductItem from '../../components/ProductList/productItem/productItem';
import './productList.scss';

function ProductList() {
  console.log('ProductList rendered');
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const productsLoading = useSelector(getProductsLoadingStatus);
  const curSearchTerm = useSelector(getSearchTerm);
  const curCategorySearch = useSelector(getCategorySearch)

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log('DATA FETCHING');
        const result = await getProductList(curSearchTerm, curCategorySearch);
        dispatch(setProducts(result.products));
        console.log('DATA FETCHED');
      }
      catch (error) {
        console.log('ERROR OCCURED WHILE FETCHING PRODUCTS API:', error);
      }
    }
    fetchAPI();
  }, [curSearchTerm, curCategorySearch])

  return (
    <>
      <div className='products-wrapper'>
        <div className='row'>
          {productsLoading ? (
            <div className='loading-theme'>Loading...</div>
          ) : (
            <>
              {products.map((product, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <ProductItem product={product} key={product.id}/>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default memo(ProductList);