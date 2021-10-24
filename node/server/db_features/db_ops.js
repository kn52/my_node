var dbconn = require('./db_conn.js');
const genericresponse = require('./genericresponse.js');

module.exports = dbOps = async (sql,callback) => {
    await dbconn.query(sql,(err,res) => {
        if(err)
            callback(genericresponse("285", err.sqlMessage, []));
        callback(genericresponse("200", "success", res));
    });
};