import api from "./axios"

export const forgotPassword = async (email: string) => {
    await api.post('/auth/forgot', {
        email: email
    })
}

export const resetPassword = async (email: string, newPassword: string, token: string) => {
    await api.post('/auth/reset', {
        email: email,
        newPassword: newPassword,
        token: token
    })
}