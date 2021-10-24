import {prefixes} from './Prefixes';
import {americanExpress,dankort,dinersClub,discover,instaPayment,jcb,maestro,masterCard,visa,rupay,unionPay} from '../../assets/images';

const CheckCardType = { 
    checkCardType, cardType 
}

function checkCardType(cardNumber){
    var creditCardType = require("credit-card-type");
    var cType = creditCardType(cardNumber);

    if(cType.length === 0){
        return "";
    }else{
        switch (cType[0].type) {
            case "american-express":
                return americanExpress;
            case "dankort":
                return dankort;
            case "diners-club":
                return dinersClub;
            case "discover":
                return discover;
            case "jcb":
                return jcb;
            case "maestro":
                return maestro;
            case "mastercard":
                return masterCard;
            case "visa":
                return visa;
            case "unionpay":
                return unionPay;
            case "instapay":
                return instaPayment;
            case "rupay":
                return rupay;
            default:
                return ""
        }
    }
}

function cardType(cardNumber){
    for (let key of prefixes) {
        for (let value of key[1]) {
            if (cardNumber.startsWith(value)) {
                return key[0];
            }
        }
    }
    return ""
}

export default CheckCardType;

// function checkCardType(number){
//     var regex = {
//         electron: /^(4026|417500|4405|4508|4844|4913)[0-9]+$/,
//         maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|6799|0604|6390)[0-9]{0,12}$/,
//         dankort: /^(5019)[0-9]+$/,
//         interpayment: /^(636)[0-9]+$/,
//         unionpay: /^(62|88)[0-9]+$/,
//         visa: /^4[0-9]{4,12}(?:[0-9]{3})?$/,
//         mastercard: /^5[1-5]{1}[0-9]{3}[0-9]{0,11}$/,
//         amex: /^3[47][0-9]{0,13}$/,
//         diners: /^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$/,
//         discover: /^6(?:011|5[0-9]{2})[0-9]{0,12}$/,
//         jcb: /^(3(?:088|096|112|158|337|5(?:2[89]|[3-8][0-9]))[0-9]{0,12})$/,
//         rupay: /^(60[0-9]{3,14})|(6521[0-9]{1,12})$/,
//         cup1: /^62[0-9]{0,14}$/,
//     }
    
//     let bool=false;
//     for(var key in regex) {
//         var reg = regex[key];
        
//         if(number.length>5){
//             bool=reg.test(number.substr(0,5));
//             if(bool === true) {
//                 return key;
//             }
//         }
//     }
//     if(bool === false && number.length>5){
//         return "Invalid Card"
//     }
//     return "";    
// }