import React from "react";
import './AppDemo.scss';

class AppDemo extends React.Component{
    
    render(){
        return(
            <div className='check_box_contanier'>
                <input type='checkbox' className="check_box"/>
            </div>
        )
    }

}

export default AppDemo;