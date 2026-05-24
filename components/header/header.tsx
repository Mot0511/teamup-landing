import React from 'react';
import '../../app/index.css';

const Header = () => {
    return (
        <header id="header">
            <div className="brand">
                <img src={"icon.png"} className="icon" alt="" />
                <div>
                    <h1 className="header__heading">Teamup</h1>
                    <p className="header__subheading">by MatveySuvorov</p>
                </div>
            </div>
            <div className="menu">
                <a href="#whatisit" className="menu__item">что это?</a>
                <a href="#howitworks" className="menu__item">как это работает?</a>
                <a href="#features" className="menu__item">фичи</a>
                <a href="#aboutme" className="menu__item">о создателе</a>
            </div>
            <a href="#download"><button className="btn primary-btn">Скачать Teamup</button></a>
        </header>
    );
}

export default Header;
