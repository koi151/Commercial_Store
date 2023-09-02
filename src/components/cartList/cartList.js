import { memo } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";
import './cartList.scss'

function CartList() {
  var cart = useSelector(selectCart);

  return (
    <>
      <div className="carts-wrapper">
        <h1 className="carts-wrapper__title">
          Your cart
        </h1>
        <div className="carts-wrapper__display">
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
      </div>
    </>
  )
}

export default memo(CartList);
