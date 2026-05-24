'use client'
import React, { useEffect } from 'react';

const AcceptInvite = ({params}: {params: Promise<{teamID: number, number: number}>}) => {

    useEffect(() => {
        redirect()
    }, [])

    const redirect = async () => {
        const {teamID, number} = await params;
        setTimeout(() => {
            window.location.href = `teamup://invite/${teamID}/${number}`
        }, 250)
        
    }

    return (
        <h1>Сейчас вы будете перенаправлены в Teamup</h1>
    );
}

export default AcceptInvite;