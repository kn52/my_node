import React from "react";
import './GoogleLocation.scss';

export default class GoogleLocation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            googlelocationtype: {
                autolocation: false,
                manuallocation: false,
            },
            googlelocation: {
                latitude:"",
                longitude:"",
                city:"",
                state:"",
                postal:"",
                country:"",
            },
            userCity:"",
            userState:""
        }
    }

    componentDidMount(){
       
    }

    setCheckedBox = (google_val) => {
        if(google_val === "auto"){
            const google_locationtype = this.state.googlelocationtype;
            if(google_locationtype.autolocation){
                google_locationtype.autolocation = false;
                google_locationtype.manuallocation = false;
            }else{
                google_locationtype.autolocation = true;
                google_locationtype.manuallocation = false;
            }

            this.setState({googlelocationtype:google_locationtype});
        }
        if(google_val === "manual"){
            const google_locationtype = this.state.googlelocationtype;
            if(google_locationtype.manuallocation){
                google_locationtype.manuallocation = false;
                google_locationtype.autolocation = false;
            }else{
                google_locationtype.manuallocation = true;
                google_locationtype.autolocation = false;
            }

            this.setState({googlelocationtype:google_locationtype});
        }
    }

    getgeolocation = async () => {
        debugger;
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showposition,this.poserror)
        }
    }

    showposition = (pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;

        let obj = this.state.googlelocation;

        obj.latitude = lat;
        obj.longitude = long;
        this.setState({googlelocation: obj});
        this.convertToAddress(lat, long);
    }

    poserror = () => {
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' }).then(res => {
                if (res.state === 'denied') {
                    alert('Enable location permissions for this website in your browser settings.')
                }
            })
        } else {
            alert('Unable to access your location. You can continue by submitting location manually.') 
        }
    }

    convertToAddress = (lat, long) => {
        // fetch('http://localhost:3000/googlemaps')
        //     .then(res => res.json())
        //     .then(obj => this.getAddress(lat, long, obj.api_key));
        this.getAddress(lat, long, "AIzaSyDIETGixd8oOfXRAJdnO_IOlzRVWqqSYmw");
    }

    getAddress = (lat, long, googleKey) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleKey}`)
            .then(res => res.json())
            .then(address => this.setZip(address))
    }

    setZip = (address) => {
        debugger;
        let city = address.results[5].address_components[2]?.short_name 
        let state = address.results[5].address_components[4]?.short_name
        let postal = address.results[5].address_components[0]?.short_name

        let obj = this.state.googlelocation;

        obj.city = city;
        obj.state = state;
        obj.postal = postal;
        this.setState({googlelocation: obj});

    }

    processManualLocation = (userState,userCity) => {
        if (userState !== "" && userCity !== "") {
            let city = userState;
            let state = userCity;
    
            let url = `https://maps.googleapis.com/maps/api/geocode/json?address=+${city},+${state}&key=${process.env.REACT_APP_googleKey}`
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    if (res.status === "OK") {
                        this.getUserCoords(res.results)
                    } else if (res.status === "ZERO_RESULTS") {
                        alert('Unable to process this location. Please revise location fields and try submitting again.')
                    }
                })
        }
        // else
    }
    
    getUserCoords = (googleRes) => {
        debugger;
        let lat = googleRes[0].geometry.location.lat 
        let long = googleRes[0].geometry.location.lng 
    }

    render(){
        const { googlelocation,googlelocationtype, userCity, userState} = this.state;
        return(
            <>
                <div className="checkbox_container">
                    <div className="checkbox_content">
                        <input type="checkbox" value={"auto"} checked={googlelocationtype.autolocation}
                            onClick={(e) => this.setCheckedBox(e.target.value)} />
                        <h6>Auto</h6>
                    </div>
                    <div className="checkbox_content">
                        <input type="checkbox" value={"manual"} checked={googlelocationtype.manuallocation}
                            onClick={(e) => this.setCheckedBox(e.target.value)} />
                        <h6>manual</h6>
                    </div>
                </div>
                <hr className="hr_style"/>
                <div className="button_container">
                    {
                        googlelocationtype.autolocation &&
                        <button onClick={(e) => this.getgeolocation()}>Get Current Location</button>
                    }
                    {
                        googlelocationtype.manuallocation &&
                        <>
                            <input type="text" value={userCity} onChange={(e) => this.setState({ userCity: e.target.value })} />
                            <input type="text" value={userState} onChange={(e) => this.setState({ userState: e.target.value })} />
                            <button onClick={(e) => this.processManualLocation(userState,userCity)}>Get manual Location</button>
                        </>
                    }
                </div>
                <div className="location_container">
                    <div className="location_content">
                        <h4>Latitude:</h4>
                        <span>{googlelocation.latitude}</span>
                    </div>
                    <div className="location_content">
                        <h4>Longitude:</h4>
                        <span>{googlelocation.longitude}</span>
                    </div>
                    <div className="location_content">
                        <h4>city:</h4>
                        <span>{googlelocation.city}</span>
                    </div>
                    <div className="location_content">
                        <h4>State:</h4>
                        <span>{googlelocation.state}</span>
                    </div>
                    <div className="location_content">
                        <h4>Country:</h4>
                        <span>{googlelocation.country}</span>
                    </div>
                    <div className="location_content">
                        <h4>Zip:</h4>
                        <span>{googlelocation.postal}</span>
                    </div>
                </div>
            </>
        )
    }
}
