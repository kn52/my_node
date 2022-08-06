import Home from '../Home/Home';
import HelloMessage from '../MY_REACT/hello/HelloMessage';
import CheckCardType from '../MY_REACT/cards/Card';
import CardDetails from '../MY_REACT/cards/CardDetails';
import LineChart from '../MY_REACT/LineChart/LineChart';
import QRCodeDemo from '../MY_REACT/QRCode/QRCodeDemo';
import CustomizedSlider from '../MY_REACT/Slider/Slider';
import CircularTimer from '../MY_REACT/CircularTimer/CircularTImer';
import { PrivateRoute } from './PrivateRoute';
import TextInput from '../MY_REACT/TextInput/TextInput';
import Buttons from '../MY_REACT/Buttons/Buttons';
import OtpInputField from '../MY_REACT/Otp/OtpInputField';
import Select_Options from '../MY_REACT/SelectOptions/Select_Options';
import Check_Box from '../MY_REACT/Check_Box/Check_Box';
import React_Parent_Render from '../MY_REACT/Rendering/React_Parent_Render';
import PwaHome from '../MY_REACT/PWA/PwaHome';
import MasterLayout from '../MY_REACT/MasterLayout/MasterLayout';
import { Spinningdiv } from '../MY_REACT/Spinning/Spinnigdiv';
import ReactSelect_Dropdown from '../MY_REACT/ReactSelect_Dropdown/ReactSelect_Dropdown';
import ReactDragMenu from '../MY_REACT/ReactDragMenu/ReactDragMenu';
import Custom_Radio from '../MY_REACT/Custom_Radio/Custom_Radio';
import ShowDivWithJquery from '../MY_REACT/ShowDivWithJquery/ShowDivWithJquery';
import Custom_Text_Box from '../MY_REACT/Custom_Textbox/Custom_Text_Box';
import GoogleLocation from '../MY_REACT/Google/GoogleLocation';
import Custom_Table from '../MY_REACT/Custom_Table/Custom_Table';
import VideoFIleUploadToBytes from '../MY_REACT/FileUploads/VideoFIleUploadToBytes';
import FileUploadToArray from '../MY_REACT/FileUploads/FileUploadToArray';
import FileUploadToFormData from '../MY_REACT/FileUploads/FileUploadToFormData';
import { Cal_Heatmap } from '../MY_REACT/Heatmap/Calender_HeatMap/Heat_Map/Cal_Heatmap';
import Demo from '../_Demo/Demo';
import { Article } from '../ts_component/Article/Article';
import { Counter } from '../ts_component/Counter/Counter';
import { FroalaEditor } from '../ts_component/Froala/FroalaEditor';

export const ChildRoute = (props) => {

    const { match } = props.urls;

    return (
        <MasterLayout>
            <PrivateRoute path={`${match.url}/demo`} exact component={Demo} />
            <PrivateRoute path={`${match.url}/hellomessage`} exact component={HelloMessage} />
            <PrivateRoute path={`${match.url}/home`} exact component={Home} />
            <PrivateRoute path={`${match.url}/cardtype`} exact component={CheckCardType} />
            <PrivateRoute path={`${match.url}/qrcode`} exact component={QRCodeDemo} />
            <PrivateRoute path={`${match.url}/linechart`} exact component={LineChart} />
            <PrivateRoute path={`${match.url}/carddetails`} exact component={CardDetails} />
            <PrivateRoute path={`${match.url}/slider`} exact component={CustomizedSlider} />
            <PrivateRoute path={`${match.url}/circular`} exact component={CircularTimer} />
            <PrivateRoute path={`${match.url}/textinput`} exact component={TextInput} />
            <PrivateRoute path={`${match.url}/buttons`} exact component={Buttons} />
            <PrivateRoute path={`${match.url}/otpinputfield`} exact component={OtpInputField} />
            <PrivateRoute path={`${match.url}/selectdrop`} exact component={Select_Options} />
            <PrivateRoute path={`${match.url}/checkbx`} exact component={Check_Box} />
            <PrivateRoute path={`${match.url}/reactrender`} exact component={React_Parent_Render} />
            <PrivateRoute path={`${match.url}/pwahome`} exact component={PwaHome} />
            <PrivateRoute path={`${match.url}/spindiv`} exact component={Spinningdiv} />
            <PrivateRoute path={`${match.url}/reactselectdropdown`} exact component={ReactSelect_Dropdown} />
            <PrivateRoute path={`${match.url}/reactdragmenu`} exact component={ReactDragMenu}/>
            <PrivateRoute path={`${match.url}/customradio`} exact component={Custom_Radio}/>
            <PrivateRoute path={`${match.url}/showdivwithjquery`} exact component={ShowDivWithJquery}/>
            <PrivateRoute path={`${match.url}/customtextbox`} exact component={Custom_Text_Box}/>
            <PrivateRoute path={`${match.url}/googlelocation`} exact component={GoogleLocation}/>
            <PrivateRoute path={`${match.url}/customtable`} exact component={Custom_Table}/>
            <PrivateRoute path={`${match.url}/calenderheatmap`} exact component={Cal_Heatmap}/>
            <PrivateRoute path={`${match.url}/videofileuploadtobytes`} exact component={VideoFIleUploadToBytes}/>
            <PrivateRoute path={`${match.url}/fileuploadtoarray`} exact component={FileUploadToArray}/>
            <PrivateRoute path={`${match.url}/fileuploadtoformdata`} exact component={FileUploadToFormData}/>
            <PrivateRoute path={`${match.url}/tarticle`} exact component={Article}/>
            <PrivateRoute path={`${match.url}/tcounter`} exact component={Counter}/>
            <PrivateRoute path={`${match.url}/tfroalaeditor`} exact component={FroalaEditor}/>
        </MasterLayout>
    );
}
