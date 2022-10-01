const getConnection = require("./../database");

const getMedicChain = async(req,res) =>{
    try{
        const {nombre} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from cadena_medica where nombre='${nombre}'`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const getMedicChains = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from cadena_medica`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addMedicChain = async(req,res) =>{
    try{
        const { nombre, contraseña } = req.body;

        if(nombre === undefined || contraseña === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "cadena_medica" ("nombre", "contraseña") 
            VALUES ($1, $2)`, [nombre, contraseña]);
        res.json({ message: "Chain added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicChain = async(req,res) =>{
    try{
        const {nombre} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from cadena_medica where nombre='${nombre}'`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicChain = async(req,res) =>{
    try{
        const { id_cadena_medica, nombre, contraseña, direccion, ciudad } = req.body;
        const {id} = req.params;
        if(id === undefined || id_cadena_medica === undefined || nombre === undefined || contraseña === undefined || direccion === undefined || ciudad === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        const query = await client.query();
        const result = query['rows']
        res.json(result);

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const methods = {
    getMedicChains,
    getMedicChain,
    addMedicChain,
    deleteMedicChain,
    updateMedicChain,
};

module.exports = methods;