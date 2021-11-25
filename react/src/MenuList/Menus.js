import { Link } from '@material-ui/core';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import './Menus.scss';

export const Menus = () => {
    const menu = <Menu className="menu_container">
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
        <Divider />
        <MenuItem key='11'><Link to={"/checkbx"} className="link_style">CheckBox</Link></MenuItem>
        <Divider />
        <MenuItem key='12'><Link to={"/reactrender"} className="link_style">Render React Elements</Link></MenuItem>
        <Divider />
        <MenuItem key='12'><Link to={"/pwahome"} className="link_style">Pwa Home</Link></MenuItem>
    </Menu>;


    return (
        <>
                    <Dropdown
                    trigger={['click']}
                    overlay={menu}
                    animation="slide-up">
                    <button className="dropdown_button">Menu</button>
                </Dropdown>
        </>
    );
}
