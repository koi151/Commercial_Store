import { memo } from 'react'
import ProductList from '../../components/ProductList/productList'
import ProductFilter from '../../components/ProductList/productFilter/productFilter';
import './products.scss'

function Products() {
  console.log('Products rendered');
  return (
    <>
      <section className='mini-section'>
        <img src='https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg' className='mini-section__bg' alt='background-img'></img>
        <h1 className='mini-section__title'>Home:</h1>
      </section>
      <div className='container'>
        <div className='products-display-wrapper'>
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default memo(Products);