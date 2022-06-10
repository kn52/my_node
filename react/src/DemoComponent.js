
import React from 'react';
import * as XLSX from 'xlsx';
import './DemoComponent.scss'

class DemoComponent extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            csvfile: new FormData(),
            csvfileList: []
        }
    }

    componentDidMount() {

      const from_Currency = "USD";
      const to_Currency = "INR";
      const amount = "1";
      const url_formed = `http://www.google.co.in/ig/calculator?hl=en&q=${amount}${from_Currency}%3D%3F${to_Currency}&key=AIzaSyDIETGixd8oOfXRAJdnO_IOlzRVWqqSYmw`;
      const url = `https://finance.google.com/finance/converter?a=${amount}&from=${from_Currency}&to=${to_Currency}&key=AIzaSyDIETGixd8oOfXRAJdnO_IOlzRVWqqSYmw`

      // fetch(url_formed)
      fetch("http://www.google.com/ig/calculator?hl=en&q=1USD=?INR")
        .then(res => {
          debugger;
          res.json()})
        .then(res => {
          debugger;
        })
    }

    
    exampleFile = async (e) => {
        let csvf = e.target.files[0];
        this.setState({ csvfile: csvf })
    }
  
    uploadexampleFile = async (e) => {
      e.preventDefault();
      const csvFile = this.state.csvfile;
      let list = [];
      const exampleFileReader = new FileReader()
      exampleFileReader.onload = async (e) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        list = this.convertToArray(data);

        this.setState({ csvfileList: list });
      };
      exampleFileReader.readAsBinaryString(csvFile)
    }

    convertToArray = (str,delimiter=",") => {
       const rows = str.split(/\r\n|\n/);
       const headers = rows[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

       const arr = rows?.map((row) => {
         debugger
            const values = row.split(delimiter);
            return headers.reduce((object, header, index) => {
              debugger
                object[header] = values[index];
                console.log("obj of array",object)
                return object;
            }, {});
        });

        return arr;
    }
    handleDiv = (e) => {
      debugger
      let ele = document.getElementById("onhover");
      if(ele){
        ele.classList.remove("on_hover")
        ele.style.position="absolute";
      }
    }
    
    render = () => {
      return (
      <div>
        <input type="file" onChange={(e) => this.exampleFile(e)} />
        <button onClick={(e) => this.uploadexampleFile(e)}>upload</button>
      </div>
      )
    }
  }

export default DemoComponent;