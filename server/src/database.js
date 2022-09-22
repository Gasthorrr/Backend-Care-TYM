const { Pool } = require('pg');


const databaseAccess = {
    database: 'railway',
    host: 'containers-us-west-60.railway.app',
    password: 'ItZGES5HKkPtd5VjCNpZ',
    port: 6535,
    user: 'postgres',
};

const client = new Pool(databaseAccess);

const testDBAccess = async ()=>{ 
    const query= await client.query(`select  * from cadena_medica where nombre='test'`);
    return(query.rows[0]);
}



module.exports = {
    /// las funciones que se veran al exportar el modulo
    testDBAccess,
}