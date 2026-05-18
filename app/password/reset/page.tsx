'use client'
import { supabase } from '@/services/supabase';
import React, { useEffect, useState } from 'react';

const ForgotPassword = () => {
    const [password, setPassoword] = useState<string>('');
    const [isPasswordReseted, setIsPasswordReseted] = useState<boolean>(false);

    const handleSubmit = async () => {
        if (!password) return;
        await supabase.auth.updateUser({
            'password': password
        })
        setIsPasswordReseted(true);
    }

    return (
        <div className='form_canvas'>
            <h1>Восстановление пароля</h1>
            <p>
                Теперь напиши новый пароль.
            </p>
            <input type="password" value={password} onChange={e => setPassoword(e.target.value)} placeholder='Новый пароль' />
            <button onClick={handleSubmit}>
                {
                    isPasswordReseted
                        ? 'Пароль успешно сброшен'
                        : 'Cбросить пароль'
                }
            </button>
        </div>
    );
}

export default ForgotPassword