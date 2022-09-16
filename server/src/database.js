const { Pool } = require('pg');


const databaseAccess = {
    user: 'uigysrsnpfzkby',
    host: 'ec2-34-199-68-114.compute-1.amazonaws.com',
    database: 'dbjf2prr1hel5n',
    password: 'ece9261a9f695a3f20b1d6577af4a2dc0c234b5301bfaae4fd6c054e294be9d6',
    port: 5432,
};

const client = new Pool(databaseAccess);

const testDBAccess = async ()=>{ 
    const query= await client.query(`select  * from cadena_medica `);
    console.log(query);
    return(query.rows);
}

const testModule= async ()=>{  
    const a=await ("xd");
    return(a);
}

module.exports = {
    /// las funciones que se veran al exportar el modulo
    testDBAccess,
    testModule
}