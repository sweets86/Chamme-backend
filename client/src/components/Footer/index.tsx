import React from "react";
import FooterStyled from './FooterStyled'
import {HashLink as Link} from 'react-router-hash-link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <FooterStyled>
        <div className="pageLinks">
            <Link to={'/blog#contact'}><h4>Contact</h4></Link>
            <Link to='/blog#subscribe'><h4>Subscribe</h4></Link>
            <Link to={'/privacy'}><h4>Privacy Policy</h4></Link>
        </div>
        <div className="iconLinks">
            <a href="https://www.facebook.com" className="facebook iconLinks fa-2x"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.youtube.com" className="youtube iconLinks fa-2x"><FontAwesomeIcon icon={faYoutube}/></a>
            <a href="http://www.instagram.com" className="instagram iconLinks fa-2x"><FontAwesomeIcon icon={faInstagram}/></a>
        </div>
    </FooterStyled>
  );
}
