import { Route } from 'react-router-dom';
import Login from '../Login/Login';

export const PrivateRoute = (props) => sessionStorage.getItem("password") === null 
                                ? (<Route path="/" exact component={Login}/>) 
                                : (<Route path={props.path} exact component={props.component}/> );
