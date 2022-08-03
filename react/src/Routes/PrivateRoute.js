import { Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
    return <Route path={props.path} exact component={props.component}/>
};
