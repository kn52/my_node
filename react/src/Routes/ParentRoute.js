import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Login/Login';
import { Master } from '../MY_REACT/MasterLayout/Master';

export const ParentRoute = () => <>
    <Router>
        <Route path={["/","/login"]} exact  component={Login} />
        <Route path="/daemon" component={Master} />
    </Router>
</>