import * as CryptoJS from 'crypto-js';

function Decrypt(){
    var decryptPassword = CryptoJS.AES.decrypt(process.env.REACT_APP_SECRET_PASSWORD, process.env.REACT_APP_SECRET_KEY);
    return decryptPassword.toString(CryptoJS.enc.Utf8);
}


export default Decrypt;