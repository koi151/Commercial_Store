import { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsLoadingStatus } from '../../../features/products/productsSlice';
import { setSearchTerm, setPriceSearch, setPriceRange, setCategorySearch, setDiscountSearch } from '../../../features/search/searchSlice';

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './productFilter.scss'


function ProductFilter() {
  console.log('ProductFilter rendered');

  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const productsLoading = useSelector(getProductsLoadingStatus);

  const [categories, setCategories] = useState([])

  useEffect(() => {
    var uniqueCategories = new Set();

    if (!productsLoading) {
      products.forEach((product) => {
        uniqueCategories.add(product.category);
      })
      setCategories([...uniqueCategories]);
    }
  }, [productsLoading])

  const handleRadioChange = (e) => {
    dispatch(setCategorySearch(e.target.nextSibling.innerHTML));
  }

  const handleReset = () => {
    dispatch(setSearchTerm(''));
  }

  const displayContent = (e) => {
    let content = e.target.parentNode.nextSibling;
    if (content.classList.contains('display-none'))
      content.classList.remove('display-none')
    else content.classList.add('display-none');
  }

  const updatePriceRange = () => {
    let minPrice = document.querySelector('#min-price').value;
    let maxPrice = document.querySelector('#max-price').value;
    dispatch(setPriceRange({ minPrice, maxPrice }));
  }


  console.log('unique categories:', categories);
  return (
    <div className='criterias-wrapper'>
      <div className='criteria-wrapper'>
        <div className='criteria-wrapper__title'>
          <h2>Product Type:</h2>
          <IoIosArrowDown className='criteria-wrapper__title--drop-down-icon'
            onClick={e => displayContent(e)} />
        </div>

        <div className='criteria-wrapper__criterias-list' id='criteria-wrapper'>
          {productsLoading ? (
            <>Loading...</>
          ) : (
            <>
              <div className='radio-wrapper-all'>
                {categories.map((category, index) => (
                  <div className='radio-wrapper' key={index}>
                    <input type='radio' className='criteria-radio' id='criteria-radio' name='criteria'
                      key={index} onChange={(e) => handleRadioChange(e)}>
                    </input>
                    <label htmlFor='radio-label' className='radio-label'>{category}</label>
                  </div>
                ))}
              </div>
              <button className='reset-btn' onClick={handleReset}>
                Reset
              </button>
            </>
          )}
        </div>
      </div>

      <div className='criteria-wrapper'>
        <div className='criteria-wrapper__title'>
          <h2>PRICE (USD):</h2>
          <IoIosArrowDown className='criteria-wrapper__title--drop-down-icon'
            onClick={e => displayContent(e)} />
        </div>
        <div className='price-range-wrapper'>
          <input placeholder='Min:' id='min-price' className='price-range-wrapper__price-range'></input>
          <input placeholder='Max:' id='max-price' className='price-range-wrapper__price-range'></input>
          <button className='price-range-update' onClick={updatePriceRange}>Update</button>

          <div className='price-trend-wrapper'>
            <button className='price-trend-wrapper__price-trend' onClick={() => dispatch(setPriceSearch('asc'))}>
              Ascend
              <FaArrowUp className='price-trend-wrapper__price-trend--icon' />
            </button>
            <button className='price-trend-wrapper__price-trend' onClick={() => dispatch(setPriceSearch('desc'))}>
              Descend
              <FaArrowDown className='price-trend-wrapper__price-trend--icon' />
            </button>
          </div>
        </div>
      </div>

      <div className='criteria-wrapper'>
        <div className='criteria-wrapper__title'>
          <h2>BY PROMOTION:</h2>
          <IoIosArrowDown className='criteria-wrapper__title--drop-down-icon'
            onClick={e => displayContent(e)} />
        </div>
        <div className='price-trend-wrapper'>
          <button className='price-trend-wrapper__price-trend' onClick={() => dispatch(setDiscountSearch('asc'))}>
            Ascend
            <FaArrowUp className='price-trend-wrapper__price-trend--icon' />
          </button>
          <button className='price-trend-wrapper__price-trend' onClick={() => dispatch(setDiscountSearch('desc'))}>
            Descend
            <FaArrowDown className='price-trend-wrapper__price-trend--icon' />
          </button>
        </div>
      </div>

    </div>
  )
}

export default memo(ProductFilter);
