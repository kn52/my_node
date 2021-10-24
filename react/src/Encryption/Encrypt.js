import * as CryptoJS from 'crypto-js';

function Encrypt(password){
    return CryptoJS.AES.encrypt(password, process.env.REACT_APP_SECRET_KEY.toString()).toString();
}

export default Encrypt;