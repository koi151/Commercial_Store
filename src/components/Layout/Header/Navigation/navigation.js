import { memo } from 'react'
import Logo from './Logo/logo'
import MenuList from './MenuList/MenuList'
import SearchBar from './SearchBar/searchBar'
import UserCartWrapper from './UserCartWrapper/userCartWrapper'
import './navigation.scss'

function Navigation() {
  return (
    <>
    <nav className='navigation'>
      <div className='container'>
        <Logo />
        <SearchBar />
        <MenuList />
        <UserCartWrapper/>
      </div>
    </nav>
    </>
  )
}

export default memo(Navigation)