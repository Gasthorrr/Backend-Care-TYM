const getConnection = require("../database");

const getAdmin = async(req,res) =>{
    try{
        const { password } = req.params;
        const client = await getConnection.client;
        const query = await client.query(`select * from administrador where password='${password}'`);
        const result = query['rows']
        res.status(200).json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
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
        const { password, contraseña } = req.body;

        if(password === undefined || contraseña === undefined){
            res.status(400).json({message: "Bad Request. Please fill all field"});
        }

        const client = await getConnection.client;
        await client.query(
            `INSERT INTO "administrador" ("password", "contraseña") 
            VALUES ($1, $2)`, [password, contraseña]);
        res.json({ message: "Admin added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const deleteAdmin = async(req,res) =>{
    try{
        const {password} = req.params;
        const client = await getConnection.client;
        const query = await client.query(`delete from administrador where password='${password}'`);
        query['rows']
        res.status(200).json("Admin deleted sucsesfully");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const updateAdmin = async(req,res) =>{
    try{
        const password = req.params.password;
        const user = req.body.password;
        const contraseña = req.body.contraseña;

        const databaseAccess = await getConnection.client;

        if(password !== undefined ){
            const query = await databaseAccess.query(`update administrador set password='${user}' where password='${password}'`);
            query['rows'];
        }
        
        if(contraseña !== undefined ){
            const query = await databaseAccess.query(`update administrador set contraseña='${contraseña}' where password='${password}'`);
            query['rows'];
        }

        
        res.status(200).json("Admin updated sucsesfully");

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