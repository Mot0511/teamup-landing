import React from 'react';
import './password.css';

const Password = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='password_page'>
            {children}
        </div>
    );
}

export default Password;
