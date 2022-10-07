const getConnection = require("./../database");

const getMedic = async(req,res) =>{
    try{
        const rut = req.params.rut;
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
        const rut = req.body.rut;
        const medic_center_id = req.body.id_centro_medico;
        const specialty_id = req.body.id_especialidad;
        const complete_name = req.body.nombre_completo; 
        const password = req.body.contraseña;
        const phone = req.body.telefono;
        const service_duration = req.body.duracion_atencion;
        const email = req.body.correo;

        if(rut === undefined || medic_center_id === undefined || specialty_id === undefined || complete_name === undefined || password === undefined || phone === undefined || service_duration === undefined || email == undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(`INSERT INTO "medico" ("rut", "id_centro_medico", "id_especialidad", "nombre_completo", "contraseña", "telefono", "duracion_atencion", "correo") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [rut, medic_center_id, specialty_id, complete_name, password, phone, service_duration, email]);
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
        await client.query(`delete from medico where rut='${rut}'`);
        res.status(200).json({ message: "Medic deleted" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedic = async(req,res) =>{
    try{
        const rut = req.params.rut;
        const medic_center_id = req.body.id_centro_medico;
        const complete_name = req.body.nombre_completo; 
        const password = req.body.contraseña;
        const phone = req.body.telefono;
        const service_duration = req.body.duracion_atencion;
        const email = req.body.correo;
        
        const databaseAccess = await getConnection.client;

        if(complete_name !== undefined ){
            await databaseAccess.query(`update medico set nombre_completo='${complete_name}' where rut='${rut}'`);
        }
        
        if(phone !== undefined ){
            await databaseAccess.query(`update medico set telefono='${phone}' where rut='${rut}'`);
        }

        if(password !== undefined ){
            await databaseAccess.query(`update medico set contraseña='${password}' where rut='${rut}'`);
        }

        if(medic_center_id !== undefined ){
            await databaseAccess.query(`update medico set id_centro_medico='${medic_center_id}' where rut='${rut}'`);
        }
        if(service_duration !== undefined ){
            await databaseAccess.query(`update medico set duracion_atencion='${service_duration}' where rut='${rut}'`);
        }
        if(email !== undefined){
            await databaseAccess.query(`update medico set correo='${email}' where rut='${rut}'`);
        }

        res.status(200).json({ message: "Medic updated sucsesfully" });

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