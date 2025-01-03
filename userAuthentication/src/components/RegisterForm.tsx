import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/authSlice'; 
import { RootState } from '../redux/store';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setValidationError('Passwords do not match');
            return;
        }
        setValidationError('');
        dispatch(register({ email, password }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default RegisterForm;
