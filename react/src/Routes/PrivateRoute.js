import { Route } from 'react-router-dom';
import Login from '../Login/Login';

const PrivateRoute = (props) => {
    if(sessionStorage.getItem("password") === null){
        return (<Route path="/" exact component={Login}/>);  
    }
    else
    {
        return (<Route path={props.path} exact component={props.component}/> );
    }
}

export default PrivateRoute;