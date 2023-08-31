import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaEarthAsia } from "react-icons/fa6";
import './logo.scss'


function Logo() {
  const logoLink = '';

  return (
    <>
      <div className='logo-wrapper'>
        <Link to={logoLink}>
          <FaEarthAsia className='logo-wrapper__logo'/>
          <div className='logo-wrapper__logo-text'>
            AsTech
          </div>
        </Link>
      </div>
    </>
  )
}

export default memo(Logo)