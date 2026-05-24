import React from 'react';
import '../../app/globals.css';
import './mobileHeader.css';

const MobileHeader = () => {
    return (
        <div className={'header'}>
            <div className={'brand'}>
                <img src="icon.png" className="icon" alt="" />
                <div>
                    <h1 className="header__heading">Teamup</h1>
                </div>
            </div>
            <a href="#download"><button className="btn primary-btn">Скачать</button></a>
        </div>
    );
}

export default MobileHeader;
