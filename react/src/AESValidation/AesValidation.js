import Decrypt from '../Decryption/Decrypt';

function AesValidation(password){
    return password === Decrypt();
}

export default AesValidation;