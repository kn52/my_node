import * as CryptoJS from 'crypto-js';

export const  Decrypt = () => (CryptoJS.AES.decrypt(process.env.REACT_APP_SECRET_PASSWORD, process.env.REACT_APP_SECRET_KEY))?.toString(CryptoJS.enc.Utf8);