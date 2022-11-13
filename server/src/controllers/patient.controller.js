const getConnection = require("./../database");

const getAccountState = async(req,res) =>{
    
    try{
        const rut = req.body.rut;
        const client = await getConnection.client;
        const query = await client.query(`select state from patient where rut=$1 `,[rut]);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};


const methods = {
    getAccountState
};

module.exports = methods;