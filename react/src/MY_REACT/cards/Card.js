import React from 'react';
import Home from '../../Home/Home';
import CheckCardType from './CheckCardType';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            cardType:"",
            cardNumber:""
        }
    }

    handleCardType = async (e) => {
        var number= "";
        var cType=[]
        number=e.target.value;
        if(number.length >=6) {
            cType=CheckCardType.checkCardType(number.trim());
            await this.setState({cardType:cType});
        }else{ 
            await this.setState({cardType:""}); 
        }
    }
    
    componentDidMount(){
        // localStorage.getItem("password") === null && window.location.replace("/"); 
    }

    render() {
        return (
            <>
                <div><Home /></div>
                <div style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column', alignItems:'center', color: "black", height: "80%", background: "white" }}>
                    <input data-testid="input" type="text" value={this.state.cardNumber} maxLength="8" onChange={(e) => {
                        this.setState({ cardNumber: e.target.value }); this.handleCardType(e)
                    }} />
                    <br />
                    <label>Card Number: {this.state.cardNumber}</label>
                    <br />
                    <label>Card type</label>
                    <br />
                    {this.state.cardType.length !== 0 && <img src={this.state.cardType} width="70px" height="60px" alt="" />}
                </div>
            </>
        )
    }
}

export default Card;