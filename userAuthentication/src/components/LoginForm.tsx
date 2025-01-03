import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../redux/authSlice';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch(); // Tipli dispatch
    const { isLoading, error } = useAppSelector((state) => state.auth); // Tipli selector

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password })); // Sorunsuz çağrı
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
