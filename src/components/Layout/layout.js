import { memo } from 'react'
import { Outlet } from 'react-router'
import Header from './Header/header'
import Footer from './Footer/footer'
import './layout.scss'

function Layout() {
  console.log('LAYOUT RENDERED');
  
  return (
    <>
      <Header />
      <main className='main-wrapper'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default memo(Layout);