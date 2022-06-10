const btn_ele = document.getElementById("btn");


btn_ele.click = () => {
    // alert("hi")
    displaytable(table_records);
}

function displaytable (data) {
    
    const it_data = data?.Students;
    const generated_table = it_data?.reduce((new_table,ele)=>{
        const ele_keys = Object.keys(ele);

        const new_row = ele_keys?.reduce((row,el)=>
        {
            let cell = document.createElement("td");
            cell.textContent = ele[el];
            cell.innerHTML = ele[el];
            cell.innerText = ele[el];
            row.appendChild(cell);
            return row;
        },document.createElement("tr"));

        new_table.appendChild(new_row);
        return new_table;
    },document.createElement("table")); 
    document.getElementById("t_table").appendChild(generated_table);
}


const table_records = {
    "Students": [
        {
            "firstName": "Ram",
            "lastName": "Sharma"
        },
        {
            "firstName": "Shyam",
            "lastName": "Sharma"
        }
    ]
}