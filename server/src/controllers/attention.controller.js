const schedule = require("../scheduleManager");

const getAvailableBlocks = async(req,res) =>{
    try{
        ///// date format "yyyy-mm-dd"
        const medicRut = req.body.rut;  
        const date = req.body.date;
        console.log("medicRut+","+date");
        console.log(medicRut+","+date);
        //// check if the date is valid
        const s=date+" "+"00:00:00";
        const validDate = new Date(s);

        const result= await schedule.getAvailableBlocks(medicRut,validDate);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    };
    
};

const methods = {
    getAvailableBlocks
};

module.exports = methods;