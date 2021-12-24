import './Home.scss';
import '../MY_REACT/MasterLayout/MasterLayout.scss';
import { useHistory } from 'react-router-dom';
import { home, user, react_icon,  logout} from '../assets/images';
import { Menus } from '../MenuList/Menus';
import { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';

const Home = () => {

    const [currentPage,setCurrentPage] = useState("home");

    const history = useHistory();

    const redirectTo = (menu) => {
        setCurrentPage(menu.to);
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
                        <img src={user} className='menu_content_user_image' alt="user"/>
                    </div>
                </div>
                <div className={currentPage === "home" ? 'menu_content_list _active' : 'menu_content_list'} onClick={() => redirectTo({ to: "home", prps: null })}>
                    <img src={home} className='menu_content_icon' alt="home"/>
                    <span className="link_to menu_content_text">Home</span>
                </div>
                <div className={currentPage !== "home" ? 'menu_content_list _active' : 'menu_content_list'} onClick={() => toggleDropDropDown() }>
                    <img src={react_icon} className='menu_content_icon'  alt="react"/>
                    <div>
                        <button className="dropdown_button menu_content_text" style={currentPage !== "home" ? {backgroundColor:'#33b5e500'}: {backgroundColor:'#fff'}}>React</button>
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
                <img src={logout} className='menu_content_icon' alt="logout"/>
                <span className="logout_link_to menu_content_text"></span>
            </div>
        </div>
    )
}

export default Home;