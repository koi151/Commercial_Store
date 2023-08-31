import { memo } from 'react'
import SocialMedia from "./SocialMedia/socialMedia"
import './footer.scss'

function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <SocialMedia />
        </div>
      </footer>
    </>
  )
}

export default memo(Footer)