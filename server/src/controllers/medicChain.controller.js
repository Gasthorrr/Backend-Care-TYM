const getConnection = require("./../database");
const passwordManager = require("../passwordManager");

const getMedicChain = async(req,res) =>{
    try{
        const id = req.params.id;
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
        const name = req.body.nombre;
        const password = req.body.contraseña;
        const email = req.body.correo;

        if(name === undefined || password === undefined || email === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "cadena_medica" ("nombre", "contraseña", "correo") 
            VALUES ($1, $2, $3)`, [name, await passwordManager.getEncriptedPassword(password), email]);
        res.status(200).json({ message: "Medic chain added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicChain = async(req,res) =>{
    try{
        const id = req.params.id;
        const client = await getConnection.client;
        await client.query(`delete from cadena_medica where id='${id}'`);
        res.status(200).json({message:"Medic chain deleted"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicChain = async(req,res) =>{
    try{
        const id = req.params.id;
        const name = req.body.nombre;
        const password = req.body.contraseña;
        const email = req.body.correo;

        const databaseAccess = await getConnection.client;
        if(name !== undefined ){
            await databaseAccess.query(`update cadena_medica set nombre='${name}' where id='${id}'`);
        }

        if(password !== undefined ){
            await databaseAccess.query(`update cadena_medica set contraseña='${await passwordManager.getEncriptedPassword(password)}' where id='${id}'`);
        }

        if(email !== undefined ){
            await databaseAccess.query(`update cadena_medica set correo='${email}' where id='${id}'`);
        }
        res.status(200).json({message:"Medic chain updated"});

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