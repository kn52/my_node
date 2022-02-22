import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppDemoClassComponent from '../AppDemoClassComponent';
import AppDemoFunctionComponent from '../AppDemoFunctionComponent';
import Login from '../Login/Login';
import { Master } from '../MY_REACT/MasterLayout/Master';

export const ParentRoute = () => <>
    {/* <Router>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/daemon" component={Master} />
        <Route path={["/"]} exact component={AppDemoClassComponent} />
        <Route path={["/"]} exact component={AppDemoClassComponent} />
    </Router> */}
    <Router>
        <Route path={["/"]} exact component={AppDemoClassComponent} />
    </Router>
    {/* <Router>
        <Route path={["/"]} exact component={AppDemoFunctionComponent} />
    </Router> */}
</>