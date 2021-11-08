import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Hello from '../MY_REACT/hello/HelloMessage';
import Card from '../MY_REACT/cards/Card';
import CardDetails from '../MY_REACT/cards/CardDetails';
import LineChart from '../MY_REACT/LineChart/LineChart';
import QRCodeDemo from '../MY_REACT/QRCode/QRCodeDemo';
import Slider from '../MY_REACT/Slider/Slider';
import CircularTimer from '../MY_REACT/CircularTimer/CircularTImer';
import Login from '../Login/Login';
import PrivateRoute from './PrivateRoute';
import TextInput from '../MY_REACT/TextInput/TextInput';
import Buttons from '../MY_REACT/Buttons/Buttons';
import OtpInputField from '../MY_REACT/Otp/OtpInputField';
import Select_Options from '../MY_REACT/SelectOptions/Select_Options';
import { Check_Box } from '../MY_REACT/Check_Box/Check_Box';

export const DefaultRoute = () => <>
    <Router>
        <Switch>
            {/* <Route path='/' exact render={()=>{ 
                return (
                    <Redirect to='/login'/>
                )}
            }/>
            <Route path="/login" exact component={Login}/> */}
            {/* <Route path={["/","/login"]} exact component={Login}/> */}
            <Route path="/(/|login)/" exact component={Login} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/hellomessage" exact component={Hello} />
            <PrivateRoute path="/card" exact component={Card} />
            <PrivateRoute path="/qrcode" exact component={QRCodeDemo} />
            <PrivateRoute path="/linechart" exact component={LineChart} />
            <PrivateRoute path="/carddetails" exact component={CardDetails} />
            <PrivateRoute path="/slider" exact component={Slider} />
            <PrivateRoute path="/circular" exact component={CircularTimer} />
            <PrivateRoute path="/textinput" exact component={TextInput} />
            <PrivateRoute path="/buttons" exact component={Buttons} />
            <PrivateRoute path="/otpinputfield" exact component={OtpInputField} />
            <PrivateRoute path="/selectdrop" exact component={Select_Options} />
            <PrivateRoute path="/checkbx" exact component={Check_Box} />
        </Switch>
    </Router>
</>