import React, { useState } from 'react';

const AdmitCard = () => {
    const [registerInfo, setRegisterInfo] = useState({});
    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReg = { ...registerInfo }
        console.log(newReg);
        newReg[field] = value;
        setRegisterInfo(newReg);

    }
    const handleRegister = (e) => {


        e.preventDefault();
    }

    const admitStyle = {
        backgroundColor: '#ddd',
        padding: '80px'
    };

    return (
        <div style={admitStyle}>
            <h4>Register</h4>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='name' onBlur={handleOnblur} /> <br />
                <input type="number" name="number" id="number" placeholder='phone number' onBlur={handleOnblur} /> <br />
                <input type="email" name="email" id="email" placeholder='email' onBlur={handleOnblur} /><br />
                <input type="password" name="password" id="password" placeholder='password' onBlur={handleOnblur} /><br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default AdmitCard;