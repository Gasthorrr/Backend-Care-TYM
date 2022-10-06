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
        const rut = req.params.rut;
        const telefono = req.body.telefono;
        const contraseña=req.body.contraseña;
        const nombre_completo = req.body.nombre_completo;
        const id_centro_medico = req.body.id_centro_medico;
        const duracion_atencion = req.body.duracion_atencion;

        const databaseAccess = await getConnection.client;

        if(nombre_completo !== undefined ){
            await databaseAccess.query(`update medico set nombre_completo='${nombre_completo}' where rut='${rut}'`);
        }
        
        if(telefono !== undefined ){
            await databaseAccess.query(`update medico set telefono='${telefono}' where rut='${rut}'`);
        }

        if(contraseña !== undefined ){
            await databaseAccess.query(`update medico set contraseña='${contraseña}' where rut='${rut}'`);
        }

        if(id_centro_medico !== undefined ){
            await databaseAccess.query(`update medico set id_centro_medico='${id_centro_medico}' where rut='${rut}'`);
        }
        if(duracion_atencion !== undefined ){
            await databaseAccess.query(`update medico set duracion_atencion='${duracion_atencion}' where rut='${rut}'`);
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