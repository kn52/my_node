var dbconn = require('./db_conn.js');

function insertintotable(){

}

function deletetable(){
    
}

function updatetable(){
    
}

async function fetchtable(sql,callback){
    await dbconn.query(sql,(err,res) => {
        if(err) throw err;
        callback(res);
    });
}

module.exports = {
    ins: insertintotable,
    del: deletetable,
    upt: updatetable,
    fet: fetchtable
};