import React from 'react';

import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsWhatsapp,
} from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <BsFacebook className="icon" />
        <BsWhatsapp className="icon" />
        <BsInstagram className="icon" />
        <BsGoogle className="icon" />
        <BsGithub className="icon" />
      </div>
      <p>Developed by João Tolfo | &copy;2022 All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
