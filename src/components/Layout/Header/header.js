import { memo, useEffect } from 'react';
import Navigation from './Navigation/navigation';
import ShortNotes from './ShortNotes/shortNotes';
import './header.scss';

function Header() {
  
  useEffect(() => {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 90) {
        // Scrolling down, hide the navbar
        header.style.top = '-110px';
      } else {
        // Scrolling up, show the navbar
        header.style.top = '0';
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header>
        <ShortNotes />
        <Navigation />
      </header>
    </>
  );
}

export default memo(Header);
