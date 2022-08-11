import './Home.scss';
import '../MY_REACT/MasterLayout/MasterLayout.scss';
import { useHistory } from 'react-router-dom';
import { home, user, react_icon,  logout} from '../assets/images';
import { Menus } from '../MenuList/Menus';
import { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { shallowEqual, useSelector } from 'react-redux'
import { ActionType } from '../Redux/Actions/ActionTypes';

const Home = () => {

    // const { usr } = useSelector((state)=>({
    //     usr: state.login.username
    // }),shallowEqual);

    const usr = "";
    const [currentPage,setCurrentPage] = useState("home");
    const [isLogout,setIsLogout] = useState(false);

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
                <div className={currentPage === "home" ? 'menu_content_list _active' : 'menu_content_list'} onClick={() => redirectTo({ to: "home", prps: null })}>
                    <img src={home} className='menu_content_icon' alt="home"/>
                    <span className="home_text">Home</span>
                </div>
                <div className={currentPage !== "home" ? 'menu_content_list _active' : 'menu_content_list'} onClick={() => toggleDropDropDown() }>
                    <div className='react_list'>
                        <div className='react_list_head'>
                            <img src={react_icon} className='menu_content_icon' alt="react" />
                            <button className="dropdown_button menu_content_text" style={currentPage !== "home" ? { backgroundColor: '#33b5e500' } : { backgroundColor: '#fff' }}>
                                <span className='span_text'>React</span>
                            </button>
                        </div>
                        {
                            toggleReactDropdown &&
                            <ClickAwayListener onClickAway={() => toggleDropDropDown()}>
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
        </div>
    )
}

export default Home;