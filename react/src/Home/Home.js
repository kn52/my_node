import './Home.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import '../';
import { Link } from 'react-router-dom';
import { Menus } from '../MY_REACT/MenuList/Menus';

const Home = () => {

    const menulist = (Menus.MenuList());
    let menu = <Menu className="menu_container">
                {
                    menulist.map((menu, index) => {
                        return <>
                                <Divider />
                                <MenuItem key={index}>
                                    <Link to={{ pathname: menu.to, data: { dtls: menu.prps } }} className="link_style">
                                        {menu.name}
                                    </Link>
                                </MenuItem>
                            </>
                            
                    })
                }
                </Menu>

    const clearStorage = () => sessionStorage.clear();

    return (
        <div className="home_main">
            <div>
                <Link to={"home"} className="link_to">Home</Link>
                <Dropdown
                    trigger={['click']}
                    overlay={menu}
                    animation="slide-up">
                    <button className="dropdown_button">React</button>
                </Dropdown>
            </div>
            <div>
                <Link to={"/"} className="logout_link_to" onClick={clearStorage}>Logout</Link>
            </div>
        </div>
    )
}

export default Home;