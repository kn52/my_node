import './Home.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { Link, useHistory } from 'react-router-dom';
import { Menus } from '../MenuList/Menus';

const Home = () => {
    const history = useHistory();

    const redirectTo = (menu) => {
        history.push({
            pathname: menu.to, 
            data: { dtls: menu.prps }
        })
    }

    let reactmenu = <Menu className="menu_container">
                {
                    Menus.ReactMenu().map((menu, index) => {
                        return <>
                                <Divider />
                                <MenuItem key={index} onClick={ () => redirectTo(menu)} className="menu_option_name">
                                    <span>{menu.name}</span>
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
                    overlay={reactmenu}
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