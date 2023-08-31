import { memo, } from 'react'
import Navigation from './Navigation/navigation';
import ShortNotes from './ShortNotes/shortNotes';
import './header.scss'

function Header() {
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