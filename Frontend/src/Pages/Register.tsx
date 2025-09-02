import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        day: '',
        month: '',
        year: '',
        gender: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
            <div>
                <img src="./assets" alt="" />
            </div>
            <div className="max-w-md w-full">
                {/* Sign Up Form */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="space-y-4">
                        {/* Name Fields */}
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Tên"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Họ"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                required
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email hoặc số di động"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            required
                        />

                        {/* Password */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Mật khẩu mới"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            required
                        />

                        {/* Birthday */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Sinh nhật</label>
                            <div className="flex space-x-2">
                                <select
                                    name="day"
                                    value={formData.day}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    required
                                >
                                    <option value="">Ngày</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <select
                                    name="month"
                                    value={formData.month}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    required
                                >
                                    <option value="">Tháng</option>
                                    <option value="1">Tháng 1</option>
                                    <option value="2">Tháng 2</option>
                                    <option value="3">Tháng 3</option>
                                    <option value="4">Tháng 4</option>
                                    <option value="5">Tháng 5</option>
                                    <option value="6">Tháng 6</option>
                                    <option value="7">Tháng 7</option>
                                    <option value="8">Tháng 8</option>
                                    <option value="9">Tháng 9</option>
                                    <option value="10">Tháng 10</option>
                                    <option value="11">Tháng 11</option>
                                    <option value="12">Tháng 12</option>
                                </select>
                                <select
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    required
                                >
                                    <option value="">Năm</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const year = 2024 - i;
                                        return <option key={year} value={year}>{year}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Giới tính</label>
                            <div className="flex space-x-2">
                                <label className="flex-1 flex items-center justify-between px-3 py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                    <span className="text-gray-900">Nam</span>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleInputChange}
                                        className="ml-2 text-blue-600 focus:ring-blue-500"
                                    />
                                </label>
                                <label className="flex-1 flex items-center justify-between px-3 py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                    <span className="text-gray-900">Nữ</span>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleInputChange}
                                        className="ml-2 text-blue-600 focus:ring-blue-500"
                                    />
                                </label>
                                <label className="flex-1 flex items-center justify-between px-3 py-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                                    <span className="text-gray-900">Tùy chỉnh</span>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="custom"
                                        checked={formData.gender === 'custom'}
                                        onChange={handleInputChange}
                                        className="ml-2 text-blue-600 focus:ring-blue-500"
                                    />
                                </label>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-200 text-lg"
                        >
                            Đăng ký
                        </button>

                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6 pt-4 border-t border-gray-200">
                        <p className="text-gray-600">
                            Bạn đã có tài khoản?{' '}
                            <a href="#" className="text-blue-600 hover:underline font-semibold">
                                Đăng nhập
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;