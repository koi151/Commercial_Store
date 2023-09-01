import { memo } from "react"; 
import CartList from "../../components/cartList/cartList";

function Cart() {
  return (
    <>
      Cart Testing...
      <CartList />
    </>
  )
}

export default memo(Cart);