'use client'
import { resetPassword } from '@/services/passwordRecovery';
import { supabase } from '@/services/supabase';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import ResetPasswordPage from './ResetPasswordPage';

const ForgotPassword = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordPage />
        </Suspense>
    );
}

export default ForgotPassword