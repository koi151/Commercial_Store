import { memo } from "react";
import { FaCartPlus } from "react-icons/fa";
import { addToCart, selectCart, updateCart } from "../../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductItem({product}) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart); 

  const handleAddToCart = () => {
  console.log('Product added:', product);
  console.log('Product id:',  product.id);
    if (cart.some(productCart => productCart.id === product.id)) {
      dispatch(updateCart({id: product.id, quantity: 1}));
    } else {
      dispatch(addToCart({id: product.id, info: product}));
    }
    console.log('CURRENT CART:', cart);
  }

  return (
    <>
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
                ${product.price} 
                </div>
                <div className='left-content--price-discounted'>
                ${(product.price - product.price * (product.discountPercentage / 100)).toFixed(0)}
                </div>
            </div>
            <div className='right-content'>
                <div className='right-content--stock'>
                Stock: {product.stock}
                </div>
                <FaCartPlus className='right-content--add-to-cart' onClick={handleAddToCart}/>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default memo(ProductItem);