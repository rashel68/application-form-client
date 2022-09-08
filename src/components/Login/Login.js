import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser } = useAuth();
    const handleOnblur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newObj = { ...loginData };
        newObj[field] = value;
        setLoginData(newObj);
    }
    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password);

        e.preventDefault();
    }
    const loginStyle = {
        backgroundColor: '#ddd',
        padding: '20px 60px',
        borderBottom: '5px solid #025c3b'
    };
    const fieldStyle = {
        padding: '8px',
        margin: '10px',

    }
    return (
        <div style={loginStyle}>
            <h2 style={{ color: '#025c3b' }}>Login</h2>
            <form onSubmit={handleLogin}>
                <input onBlur={handleOnblur} style={fieldStyle} type="email" placeholder='Enter your email' /> <br />
                <input onBlur={handleOnblur} style={fieldStyle} type="password" placeholder='Enter your password' /> <br />
                <input style={fieldStyle} type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Login;