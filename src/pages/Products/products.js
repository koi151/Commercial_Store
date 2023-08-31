import { memo } from 'react'
import ProductList from '../../components/ProductList/productList'
import ProductFilter from '../../components/ProductList/productFilter/productFilter';
import './products.scss'

function Products() {
  console.log('Products rendered');
  return (
    <>
      <div className='products-display-wrapper'>
        <ProductFilter />
        <ProductList />
      </div>
    </>
  )
}

export default memo(Products);