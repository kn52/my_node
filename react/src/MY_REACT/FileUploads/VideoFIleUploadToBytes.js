import { useState } from "react";


export default function VideoFIleUploadToBytes () {

    const [fileByteArray,SetfileByteArray] = useState([]);
    var reader = new FileReader();
    const handleChange = (e) => {
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onloadend = (evt) => {
            if (evt.target.readyState === FileReader.DONE) {
                const arrayBuffer = evt.target.result,
                    array = new Uint8Array(arrayBuffer);
                for (const a of array) {
                    fileByteArray.push(a);
                }
                const str = fileByteArray?.toString();
                SetfileByteArray(fileByteArray);
                console.log(fileByteArray)
            }
        }
    }

    return (
        <input type="file" onChange={(e)=>handleChange(e)}/>
    );
}