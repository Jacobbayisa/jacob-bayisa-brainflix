import React from 'react';
import "./Header.scss";
import {BrowserRouter,Link} from 'react-router-dom';
import logoImage from '../../assets/Logo/Logo-brainflix.svg'

const Header = ({match}) => {


    return (
        <section className="header">
            <div className="header__logo">
                <Link to="/" ><img src ={logoImage} className='header__logo-icon'/> </Link>
            </div>
            <form className="header__form">
                <input type="text" placeholder="Search" className ="header__search-input"></input>
                <Link to="/Upload" className="header__upload-link" > UPLOAD</Link>
                <div className="header__image-icon"></div>
            </form>
            <nav className="header__nav">

            </nav>
        </section>
    )

}

export default Header;