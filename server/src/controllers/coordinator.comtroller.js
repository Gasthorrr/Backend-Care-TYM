const getConnection = require("./../database");

const getCoordinator = async(req,res) =>{
    try{
        const {rut} = req.params;
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
        const { rut, id_centro_medico, nombre_completo, contraseña } = req.body;

        if(rut === undefined || id_centro_medico === undefined || nombre_completo === undefined || contraseña === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(`INSERT INTO "coordinador" ("rut", "id_centro_medico", "nombre_completo", "contraseña") 
        VALUES ($1, $2, $3, $4)`, [rut, id_centro_medico, nombre_completo, contraseña]);
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
        const query = await client.query(`delete from coordinador where rut='${rut}'`);
        query['rows']
        res.status(200).json("Coordinator deleted");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateCoordinator = async(req,res) =>{
    try{
        const rut = req.body.rut;
        const id_centro_medico = req.body.id_centro_medico;
        const nombre_completo = req.body.nombre_completo;
        const contraseña = req.body.contraseña;

        const databaseAccess = await getConnection.client;

        if(id_centro_medico !== undefined ){
            await databaseAccess.query(`update coordinador set id_centro_medico='${id_centro_medico}' where rut='${rut}'`);
        }

        if(nombre_completo !== undefined ){
            await databaseAccess.query(`update coordinador set nombre_completo='${nombre_completo}' where rut='${rut}'`);
        }
        
        if(contraseña !== undefined ){
            await databaseAccess.query(`update coordinador set contraseña='${contraseña}' where rut='${rut}'`);
        }
        
        res.status(200).json("Coordinator updated sucsesfully");

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