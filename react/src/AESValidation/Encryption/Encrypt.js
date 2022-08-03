import * as CryptoJS from 'crypto-js';

export const  Encrypt = (password) => CryptoJS.AES.encrypt(password, process.env.REACT_APP_SECRET_KEY).toString();
