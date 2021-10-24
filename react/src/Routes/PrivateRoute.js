import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => sessionStorage.getItem("password") === null ?
    (<Redirect to="/login"/>) : (<Route path={props.path} exact component={props.component}/> );  

export default PrivateRoute;