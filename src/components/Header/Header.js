import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import bsri from './images/bsri.png';
import govt_logo from './images/govt_logo.png';

const Header = () => {
    const menuStyle = {
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <div className="header">
            <div className='menuTable'>
                <table border-cellSpacing="0" cellPadding="10">
                    <tbody>
                        {/* <tr cellPadding='0' style={{ backgroundColor: '#dfdfdf' }}>
                            <td colSpan='3' cellPadding='0'></td>
                        </tr> */}
                        <tr>
                            <td><img src={govt_logo} alt='govt logo' /></td>
                            <td>Government of the People's Republic of Bangladesh <br /> <small>Ministry of
                                Agriculture </small> <br /> <span>Bangladesh
                                    Sugercrop
                                    Research Institute</span> <br /> <small>Ishurdi-6620, Pabna</small> </td>
                            <td><img src={bsri} alt='bsri' /></td>
                        </tr>
                    </tbody>
                </table>
                <table border='2' borderColor='#025c3b' cellPadding='4'>
                    <tbody>
                        <tr height="45" style={{ backgroundColor: 'rgb(1, 129, 83)' }}>
                            <td><Link to="/home" style={menuStyle}>Home</Link></td>
                            <td><Link to="/signature" style={menuStyle}>Photo/Signature Validator</Link></td>
                            <td><Link to="/payment" style={menuStyle}>Payment Status</Link></td>
                            <td><Link to="/instruction" style={menuStyle}>Instructions</Link></td>
                            <td><Link to="/admitCard" style={menuStyle}>Admit Card</Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* <nav>

                <Link to="/users">Users</Link>
                <Link to="/users/add">Add User</Link>
            </nav> */}
        </div>
    );
};

export default Header;