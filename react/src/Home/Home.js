import './Home.scss';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import '../MY_REACT/MasterLayout/MasterLayout.scss';
import { useHistory } from 'react-router-dom';
import { home, user, react_icon,  logout} from '../assets/images';
import { Menus } from '../MenuList/Menus';
import { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';

const Home = () => {
    const history = useHistory();

    const redirectTo = (menu) => {
        if(toggleReactDropdown === true)
        {
            setToggleReactDropdown(false);
            history.push({ pathname: menu.to, data: { dtls: menu.prps } });
        }
        history.push({ pathname: menu.to, data: { dtls: menu.prps } });
    }; 

    const [toggleReactDropdown, setToggleReactDropdown] = useState(false);

    const toggleDropDropDown = async () => {
        var toggleDropDropDownValue = !toggleReactDropdown;
        await setToggleReactDropdown(toggleDropDropDownValue);
    }
        
    const clearStorage = (menu) => {
        sessionStorage.clear();
        history.push({ pathname: menu.to, data: { dtls: menu.prps } });
    }

    return (
        <div className="home_main">
            <div className='menu_content'>
                <div className='menu_content_user'>
                    <div className='menu_content_user_image_cont'>
                        <img src={user} className='menu_content_user_image' />
                    </div>
                </div>
                <div className='menu_content_list' onClick={() => redirectTo({ to: "home", prps: null })}>
                    <img src={home} className='menu_content_icon'/>
                    <span className="link_to menu_content_text">Home</span>
                </div>
                <div className='menu_content_list' onClick={() => toggleDropDropDown() }>
                    <img src={react_icon} className='menu_content_icon'  />
                    <div>
                        <button className="dropdown_button menu_content_text">React</button>
                        {
                            toggleReactDropdown && 
                            <ClickAwayListener onClickAway={()=> toggleDropDropDown()}>
                                <div className='dropdown_content'>
                                    {
                                        Menus.ReactMenu().map((menu, index) => {
                                            return <p key={index} onClick={() => redirectTo(menu)}>{menu.name}</p>
                                        })
                                    }
                                </div>
                            </ClickAwayListener>
                        }
                    </div>
                </div>
            </div>
            <div className='logout_content menu_content_list' onClick={() => clearStorage({ to: "/", prps: null })}>
                <img src={logout} className='menu_content_icon'/>
                <span className="logout_link_to menu_content_text"></span>
            </div>
        </div>
    )
}

export default Home;