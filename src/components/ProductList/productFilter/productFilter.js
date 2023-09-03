import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategorySearch, resetFilters} from '../../../features/search/searchSlice';
import { setCategories, getCategories, getCategoriesLoadingStatus } from '../../../features/categories/categoriesSlice';
import { get } from '../../../utils/request';

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './productFilter.scss'

function ProductFilter() {
  console.log('ProductFilter rendered');

  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const categoriesLoading = useSelector(getCategoriesLoadingStatus);

  useEffect (() => {
    const fetchAPI = async () => {
      try {
        const result = await get('products/categories');
        dispatch(setCategories(result));
        console.log('CATEGORIES FETCHED SUCCESS');
      } catch (error) {
        console.log('ERROR OCCURED WHILE FETCHING CATEGORIES API:')
      }
    }
    fetchAPI();
  }, [])

  const handleRadioChange = (e) => {
    dispatch(setCategorySearch(e.target.nextSibling.innerHTML));
  }

  const displayContent = (e) => {
    let content = e.target.parentNode.nextSibling;
    if (content.classList.contains('display-none'))
      content.classList.remove('display-none')
    else content.classList.add('display-none');
  }

  const commingSoonAlert = () => {
    alert('THIS FEATURE WILL BE AVAILABLE SOON');
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
          {categoriesLoading ? (
            <>Loading...</>
          ) : (
            <>
              <div className='radio-wrapper-all'>
                {categories.map((category, index) => (
                  <div className='radio-wrapper' key={index}>
                    <input type='radio' className='criteria-radio' id={`criteria-radio-${index}`} 
                           name='criteria' key={index} onChange={(e) => handleRadioChange(e)}>
                    </input>
                    <label htmlFor={`criteria-radio-${index}`} className='radio-label'>{category}</label>
                  </div>
                ))}
              </div>
              <button className='reset-btn' onClick={resetFilters}>
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
          <button className='price-range-update' onClick={commingSoonAlert}>Update</button>

          <div className='price-trend-wrapper'>
            <button className='price-trend-wrapper__price-trend'>
              Ascend
              <FaArrowUp className='price-trend-wrapper__price-trend--icon' />
            </button>
            <button className='price-trend-wrapper__price-trend'>
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
          <button className='price-trend-wrapper__price-trend' onClick={commingSoonAlert}>
            Ascend
            <FaArrowUp className='price-trend-wrapper__price-trend--icon' />
          </button>
          <button className='price-trend-wrapper__price-trend' onClick={commingSoonAlert}>
            Descend
            <FaArrowDown className='price-trend-wrapper__price-trend--icon' />
          </button>
        </div>
      </div>

    </div>
  )
}

export default memo(ProductFilter);
