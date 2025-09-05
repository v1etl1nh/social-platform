import React, { useState } from 'react';
import API from '../API/api';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const res = await API.post('/auth/login', { email, password })
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            window.location.href = '/';
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex flex-col gap-5 items-center bg-white p-10 rounded shadow-md w-1/3'>
                <div className='font-bold'>Đăng nhập</div>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='px-5 py-3 w-full rounded border ' />
                <input
                    type='password'
                    placeholder='Mật khẩu'
                    onChange={(e) => setPassword(e.target.value)}
                    className='px-5 py-3 w-full rounded border ' />
                <button onClick={handleLogin} className='rounded-xl bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white w-full font-bold duration-200'>Đăng nhập</button>
                <div>
                    <a href='/register'>Đăng ký</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;