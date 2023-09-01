import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../services/getProductList'
import { getProducts, getProductsLoadingStatus, setProducts } from '../../features/products/productsSlice';
import { getSearchTerm, getPriceOrderSearch, getSortByPriceState, getMinPrice, getMaxPrice, getCategorySearch, getDiscountOrderSearch, getSortByDiscountState } from '../../features/search/searchSlice';

import { FaCartPlus } from "react-icons/fa";
import './productList.scss'

function ProductList() {
  console.log('ProductList rendered');
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const curCategorySearch = useSelector(getCategorySearch)
  const curSearchTerm = useSelector(getSearchTerm);
  const productsLoading = useSelector(getProductsLoadingStatus);
  const sortByDiscount = useSelector(getSortByDiscountState);
  const discountOrder = useSelector(getDiscountOrderSearch);
  const priceOrder = useSelector(getPriceOrderSearch);
  const sortByPrice = useSelector(getSortByPriceState);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log('DATA FETCHING');
        const result = await getProductList(curSearchTerm,curCategorySearch, sortByPrice, 
                                            priceOrder, minPrice, maxPrice, sortByDiscount, discountOrder);
        dispatch(setProducts(result.products));
        console.log('DATA FETCHED');
      }
      catch (error) {
        console.log('Error occured while fetching API:', error);
      }
    }
    fetchAPI();
  }, [curSearchTerm, curCategorySearch, priceOrder, minPrice, maxPrice, discountOrder]) // curSearchTerm

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
                          <div className='left-content--price-normal'>
                            ${Math.round(product.price * (1 + product.discountPercentage / 100))} 
                          </div>
                          <div className='left-content--price-discounted'>
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