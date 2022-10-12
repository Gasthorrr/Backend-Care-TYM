const getConnection = require("./../database");

const getBlocks = async(req,res) =>{
    try{
        const rut = req.user.key;
        console.log(rut);
        const client = await getConnection.client;
        const query = await client.query(`select * from bloque_de_atencion where rut_medico ='${rut}'`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const methods = {
    getBlocks, // all blocks of a medic (rut)
};

module.exports = methods;