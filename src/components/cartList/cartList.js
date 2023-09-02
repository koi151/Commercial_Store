import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";

import { IoCartOutline } from "react-icons/io5";
import './cartList.scss'

function CartList() {
  const cart = useSelector(selectCart);
  const total = cart.reduce((sum, item) => {
    const newPrice = item.info.price - item.info.price * (item.info.discountPercentage / 100).toFixed(0);
    return sum + newPrice * item.quantity;
  }, 0)

  return (
    <>
      <div className="carts-wrapper">
        <h1 className="carts-wrapper__title">
          Your cart
          <IoCartOutline className="carts-wrapper__title--icon" />
        </h1>
        <div className="carts-wrapper__display">
          <div className="cart-wrapper">
            {cart.length > 0 &&
              cart.map((item, index) => (
                <div className="cart" key={index}>
                  <img src={item.info.thumbnail} alt="item.info.description" className="cart__product-img"></img>
                  <div className="cart__info">
                    <div className="cart__info--title">
                      {item.info.title}
                    </div>
                    <div className="cart__info--price">
                      Default price: {item.info.price}$
                    </div>
                    <div className="cart__info--promo-price">
                      Promo: ${(item.info.price - item.info.price * (item.info.discountPercentage / 100)).toFixed(0)}
                    </div>
                    <div className="cart__info--quantity">
                      Quantity: {item.quantity}
                    </div>
                    <div className="summary-cart">
                      <div className="summary-cart--saved-price">
                        Saved: ${item.info.price - (item.info.price - item.info.price * (item.info.discountPercentage / 100)).toFixed(0)}
                      </div>
                      <div className="summary-cart--total-price">
                        Total: ${item.info.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="payment">
            <h1 className="payment__title">Summary:</h1>
            <h2 className="payment__promo-title">Promo code</h2>
            <form className="payment__form">
              <input type="text" placeholder="Input promo code..." className="payment__form--input">
              </input>
              <button className="payment__form--submit-btn">Apply</button>
            </form>
            <ul className="payment__summary">
              <li className="payment__summary--sub-total">
                <h3>Sub total</h3>
                <h3>${total}</h3>
              </li>
              <li className="payment__summary--shipping-fee">
                <h3>Shipping fee</h3>
                <h3>$0</h3>
              </li>
              <li className="payment__summary--total">
                <h3>Order total</h3>
                <h3>${total}</h3>
              </li>
            </ul>
            <button className="payment__checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(CartList);
