import React from 'react';

class QRCodeDemo extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            cardType:"",
            cardNumber:""
        }
    }

    componentDidMount(){
        // localStorage.getItem("password") === null && window.location.replace("/"); 
    }

    render() {
        var React = require('react');
        var QRCode = require('qrcode.react');
        return (
            <>
                <div style={{ left: "10px", color: "black", width: "50%", height: "80%", background: "white" }}>
                    <QRCode value="http://facebook.github.io/react/" />
                </div>
            </>
        )
    }
}

export default QRCodeDemo;