import { memo } from "react";
import { routes } from "../../../../routes/routes";
import { NavLink } from "react-router-dom";

import './menuNav.scss';

function MenuNav() {

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

  const menuListTwo = getMenu();
  return (
    <>
      <ul className='menu-wrapper-two'>
        {menuListTwo && (
          <>
            {menuListTwo.map((child, index) => (
              <li className='item' key={index}>
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

export default memo(MenuNav);