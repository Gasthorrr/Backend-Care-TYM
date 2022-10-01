const client = require('./../database');

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
            return(userType);
        }
        return "Incorrect Password";    
    }

};

module.exports = {
    login,
}