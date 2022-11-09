const getConnection = require("./../database");
const passwordManager = require("../passwordManager");

const getMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select id,id_cadena_medica,nombre,direccion,ciudad,correo from centro_medico where id=$1`,[id]);
        const result = query['rows'][0]
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const getMedicCenters = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select id,id_cadena_medica,nombre,direccion,ciudad,correo from centro_medico where id_cadena_medica=$1`,[req.user.id]);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addMedicCenter = async(req,res) =>{
    try{
        const name = req.body.nombre;
        const password = req.body.contraseña;
        const address = req.body.direccion;
        const city = req.body.ciudad;
        const email = req.body.correo;

        if(name === undefined || password === undefined || address === undefined || city === undefined || email === undefined){
            return res.status(400).json({message: "Bad Request. Please fill all field"});
        }
        const id = req.user.id
        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "centro_medico" ("id_cadena_medica", "nombre", "contraseña", "direccion", "ciudad", "correo") 
            VALUES ($1, $2, $3, $4, $5, $6)`, [id, name, await passwordManager.getEncriptedPassword(password),address, city, email]);
        res.status(200).json({ message: "Medic center added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicCenter = async(req,res) =>{
    try{
        const {id} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from centro_medico where id=$1`,[id]);
        res.status(200).json("Medic center deleted successfully")
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicCenter = async(req,res) =>{
    try{
        const id = req.params.id;
        const medic_center_id = req.body.id_cadena_medica;
        const name = req.body.nombre;
        const password = req.body.contraseña;
        const address = req.body.direccion;
        const city = req.body.ciudad;
        const email = req.body.correo;

        const client = await getConnection.client;
        if(medic_center_id !== undefined){
            await client.query(`update centro_medico set id_cadena_medica=$1 where id=$2`,[medic_center_id,id]);
        }
        if(name !== undefined){
            await client.query(`update centro_medico set nombre=$1 where id=$2`,[name,id]);
        }
        if(password !== undefined){
            await client.query(`update centro_medico set contraseña=$1 where id=$2`,[await passwordManager.getEncriptedPassword(password), id]);
        }
        if(address !== undefined){
            await client.query(`update centro_medico set direccion=$1 where id=$2`,[address,id]);
        }
        if(city !== undefined){
            await client.query(`update centro_medico set ciudad=$1 where id=$2`,[city,id]);
        }
        if(email !== undefined){
            await client.query(`update centro_medico set correo=$1 where id=$2`,[email,id]);
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