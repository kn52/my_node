import React from 'react';
import './Home.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const menu = (
        <Menu>
            <MenuItem><Link to={{ pathname: "/hellomessage", name: 'Daemons' }} className="link_style">Hello Message</Link></MenuItem>
            <Divider />
            <MenuItem key='1'><Link to={"/card"} className="link_style">Card</Link></MenuItem >
            <Divider />
            <MenuItem key='2'><Link to={"/qrcode"} className="link_style">QR Code</Link></MenuItem >
            <Divider />
            <MenuItem key='3'><Link to={"/linechart"} className="link_style">MLine Chart</Link></MenuItem >
            <Divider />
            <MenuItem key='4'><Link to={"/carddetails"} className="link_style">Card Details</Link></MenuItem >
            <Divider />
            <MenuItem key='5'><Link to={"/slider"} className="link_style">RangeSlider</Link></MenuItem >
            <Divider />
            <MenuItem key='6'><Link to={"/circular"} className="link_style">Circular</Link></MenuItem>
            <Divider />
            <MenuItem key='7'><Link to={"/textinput"} className="link_style">TextInput</Link></MenuItem>
            <Divider />
            <MenuItem key='8'><Link to={"/buttons"} className="link_style">Buttons</Link></MenuItem>
            <Divider />
            <MenuItem key='9'><Link to={"/otpinputfield"} className="link_style">OtpInputField</Link></MenuItem>
            <Divider />
            <MenuItem key='10'><Link to={"/selectdrop"} className="link_style">SelectOptions</Link></MenuItem>
        </Menu>
    );

    const clearStorage = () =>{
        localStorage.clear();
    }

    return (
        <>
            <div className="home_main_container">
                <div>
                    <Link to={"/home"} className="home_button">Home</Link>
                    &nbsp;&nbsp;
                    <Dropdown
                        trigger={['click']}
                        overlay={menu}
                        animation="slide-up">
                        <button className="dropdown_button">React</button>
                    </Dropdown>
                </div>
                <div>
                    <Link to={"/login"} className="logout_button" onClick={clearStorage}>Logout</Link>
                </div>
            </div>
            {
                window.location.href.trim().toLowerCase().includes("home") && 
                <div className="hello_msg">
                        <h1>Hi Stranger! <br/> Welcome in Daemon's World</h1>
                </div>
            }
        </>

    )
}

export default Home;