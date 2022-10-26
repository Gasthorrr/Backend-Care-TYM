const getConnection = require("../database");
const passwordManager = require("../passwordManager");

const getCoordinator = async(req,res) =>{
    try{
        const {rut} = req.params.rut;
        const client = await getConnection.client;
        const query = await client.query(`select * from coordinador where rut='${rut}'`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const getCoordinators = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from coordinador`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addCoordinator = async(req,res) =>{
    try{
        const rut = req.body.rut;
        const medic_center_id = req.user.id;
        const complete_name = req.body.nombre_completo;
        const password = req.body.contraseña;
        const email = req.body.correo;

        if(rut === undefined || medic_center_id === undefined || complete_name === undefined || password === undefined || email == undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(`INSERT INTO "coordinador" ("rut", "id_centro_medico", "nombre_completo", "contraseña", "correo") 
        VALUES ($1, $2, $3, $4, $5)`, [rut, medic_center_id, complete_name,await passwordManager.getEncriptedPassword(password), email]);
        res.status(200).json({ message: "Coordinator added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteCoordinator = async(req,res) =>{
    try{
        const rut = req.params.rut;
        const client = await getConnection.client;
        await client.query(`delete from coordinador where rut='${rut}'`);
        res.status(200).json({ message: "Coordinator deleted" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateCoordinator = async(req,res) =>{
    try{
        const rut = req.params.rut;
        const medic_center_id = req.body.id_centro_medico;
        const complete_name = req.body.nombre_completo;
        const password = req.body.contraseña;
        const email = req.body.correo;

        const databaseAccess = await getConnection.client;
        if(medic_center_id !== undefined ){
            await databaseAccess.query(`update coordinador set id_centro_medico='${medic_center_id}' where rut='${rut}'`);
        }

        if(complete_name !== undefined ){
            await databaseAccess.query(`update coordinador set nombre_completo='${complete_name}' where rut='${rut}'`);
        }
        
        if(password !== undefined ){
            await databaseAccess.query(`update coordinador set contraseña='${await passwordManager.getEncriptedPassword(password)}' where rut='${rut}'`);
        }

        if(email !== undefined){
            await databaseAccess.query(`update coordinador set correo='${email}' where rut='${rut}'`);
        }
        
        res.status(200).json({ message: "Conrdinator updated" });

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const methods = {
    getCoordinator,
    getCoordinators,
    addCoordinator,
    deleteCoordinator,
    updateCoordinator,
};

module.exports = methods;