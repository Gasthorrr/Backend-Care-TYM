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

const getTipoDeUsuario = async (key)=>{ 
    //// buscar usuario como admin
    const queryAdmin= await client.query(`select * from administrador where usuario='${key}'`);
    if(queryAdmin.rowCount!=0){
        return "administrador";
    }
    //// buscar usuario como cadena medica
    const queryCadena= await client.query(`select * from cadena_medica where nombre='${key}'`);
    if(queryCadena.rowCount!=0){
        return "cadena_medica";
    }
    //// buscar usuario como centro medico
    const queryCentroMedico= await client.query(`select * from centro_medico where nombre='${key}'`);
    if(queryCentroMedico.rowCount!=0){
        return "centro medico";
    }
    //// buscar usuario como coordinador
    const queryCoordinador= await client.query(`select * from coordinador where rut='${key}'`);
    if(queryCoordinador.rowCount!=0){
        return "centro_medico";
    }
    //// buscar usuario como  medico
    const queryMedico= await client.query(`select * from medico where rut='${key}'`);
    if(queryMedico.rowCount!=0){
        return "medico";
    }
    //// buscar usuario como paciente 
    const queryPaciente= await client.query(`select * from paciente where rut='${key}'`);
    if(queryPaciente.rowCount!=0){
        return "paciente";
    }

    return "no encontrado";

};


module.exports = {
    /// las funciones que se veran al exportar el modulo
    client,
    testDBAccess,
    mostrarCentrosMedicos,
    getTipoDeUsuario
}
