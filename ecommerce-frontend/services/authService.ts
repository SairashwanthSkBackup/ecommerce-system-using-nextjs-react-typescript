import api from './api';

export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await api.post('/auth/login', data);
        const { token } = response.data;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        throw error;
    }
};