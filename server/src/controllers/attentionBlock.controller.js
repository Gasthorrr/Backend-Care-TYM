const { query } = require("express");
const { json } = require("sequelize");
const getConnection = require("./../database");

const validDaysDicctionary={
    "Lunes":1,
    "Martes":1,
    "Miercoles":1,
    "Jueves":1,
    "Viernes":1,
    "Sabado":1,
    "Domingo":1
};

const getBlocks = async(req,res) =>{
    try{
        const rut = req.user.key;
        const client = await getConnection.client;
        const query = await client.query(`select * from bloque_de_atencion where rut_medico =$1`,[rut]);
        const result = query['rows'];
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const addBlock = async(req,res) =>{
    try{
        const rut = req.user.key;
        const day=req.body.day;
        const startTime=req.body.startTime;
        const endTime=req.body.endTime;
        if(day.indexOf(validDaysDicctionary) === -1){
            return res.status(403).json({error:"Invalid day value"});
        }

        if(medic_center_id !== undefined ){
            await client.query(`update coordinador set id_centro_medico=$1 where rut=$2`,[medic_center_id,rut]);
        }
        console.log(rut+","+day+","+startTime+","+endTime);  /// startTime, endTime -> "hh:mm:ss"
        const client = await getConnection.client;
        await client.query(`insert into bloque_de_atencion(rut_medico,dia,hora_inicio,hora_fin) values($1,$2,$3,$4)`,[rut,day,startTime,endTime]);
        res.status(200).json({ message: "Attention Block added" });
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};


const updateBlock = async(req,res) =>{
    try{
        const rut = req.user.key;
        const id = req.body.blocK_id;
        const day=req.body.day;
        const startTime=req.body.startTime;
        const endTime=req.body.endTime;
        console.log(rut+","+id+","+day+","+startTime+","+endTime);
        const client = await getConnection.client;
        if(day !== undefined ){
            if(validDaysDicctionary[day]==undefined){
                return res.status(403).json({error:"Invalid day value"});
            }
            await client.query(`update bloque_de_atencion set dia=$1 where  (rut_medico=$2 and id=$3)`,[day,rut,id]);

        }
        if(startTime !== undefined ){
            await client.query(`update bloque_de_atencion set hora_inicio=$1 where  (rut_medico=$2' and id=$3)`,[startTime,rut,id]);
        }
        if(endTime !== undefined ){
            await client.query(`update bloque_de_atencion set hora_fin=$1 where  (rut_medico=$2 and id=$3)`,[endTime,rut,id]);
        }
        
        res.status(200).json({ message: "Attention Block updated" });

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};
const deleteBlock = async(req,res) =>{
    try{
        const rut = req.user.key;
        const id = req.body.blocK_id;
        const client = await getConnection.client;
        await client.query(`delete from bloque_de_atencion where (rut_medico=$1 and id=$2)`,[rut,id]);
        res.status(200).json({ message: "Attention Block deleted" });

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

const methods = {
    getBlocks, // all blocks of a medic (rut)
    addBlock,
    updateBlock,
    deleteBlock
};

module.exports = methods;