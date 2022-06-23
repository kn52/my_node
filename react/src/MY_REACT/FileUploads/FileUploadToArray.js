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


export default function FileUploadToArray() {

    const [fileData, setFile] = useState(new FormData());
    const [headersList, SetheadersList] = useState([]);
    const [fileDataList, SetfileDataList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file)
    }

    const UploadNow = (e) => {
        e.preventDefault();
        const csvFile = fileData;
        let list = [];
        let headers = [];
        const fileReader = new FileReader()
        fileReader.onload = async (e) => {
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            let ret_arr = convertToArray(data);

            list = ret_arr[0];
            headers = ret_arr[1];
            SetheadersList(headers)
            SetfileDataList(list);
        };
        fileReader.readAsBinaryString(csvFile)
    }

    return (
        <>
            <input type="file" onChange={(e) => handleChange(e)} />
            <button onClick={(e)=> UploadNow(e)}>upload</button>
        </>
    );
} 