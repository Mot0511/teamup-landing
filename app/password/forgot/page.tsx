'use client'
import { supabase } from '@/services/supabase';
import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [isRequested, setIsRequested] = useState<boolean>(false)

    const handleSubmit = async () => {
        if (!email || isRequested) return;
        setIsRequested(true)
        supabase.auth.resetPasswordForEmail(
            email,
            {
                redirectTo: 'https://teamupp.ru/password/reset/'
            }
        );
    }

    return (
        <div className='form_canvas'>
            <h1>Забыли пароль?</h1>
            <p>
                Напиши свою почту, а мы пришлем ссылку на восстановление пароля.
            </p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Почта, на которую был зарегистрирован аккаунт' />
            <button onClick={handleSubmit}>
                {
                    isRequested
                        ? 'Письмо отправлено на твою почту!'
                        : 'Подтвердить'
                }
            </button>
        </div>
    );
}

export default ForgotPassword