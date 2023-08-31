import { memo } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import './userCartWrapper.scss'

function UserCartWrapper() {

    const UserCartList  = [
        {
          id: 1,
          iconName: HiOutlineHome,
          link: '/' 
        },
        {
          id: 2,
          iconName: HiOutlineUser,
          link: ''
        },
        {
          id: 3,
          iconName: HiOutlineShoppingCart,
          link: '/cart'
        }
      ]

  const clickHandle = () => {
    console.log('PATH CHANGED ---------');
  }

  return (
    <>
      <ul className="user-cart-wrapper">
        {UserCartList.map((item) => (
          <li className="user-cart-wrapper__icon-wrapper" key={item.id}>
            <NavLink to={item.link} onClick={clickHandle}>
              <item.iconName className='user-cart-wrapper__icon bi-type-bold'/>    
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(UserCartWrapper);
