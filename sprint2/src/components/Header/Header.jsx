import React from 'react';
import "./Header.scss";
import logoImage from '../../assets/Logo/Logo-brainflix.svg'

const Header = () => {

    return (
        <section className="header">
            <div className="header__logo">
                <img src ={logoImage} className='header__logo-icon'/>
            </div>
            <form className="header__form">
                <input type="text" placeholder="Search" className ="header__search-input"></input>
                <button className="header__button"> UPLOAD</button>
                <div className="header__image-icon"></div>
            </form>
            <nav className="header__nav">

            </nav>
        </section>
    )

}

export default Header;