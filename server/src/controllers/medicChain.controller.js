const getConnection = require("./../database");

const getMedicChain = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from cadena_medica where id='${id}'`);
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
        res.status(200)
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
        res.status(200).json("Chain added successfully");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicChain = async(req,res) =>{
    try{
        const id = req.params.id;
        const client = await getConnection.client;
        const query = await client.query(`delete from cadena_medica where id='${id}'`);
        query['rows']
        res.status(200).json("Medic chain deleted successfully");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicChain = async(req,res) =>{
    try{
        const id = req.params.id;
        const nombre = req.body.nombre;
        const contraseña = req.body.contraseña;

        const databaseAccess = await getConnection.client;
        if(nombre !== undefined ){
            await databaseAccess.query(`update cadena_medica set nombre='${nombre}' where id='${id}'`);
        }

        if(contraseña !== undefined ){
            await databaseAccess.query(`update cadena_medica set contraseña='${contraseña}' where id='${id}'`);
        }

        
        //// validate query (database UNIQUE restriction)
        //const result = query['rows'];

        ///
        
        res.status(200).json("Medic chain updated successfully");

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