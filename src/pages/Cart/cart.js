import { memo } from "react"; 
import CartList from "../../components/cartList/cartList";

function Cart() {
  return (
    <>
      <section className='mini-section'>
        <img src='https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg' className='mini-section__bg'></img>
        <h1 className='mini-section__title'>cart:</h1>
      </section>
      <div className="container">
        <CartList />
      </div>
    </>
  )
}

export default memo(Cart);