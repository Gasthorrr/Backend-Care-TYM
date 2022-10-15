const client  = require('./database').client;

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'][dayOfWeek];

  }

  function dateToString(date) {
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    return (year+"-"+month+"-"+day);

  }
  function isInside(hour,intervalStart,intervalEnd) {
    if((intervalStart<hour) & (hour<intervalEnd)){
        return true;
    }
    return false;
  }

const getAvailableaBlocks = async (date,rut)=>{

    //// convert date to day of week
    const day = getDayOfWeek(date);  
    console.log(date)  
    console.log(day)  
    
    //// get medic time per attention
    const medicQuery=await client.query(`select * from medico where rut='${rut}'`);
    const timePerAttention=medicQuery['rows'][0].duracion_atencion;
    console.log(timePerAttention+"min");  

    //// get attention blocks of the day
    const attetionBlocksQuery=await client.query(`Select * from bloque_de_atencion where (rut_medico ='${rut}'and dia='${day}') order by hora_inicio`);
    const blockList=new Array(attetionBlocksQuery.rowCount);
    for(var b=0; b<attetionBlocksQuery.rowCount; b++){
        const startOfTheBlock=await attetionBlocksQuery.rows[b]['hora_inicio'];
        const endOfTheBlock=await attetionBlocksQuery.rows[b]['hora_fin'];   
        blockList[b]=[startOfTheBlock,endOfTheBlock];    
    }  
    console.log(blockList); 

    //// get attention by date
    const attentionQuery=await client.query(`Select * from atencion where (rut_medico ='${rut}'and fecha='${date}') order by hora_inicio`);
    const attentionList=new Array(attentionQuery.rowCount);
    for(var a=0; a<attentionQuery.rowCount; a++){
        const startOfAttention=await attentionQuery.rows[a]['hora_inicio'];
        const endOfAttention=await attentionQuery.rows[a]['hora_finalizacion_estimada'];   
        attentionList[a]=[startOfAttention,endOfAttention]; 
          
    }  
    console.log(attentionList);

    ////
    

};



//// Test
(async () => {

    const query= await client.query('select * from atencion');
    const testDate= query['rows'][0].fecha;
    const aDate=new Date('15-10-22');
    getAvailableaBlocks(dateToString(testDate),'19.456.655-k');
    const testTime=query['rows'][0].hora_inicio;

}
)()






module.exports = {
    getAvailableaBlocks
}