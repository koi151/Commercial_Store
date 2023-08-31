import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../services/getProductList'
import { getProducts, getProductsLoadingStatus, setProducts } from '../../features/products/productsSlice';
import { getSearchTerm, getOrder, getSortBy, getMinPrice, getMaxPrice } from '../../features/search/searchSlice';

import { FaCartPlus } from "react-icons/fa";
import './productList.scss'

function ProductList() {
  console.log('ProductList rendered');
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const curSearchTerm = useSelector(getSearchTerm);
  const productsLoading = useSelector(getProductsLoadingStatus);
  const order = useSelector(getOrder);
  const sortBy = useSelector(getSortBy);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);


  useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log('DATA FETCHING');
        console.log('SEARCH CHECK 2:', curSearchTerm);
        const result = await getProductList(curSearchTerm, sortBy, order, minPrice, maxPrice);
        dispatch(setProducts(result));
        console.log('DATA FETCHED');
      }
      catch (error) {
        console.log('Error occured while fetching API:', error);
      }
    }
    fetchAPI();
  }, [curSearchTerm, order, minPrice, maxPrice]) // curSearchTerm

  return (
    <>
      <div className='products-wrapper'>
        <div className='row'>
          {productsLoading ? (
            <div className='loading-theme'>Loading...</div>
          ) : (
            <>
              {products.map((product, index) => (
                <div className="col-lg-4" key={index}>
                  <div className='product'>
                    <img src={product.thumbnail} alt={product.description}></img>
                    <div className='product__content-wrapper'>
                      <div className='product__content-wrapper--title'>
                        {product.title}
                      </div>
                      <div className='content'>
                        <div className='left-content'>
                          <div className='left-content--brand'>
                            {product.brand}
                          </div>
                          <div className='left-content--price'>
                            ${product.price}
                          </div>
                        </div>
                        <div className='right-content'>
                          <div className='right-content--stock'>
                            Stock: {product.stock}
                          </div>
                          <FaCartPlus className='right-content--add-to-cart'/>
                        </div>
                      </div>
                    </div>
                  </div>
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