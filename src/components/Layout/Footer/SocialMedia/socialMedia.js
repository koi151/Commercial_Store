import { memo } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import './socialMedia.scss'

function SocialMedia() {
   
  // DATA FOR TESTING - EMPTY URL
  const socialMediaList  = [
    {
      id: 1,
      iconName: FaFacebookF,
      link: '' 
    },
    {
      id: 2,
      iconName: FaInstagram,
      link: ''
    },
    {
      id: 3,
      iconName: FaTwitter,
      link: ''
    }
  ]

  return (
    <>
      <ul className='social-media-wrapper'>
        {socialMediaList.map((item, index)=> (
          <li className='social-media-wrapper__icon-wrapper' key={index}>
            <item.iconName className='social-media-wrapper__icon'/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(SocialMedia);