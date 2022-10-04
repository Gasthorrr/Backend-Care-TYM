const getConnection = require("./../database");

const getMedic = async(req,res) =>{
    try{
        const {rut} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from medico where rut='${rut}'`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const getMedics = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from medico`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addMedic = async(req,res) =>{
    try{
        const { rut, id_centro_medico, id_especialidad, nombre_completo, contraseña, telefono, duracion_atencion } = req.body;

        if(rut === undefined || id_centro_medico === undefined || id_especialidad === undefined || nombre_completo === undefined || contraseña === undefined || telefono === undefined || duracion_atencion === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(`INSERT INTO "medico" ("rut", "id_centro_medico", "id_especialidad", "nombre_completo", "contraseña", "telefono", "duracion_atencion") 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, [rut, id_centro_medico, id_especialidad, nombre_completo, contraseña, telefono, duracion_atencion]);
        res.status(200).json({ message: "Medic added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedic = async(req,res) =>{
    try{
        const rut = req.params.rut;
        const client = await getConnection.client;
        const query = await client.query(`delete from medico where rut='${rut}'`);
        query['rows']
        res.status(200).json("Medic deleted");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedic = async(req,res) =>{
    try{
        const rut = req.body.id;
        const phone = req.body.telefono;
        const password=req.body.password;
        const name = req.body.name;

        const databaseAccess = await getConnection.client;

        if(name !== undefined ){
            await databaseAccess.query(`update medico set nombre_completo='${name}' where rut=${rut}`);
        }
        
        if(phone !== undefined ){
            await databaseAccess.query(`update medico set telefono='${phone}' where rut=${rut}`);
        }

        if(password !== undefined ){
            await databaseAccess.query(`update medico set contraseña='${password}' where id=${rut}`);
        }
        
        res.status(200).json("Medic updated sucsesfully");

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const methods = {
    getMedic,
    getMedics,
    addMedic,
    deleteMedic,
    updateMedic,
};

module.exports = methods;