import './Home.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import '../';
import { Link } from 'react-router-dom';
import { Menus } from '../MY_REACT/MenuList/Menus';

const Home = () => {

    const menulist = (Menus.MenuList());
    let maplist = menulist.map((menu, index) => {
        return (index === 1) ?
            <>
                <Divider />
                <MenuItem key={index}><Link to={{ pathname: menu.to, name: menu.prps }} className="link_style">{menu.name}</Link></MenuItem>
            </>
            :
            <>
                <Divider />
                <MenuItem key={index}><Link to={menu.to} className="link_style">{menu.name}</Link></MenuItem>
            </>
    });
    const menu = <Menu className="menu_container" style={{}}>{maplist}</Menu>;

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