import React from 'react';
import './Home.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const menu = (
        <Menu className="menu_container">
            <MenuItem><Link to={{ pathname: "daemon/hellomessage", name: 'Daemons' }} className="link_style">Hello Message</Link></MenuItem>
            <Divider />
            <MenuItem key='1'><Link to={"daemon/cardtype"} className="link_style">Card</Link></MenuItem >
            <Divider />
            <MenuItem key='2'><Link to={"daemon/qrcode"} className="link_style">QR Code</Link></MenuItem >
            <Divider />
            <MenuItem key='3'><Link to={"daemon/linechart"} className="link_style">MLine Chart</Link></MenuItem >
            <Divider />
            <MenuItem key='4'><Link to={"daemon/carddetails"} className="link_style">Card Details</Link></MenuItem >
            <Divider />
            <MenuItem key='5'><Link to={"daemon/slider"} className="link_style">RangeSlider</Link></MenuItem >
            <Divider />
            <MenuItem key='6'><Link to={"daemon/circular"} className="link_style">Circular</Link></MenuItem>
            <Divider />
            <MenuItem key='7'><Link to={"daemon/textinput"} className="link_style">TextInput</Link></MenuItem>
            <Divider />
            <MenuItem key='8'><Link to={"daemon/buttons"} className="link_style">Buttons</Link></MenuItem>
            <Divider />
            <MenuItem key='9'><Link to={"daemon/otpinputfield"} className="link_style">OtpInputField</Link></MenuItem>
            <Divider />
            <MenuItem key='10'><Link to={"daemon/selectdrop"} className="link_style">SelectOptions</Link></MenuItem>
            <Divider />
            <MenuItem key='11'><Link to={"daemon/checkbx"}  className="link_style">CheckBox</Link></MenuItem>
            <Divider />
            <MenuItem key='12'><Link to={"daemon/reactrender"}  className="link_style">Render React Elements</Link></MenuItem>
            {/* <Divider />
            <MenuItem key='12'><Link to={"daemon/pwahome"}  className="link_style">Pwa Home</Link></MenuItem> */}
        </Menu>
    );

    const clearStorage = () =>{
        sessionStorage.clear();
        window.location.replace(`/`);
    }

    return (
        <>
            <div className="home_main_container">
                <div>
                    <Link to={"home"} className="home_button">Home</Link>
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
                    <h1>Hi <br /> Daemon!</h1>
                </div>
            }
        </>

    )
}

export default Home;