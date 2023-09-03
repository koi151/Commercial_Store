import { memo } from 'react'
import ProductList from '../../components/ProductList/productList'
import ProductFilter from '../../components/ProductList/productFilter/productFilter';
import './products.scss'

function Products() {
  console.log('Products rendered');
  return (
    <>
      <img src='https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg' className='current-page-bg' alt='current-page-bg'></img>
      <div className='container'>
        <h1 className='current-page-title'>Home:</h1>
        <div className='products-display-wrapper'>
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default memo(Products);