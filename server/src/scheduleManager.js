const client  = require('./database').client;
const moment = require('moment');

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'][dayOfWeek];

  }

  function dateToStringDate(date) {
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    return (year+"-"+month+"-"+day);

  }


  function isInside(hour,intervalStart,intervalEnd) {
    if((intervalStart<=hour) & (hour<=intervalEnd)){
        return true;
    }
    return false;
  }

  function addMinutes(time,minutes){
    const s="2022-01-01"+" "+time;
    const oldDate = new Date(s);
    var newDate = moment(oldDate).add(minutes, 'm');
    result = newDate.format('HH:mm:ss');
    return result;

  }

const getAvailableaBlocks = async (date, rut) => {

  //// convert date to day of week
  const day = getDayOfWeek(date);
  console.log(date)
  console.log(day)

  //// get medic time per attention
  const medicQuery = await client.query(`select * from medico where rut=$1`, [rut]);
  const timePerAttention = medicQuery['rows'][0].duracion_atencion;
  console.log(timePerAttention + "min");

  //// get attention by date
  const attentionQuery = await client.query(`Select * from atencion where (rut_medico=$1 and fecha=$2) order by hora_inicio`, [rut, date]);
  const attentionList = new Array(attentionQuery.rowCount);
  var indexA = 0;
  for (var a = 0; a < attentionQuery.rowCount; a++) {
    const startOfAttention = await attentionQuery.rows[a]['hora_inicio'];
    const endOfAttention = await attentionQuery.rows[a]['hora_finalizacion_estimada'];
    attentionList[a] = [startOfAttention, endOfAttention];
  }
  console.log("Attention list:"+attentionList+"\n\n");

  var availableList = new Array();

  //// get attention blocks of the day
  const attetionBlocksQuery = await client.query(`Select * from bloque_de_atencion where (rut_medico =$1 and dia=$2) order by hora_inicio`, [rut, day]);
  const blockList = new Array(attetionBlocksQuery.rowCount);
  for (var b = 0; b < attetionBlocksQuery.rowCount; b++) {
    const startOfTheBlock = await attetionBlocksQuery.rows[b]['hora_inicio'];
    const endOfTheBlock = await attetionBlocksQuery.rows[b]['hora_fin'];
    var posibleAttentionStart = startOfTheBlock;
    blockList[b] = [startOfTheBlock, endOfTheBlock];
    console.log("Block: " + blockList[b]);
    /// create possible attention
    var posibleAttention = [posibleAttentionStart, addMinutes(posibleAttentionStart, timePerAttention)];
    while (isInside(posibleAttention[1], startOfTheBlock, endOfTheBlock)) {  /// while possible attention is inside the block
      //// check if it colides with another attention
      if (indexA < attentionList.length) { /// there is at least 1 attention left to compare
        const isStartInside=isInside(posibleAttention[0], attentionList[indexA][0], attentionList[indexA][1]);
        const isEndInside = isInside(posibleAttention[1], attentionList[indexA][0], attentionList[indexA][1]);
        if (isStartInside & isEndInside) { /// if possible attention collides with an attention
          console.log(posibleAttention + " colides with: " + attentionList[indexA]);
          /// try next possible attention (at the end of the collition)
          posibleAttentionStart = addMinutes(attentionList[indexA][1], 10);
          posibleAttention = [posibleAttentionStart, addMinutes(posibleAttentionStart, timePerAttention)];
          indexA++;
        }
        else { /// doesnt collide
          /// add it to the availableList
          availableList.push(posibleAttention);
          console.log(posibleAttention + " doesnt colide with: " + attentionList[indexA]);
          /// try next possible attention
          posibleAttentionStart = addMinutes(posibleAttentionStart, 10);
          posibleAttention = [posibleAttentionStart, addMinutes(posibleAttentionStart, timePerAttention)];
        }
      }
      else { /// no attentions left to compare every possible attention inside the block is valid
        /// add it to the possible attention list
        availableList.push(posibleAttention);
        console.log("possible attention: " + posibleAttention);
        /// try next possible attention
        posibleAttentionStart = addMinutes(posibleAttentionStart, 10);  
        posibleAttention = [posibleAttentionStart, addMinutes(posibleAttentionStart, timePerAttention)];
      }
    }
    console.log("//////////////////// end of the block //////////////////////////");

  }
  console.log("\n available:");
  console.log(availableList);








};



//// Test
(async () => {
    

    const query= await client.query('select * from atencion');
    const testDate= query['rows'][0].fecha;
    const s="2022-01-01"+" "+"09:00:00";
    var aDate=new Date(s);
    const testTime=query['rows'][0].hora_inicio;
    getAvailableaBlocks(dateToStringDate(testDate),'19.456.655-k');
    const x=addMinutes("14:00:00",10);
    ///console.log(x);
    

}
)()



module.exports = {
    getAvailableaBlocks
}