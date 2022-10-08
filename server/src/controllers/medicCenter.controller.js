const getConnection = require("./../database");
const passwordManager = require("../passwordManager");

const getMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from centro_medico where id_cadena_medica='${id}'`);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const getMedicCenters = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from centro_medico where id_cadena_medica='${req.user.id}'`);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addMedicCenter = async(req,res) =>{
    try{
        const { nombre, contraseña, direccion, ciudad, correo } = req.body;

        if(nombre === undefined || contraseña === undefined || direccion === undefined || ciudad === undefined || correo === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }
        const id = req.user.id
        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "centro_medico" ("id_cadena_medica", "nombre", "contraseña", "direccion", "ciudad","correo") 
            VALUES ($1, $2, $3, $4, $5, $6)`, [id, nombre, await passwordManager.getEncriptedPassword(contraseña), direccion, ciudad, correo]);
        res.status(200).json("Center added successfully");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from centro_medico where id='${id}'`);
        const result = query['rows']
        res.status(200).json("Medic center deleted successfully")
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicCenter = async(req,res) =>{
    try{
        const id_cadena_medica = req.body.id_cadena_medica;
        const nombre = req.body.nombre;
        const contraseña = req.body.contraseña;
        const direccion = req.body.direccion;
        const ciudad = req.body.ciudad;

        const id = req.params.id;
        const client = await getConnection.client;
        if(id_cadena_medica !== undefined){
            await client.query(`update centro_medico set id_cadena_medica='${id_cadena_medica}' where id='${id}'`);
        }
        if(nombre !== undefined){
            await client.query(`update centro_medico set nombre='${nombre}' where id='${id}'`);
        }
        if(contraseña !== undefined){
            await client.query(`update centro_medico set contraseña='${await passwordManager.getEncriptedPassword(contraseña)}' where id='${id}'`);
        }
        if(direccion !== undefined){
            await client.query(`update centro_medico set direccion='${direccion}' where id='${id}'`);
        }
        if(ciudad !== undefined){
            await client.query(`update centro_medico set ciudad='${ciudad}' where id='${id}'`);
        }
        
        res.status(200).json("Medic center updated successfully");


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