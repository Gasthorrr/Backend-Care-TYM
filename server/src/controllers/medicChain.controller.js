const getConnection = require("./../database");

const getMedicChain = async(req,res) =>{
    
    try{
        const {nombre} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from cadena_medica where nombre='${nombre}'`);
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
        const { nombre, contraseña } = req.body;

        if(nombre === undefined || contraseña === undefined){
            return res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "cadena_medica" ("nombre", "contraseña") 
            VALUES ($1, $2)`, [nombre, contraseña]);
        res.status(200).json({ message: "Chain added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteMedicChain = async(req,res) =>{
    try{
        const name = req.params.name;
        const client = await getConnection.client;
        const query = await client.query(`delete from cadena_medica where nombre='${name}'`);
        const result = query['rows']
        res.status(200).json("The "+name+" medic chain was deleted succsesfuly");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateMedicChain = async(req,res) =>{
    try{
        const id=req.body.id;
        const name=req.body.name;
        const password=req.body.password;
        if(name === undefined && password === undefined){
           return res.status(400).json({message: "Bad Request. Please fill any field"});
        }

        
        const databaseAccess = await getConnection.client;
        if(name !== undefined ){
            ///change name
            const queryName = await databaseAccess.query(`update cadena_medica set nombre='${name}' where id=${id}`);
        }

        if(password !== undefined ){
            const queryPassword = await databaseAccess.query(`update cadena_medica set contraseña='${password}' where id=${id}`);
        }

        
        //// validate query (database UNIQUE restriction)
        //const result = query['rows'];

        ///
        
        res.status(200).json("Medic chain updated sucsesfully");

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