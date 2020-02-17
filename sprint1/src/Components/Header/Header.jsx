import React from 'react';
import "./Header.scss";
import logoIcon from '../../Assets/Icons/SVG/Icon-play.svg'

const Header = () => {

    return (
        <section className="header">
            <div className="header__logo">
                <img src={logoIcon} className="header__logo__icon"/> 
                <h2 className ="header__logo__title">BrainFlix</h2>
            </div>
            <form className="header__form">
                <input type="text" placeholder="Search" className ="header__search-input"></input>
                <button className="header__button"> UPLOAD</button>
                <div className="header__icon"></div>
            </form>
            <nav classNmae="header__nav">

            </nav>
        </section>
    )

}

export default Header;