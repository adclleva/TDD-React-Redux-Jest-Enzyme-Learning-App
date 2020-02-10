import React from 'react'
import './styles.scss'
import Logo from '../../assessts/graphics/logo.png'

const Header = (props) => {
  return (
    <header data-test-id="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test-id="logoIMG" src={Logo} alt="Logo"/>
        </div>
      </div>
    </header>
  )
};

export default Header