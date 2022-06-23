import * as XLSX from 'xlsx';
import React, { useState } from 'react';


function convertToArray(str, delimiter = ",") {
    const rows = str.split(/\r\n|\n/);
    const head = rows[0]?.split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const headers = head.slice(0, head?.length - 4);
    const row_list = rows?.slice(1, rows?.length);

    // const arr = row_list?.map((row) => {
    //     const values = row.split(delimiter);
    //     return values;
    //     return headers.reduce((object, header, index) => {
    //         debugger;
    //         object[header] = values[index];
    //         return object;
    //     }, {});
    // },[]);

    const arr = row_list?.reduce((ret_arr, row) => {
        const values = row.split(delimiter);
        const count = values?.reduce((ret_count, ele) => {
            if (ele === "") {
                ret_count = ret_count + 1;
            }

            return ret_count;
        }, 0)

        if (count !== values?.length) {
            const final_values = values.slice(0, (values?.length - 4));
            ret_arr.push(final_values);
        }
        return ret_arr;
    }, []);

    return [arr, headers];
}


export default function FileUploadToFormData() {

    const [fileData, setFile] = useState(new FormData());
    const [fileDataBinary, setfileDataBinary] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file)
    }

    const UploadNow = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <input type="file" onChange={(e) => handleChange(e)} />
            <button onClick={(e)=> UploadNow(e)}>upload</button>
        </>
    );
} 