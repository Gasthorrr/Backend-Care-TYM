const getConnection = require("./../database");

const getMedicCenter = async(req,res) =>{
    try{
        const id = req.params.id;
        const client = await getConnection.client;
        const query = await client.query(`select * from centro_medico where id='${id}'`);
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
        const medic_chain_id = req.body.id_cadena_medica;
        const name = req.body.nombre;
        const password = req.body.contraseña;
        const address = req.body.direccion;
        const city = req.body.ciudad;
        const email = req.body.correo;

        if(medic_chain_id === undefined || name === undefined || password === undefined || address === undefined || city === undefined || email === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "centro_medico" ("id_cadena_medica", "nombre", "contraseña", "direccion", "ciudad", "correo") 
            VALUES ($1, $2, $3, $4, $5, $6)`, [medic_chain_id, name, password,address, city, email]);
        res.status(200).json({ message: "Medic center added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicCenter = async(req,res) =>{
    try{
        const id = req.params.id;
        const client = await getConnection.client;
        await client.query(`delete from centro_medico where id='${id}'`);
        res.status(200).json({ message: "Medic center deleted" })
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
            await client.query(`update centro_medico set id_cadena_medica='${medic_center_id}' where id='${id}'`);
        }
        if(name !== undefined){
            await client.query(`update centro_medico set nombre='${name}' where id='${id}'`);
        }
        if(password !== undefined){
            await client.query(`update centro_medico set contraseña='${password}' where id='${id}'`);
        }
        if(address !== undefined){
            await client.query(`update centro_medico set direccion='${address}' where id='${id}'`);
        }
        if(city !== undefined){
            await client.query(`update centro_medico set ciudad='${city}' where id='${id}'`);
        }
        if(email !== undefined){
            await client.query(`update centro_medico set correo='${email}' where id='${id}'`);
        }
        
        res.status(200).json({ message: "Medic center updated" });


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