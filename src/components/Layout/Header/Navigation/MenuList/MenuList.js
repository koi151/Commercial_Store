import { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../../../routes/routes';

import { AiOutlineMenu } from "react-icons/ai";
import './menuList.scss'

function MenuList() {

  console.log('MenuList rendered');
  const menuPathIncluded = ["/", "blog", "contact", "about"]; // ADD PATH TO DISPLAY MENU IN NAVIGATION

  const getMenu = () => {
    let menu = routes[0].children;
    menu = menu.filter((item) => {
      return (item.path !== '*' ? menuPathIncluded.includes(item.path) : '')
    })
    return menu;
  }

  const standardlizeMenuName = (menuPath) => {
    return (menuPath !== '/' ? menuPath.replace(/^\w/, c => c.toUpperCase())
            : 'Home')
  }

  const isActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  }

  const menuList = getMenu();
  return (
    <>
      <div className='menu-bar'>
        <AiOutlineMenu className='menu-bar__icon'/>
      </div>
      <ul className='menu-wrapper'>
        {menuList && (
          <>
            {menuList.map((child, index) => (
              <li className='menu' key={index}>
                <NavLink to={child.path} className={isActive}>
                  {standardlizeMenuName(child.path)}
                </NavLink>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  )
}

export default memo(MenuList);
