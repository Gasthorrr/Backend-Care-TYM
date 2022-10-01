const getConnection = require("./../database");

const getAdmin = async(req,res) =>{
    try{
        const {usuario} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from administrador where usuario=`+ usuario);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const getAdministrators = async(req,res) =>{
    try{
        const client = await getConnection.client;
        const query = await client.query(`select * from administrador`);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const addAdmin= async(req,res) =>{
    try{
        const { usuario, contraseña } = req.body;

        if(usuario === undefined || contraseña === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "administrador" ("usuario", "contraseña") 
            VALUES ($1, $2)`, [usuario, contraseña]);
        res.json({ message: "Admin added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteAdmin = async(req,res) =>{
    try{
        const {usuario} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from administrador where usuario=`+ usuario);
        const result = query['rows']
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateAdmin = async(req,res) =>{
    try{
        const { usuario, contraseña } = req.body;
        const {id} = req.params;
        if(usuario === undefined || contraseña === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        const query = await client.query();
        const result = query['rows']
        res.json(result);

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const methods = {
    getAdmin,
    getAdministrators,
    addAdmin,
    deleteAdmin,
    updateAdmin
};

module.exports = methods;