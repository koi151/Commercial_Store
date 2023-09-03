import { memo } from "react"; 
import CartList from "../../components/cartList/cartList";

function Cart() {
  return (
    <>
      <img src='https://sierradesigns.com/images/stencil/original/image-manager/default-plp.jpg' className='current-page-bg' alt='current-page-bg'></img>
      <div className="container">
        <h1 className='current-page-title'>Home:</h1>
        <CartList />
      </div>
    </>
  )
}

export default memo(Cart);