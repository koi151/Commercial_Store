import { memo, } from 'react'
import Navigation from './Navigation/navigation';
import ShortNotes from './ShortNotes/shortNotes';
import './header.scss'

function Header() {

  const navbar = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 90 ) 
      // Scrolling down, hide the navbar
      navbar.style.top = '-110px';
    else 
      // Scrolling up, show the navbar
      navbar.style.top = '0';
    lastScrollTop = scrollTop;
  });

  return (
    <>
      <header>
        <ShortNotes/>
        <Navigation />
      </header>
    </>
  )
}

export default memo(Header);