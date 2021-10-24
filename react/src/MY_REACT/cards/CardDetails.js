import React from 'react';
import Home from '../../Home/Home';
import './CardDetails.scss';
import CheckCardType from './CheckCardType';
import VerifyCardNumber from './VerifyCardNumber';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLength: 16,
      cardNumber: '',
      placeholder: 'Enter credit card number',
      type: "",
      valid: "",
      error: {},
    };
  }

  getValidMessage = () => {
    if (this.state.valid !== "") {
      return this.state.valid
        ? 'Valid ✓'
        : 'Credit card number is invalid';
    }

    return '';
  }

  verifyNumber = async (cardNumber) => {
    if (cardNumber.length === this.state.maxLength) {
      let val = await VerifyCardNumber.verifyNumber(cardNumber);
      this.setState({ valid: val });
    }
    if(cardNumber.length !== this.state.maxLength) {
      this.setState({ valid: "" });
    }
  }

  determineCardType = async (cardNumber) =>{
    let cardType=""

    if (cardNumber.length >= 6) {
      cardType = CheckCardType.checkCardType(cardNumber);
    }
    await this.setState({type:cardType});
  }

  handleChange = async (e) => {
    await this.setState({ cardNumber: e.target.value });
    this.determineCardType(this.state.cardNumber);
    this.verifyNumber(this.state.cardNumber);
  }

  handleClick = (e) => {
    this.setState({ cardNumber: "", valid: "" });
  }

  componentDidMount(){
    // localStorage.getItem("password") === null && window.location.replace("/"); 
  }

  render() {
    return (
      <>
        <div className="input-addon">
          <input type="text"
            value={this.state.cardNumber}
            placeholder={this.state.placeholder}
            maxLength={this.state.maxLength}
            onChange={this.handleChange}
          />&nbsp;
          <button className="reset" onClick={this.handleClick}>reset</button>
        </div>
        <div className="error">
          <span className={ this.state.valid? 'error valid' : 'error invalid' }>
              { this.getValidMessage() }
          </span>
        </div>
        { this.state.type.length !== 0 &&<img src={this.state.type} alt={`credit card logo`} width="200px" height="100px"/> }
      </>
    );
  }
}

function CardDetails() {
  return (
    <>
      <div><Home/></div>
      <h1 className="header">Credit Card Number Validation</h1>
      <div className="cc-form">
        <CreditCardForm />
      </div>
      <footer>
          Credit card icons by <a href="https://icons8.com/">Icons8</a>
      </footer>
    </>
  );
}

export default CardDetails;