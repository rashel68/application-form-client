import React from 'react';

const Login = () => {
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
            <form>
                <input style={fieldStyle} type="email" placeholder='Enter your email' /> <br />
                <input style={fieldStyle} type="password" placeholder='Enter your password' /> <br />
                <input style={fieldStyle} type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Login;