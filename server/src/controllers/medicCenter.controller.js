const getConnection = require("./../database");

const getMedicCenter = async(req,res) =>{
    const client = await getConnection.client;
    const query = await client.query(`select * from centro_medico`);
    const result = query['rows']
    console.log(result);
    res.json(result);
};

const methods = {
    getMedicCenter
};

module.exports = methods;