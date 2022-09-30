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
/**
 * @returns {Array}  una lista con los centros medicos organizados por columnas[[ids],[Nombres],[Direcciones],[Ciudades]]
 */
const mostrarCentrosMedicos = async ()=>{ 
    const query= await client.query(`select * from centro_medico `);
    const cantidadCentros=query.rowCount;
    const ListaCentros=new Array(cantidadCentros);
    for(var i=0;i<cantidadCentros;i++){
        const id=await query.rows[i]['id'];
        const nombre=await query.rows[i]['nombre'];
        const direccion=await query.rows[i]['direccion'];
        const ciudad=await query.rows[i]['ciudad'];
        centro={"id":id,"nombre":nombre,"direccion":direccion,"ciudad":ciudad};
        ListaCentros[i]=centro;
    }
    ///return query;
    return(JSON.stringify(ListaCentros));
}



module.exports = {
    /// las funciones que se veran al exportar el modulo
    client,
    testDBAccess,
    mostrarCentrosMedicos
}
