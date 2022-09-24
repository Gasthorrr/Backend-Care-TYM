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

const mostrarCentrosMedicos = async ()=>{ 
    const query= await client.query(`select * from centro_medico `);
    const cantidadCentros=query.rowCount;
    const listaIds=new Array(cantidadCentros);
    const listaNombres=new Array(cantidadCentros);
    const listaDirecciones=new Array(cantidadCentros);
    const listaCiudades=new Array(cantidadCentros);
    for(var i=0;i<cantidadCentros;i++){
        listaIds[i]=await query.rows[i]['id'];
        listaNombres[i]=await query.rows[i]['nombre'];
        listaDirecciones[i]=await query.rows[i]['direccion'];
        listaCiudades[i]=await query.rows[i]['ciudad'];
    }
    ///return query;
    return([listaIds,listaNombres,listaDirecciones,listaCiudades]);
}



module.exports = {
    /// las funciones que se veran al exportar el modulo
    testDBAccess,
    mostrarCentrosMedicos
}