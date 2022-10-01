const getConnection = require("./../database");

const getMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from centro_medico where id=`+ id);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const getMedicCenters = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from centro_medico`);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addMedicCenter = async(req,res) =>{
    try{
        const { id_cadena_medica, nombre, contraseña, direccion, ciudad } = req.body;

        if(id_cadena_medica === undefined || nombre === undefined || contraseña === undefined || direccion === undefined || ciudad === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "centro_medico" ("id_cadena_medica", "nombre", "contraseña", "direccion", "ciudad") 
            VALUES ($1, $2, $3, $4, $5)`, [id_cadena_medica, nombre, contraseña, direccion, ciudad]);
        res.json({ message: "Center added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from centro_medico where id=`+ id);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicCenter = async(req,res) =>{
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
    getMedicCenter,
    getMedicCenters,
    addMedicCenter,
    deleteMedicCenter,
    updateMedicCenter
};

module.exports = methods;