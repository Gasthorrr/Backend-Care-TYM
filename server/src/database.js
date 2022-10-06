const { Pool } = require('pg');


const databaseAccess = {
    database: 'railway',
    host: 'containers-us-west-60.railway.app',
    password: 'ItZGES5HKkPtd5VjCNpZ',
    port: 6535,
    user: 'postgres',
};//reemplazar por .env

const client = new Pool(databaseAccess);


const getUseruserType = async (key)=>{ 
    //// Searches the user into the admin table
    const adminQuery= await client.query(`select * from administrador where usuario='${key}'`);
    if(adminQuery.rowCount!=0){
        return "administrador";
    }
    //// Searches the user into the medic chain table
    const medicChainQuery= await client.query(`select * from cadena_medica where nombre='${key}'`);
    if(medicChainQuery.rowCount!=0){
        return "cadena_medica";
    }
    //// Searches the user into the medic center table
    const medicCenterQuery= await client.query(`select * from centro_medico where nombre='${key}'`);
    if(medicCenterQuery.rowCount!=0){
        return "centro_medico";
    }
    //// Searches the user into the coordinator/secretary table
    const coordinatorQuery= await client.query(`select * from coordinador where rut='${key}'`);
    if(coordinatorQuery.rowCount!=0){
        return "coordinador";
    }
    //// Searches the user into the medic table
    const medicQuery= await client.query(`select * from medico where rut='${key}'`);
    if(medicQuery.rowCount!=0){
        return "medico";
    }
    //// Searches the user into the patient table
    const patientQuery= await client.query(`select * from paciente where rut='${key}'`);
    if(patientQuery.rowCount!=0){
        return "paciente";
    }

    return "Not Found";

};

const login = async (key,password)=>{ 
    const PrimaryKeyDicctionary={
        "administrador":"usuario",
        "cadena_medica":"nombre",
        "centro_medico":"nombre",
        "coordinador" : "rut",
        "medico" : "rut", 
        "paciente" : "rut" 
    };
    const userType=await getUseruserType(key);
    if(userType=="Not Found"){
        return "Not Found";
    }
    else{
        const primaryKey = PrimaryKeyDicctionary [userType];
        queryValidarContraseña = await client.query(`select * from ${userType} where (${primaryKey}='${key}' and contraseña='${password}')`);
        if(queryValidarContraseña.rowCount==1){
            console.log(queryValidarContraseña['rows'])
            return({rol : userType,
                id: queryValidarContraseña['rows'][0].id
            });
        }
        return "Incorrect Password";    
    }

};

module.exports = {
    /// las funciones que se veran al exportar el modulo
    client,
    getUseruserType,
    login
}
