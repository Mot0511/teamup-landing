'use client'
import { resetPassword } from '@/services/passwordRecovery';
import { supabase } from '@/services/supabase';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const ResetPasswordPage = () => {
    const [password, setPassoword] = useState<string>('');
    const [isPasswordReseted, setIsPasswordReseted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const searchParams = useSearchParams()

    const handleSubmit = async () => {
        if (!password) return;
        setIsLoading(true)
        const email = searchParams.get('email')
        const token = searchParams.get('token')
        if (email != null && token != null) {
            await resetPassword(email, password, token)
            setIsPasswordReseted(true);
        }
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
                            : isLoading
                                ? 'Подождите...'
                                : 'Cбросить пароль'
                }
            </button>
        </div>
    );
}

export default ResetPasswordPage