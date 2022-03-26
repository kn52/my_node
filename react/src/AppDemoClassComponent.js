import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import { AppDemoChildClassComponent, AppDemoChildFunctionComponent } from "./AppDemoChildComponent";
import OutsideClickHandler from 'react-outside-click-handler';
export default class AppDemoClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            googlelocation: {
                latitude:"",
                longitude:"",
                city:"",
                state:"",
                postal:""
            }
        }
    }

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class component";
        console.log("Welcome Message",msg);
    }

    getgeolocation = async () => {
        debugger;
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showposition,this.poserror)
        }
    }

    showposition = (pos) => {
        debugger;
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;

        let obj = this.state.googlelocation;

        obj.latitude = lat;
        obj.longitude = long;
        this.setState({googlelocation: obj});
        this.convertToAddress(lat, long);
    }

    poserror = () => {
        debugger;
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
        debugger;
        // fetch('http://localhost:3000/googlemaps')
        //     .then(res => res.json())
        //     .then(obj => this.getAddress(lat, long, obj.api_key));
        this.getAddress(lat, long, "");
    }

    getAddress = (lat, long, googleKey) => {
        debugger;
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleKey}`)
            .then(res => res.json())
            .then(address => this.setZip(address))
    }

    setZip = (address) => {
        debugger;
        let city = address.results[5].address_components[2].short_name
        let state = address.results[5].address_components[4].short_name
        let postal = address.results[5].address_components[0].short_name

        let obj = this.state.googlelocation;

        obj.city = city;
        obj.state = state;
        obj.postal = postal;
        this.setState({googlelocation: obj});

    }

    processManualLocation = () => {
        // if (props.userState !== "" && props.userCity !== "") {
            let city = ""
            let state = ""
    
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
        // } 
        // else
    }
    
    getUserCoords = (googleRes) => {
        let lat = googleRes[0].geometry.location.lat 
        let long = googleRes[0].geometry.location.lng 
    }

    render(){
        return(
            <>
                <button onClick={(e)=> this.getgeolocation()}>button</button>
            </>
        )
    }
}
