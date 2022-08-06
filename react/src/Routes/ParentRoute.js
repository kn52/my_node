import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Master } from '../MY_REACT/MasterLayout/Master';

export const ParentRoute = () => <>
    <Router>
        <Route path={["/", "/login"]} exact render={()=>{ return (<Redirect to='/demon/demo'/>)}} />
        <Route path="/demon" component={Master} />
    </Router>
</>