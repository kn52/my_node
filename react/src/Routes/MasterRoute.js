import { BrowserRouter as Router, Route } from 'react-router-dom';
import Master from '../MY_REACT/MasterLayout/Master';

export const MasterRoute = () => <>
    <Router>
        <Route path="/" component={Master} />
    </Router>
</>