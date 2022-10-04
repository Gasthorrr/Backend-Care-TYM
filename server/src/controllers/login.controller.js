const client = require('./../database');
const jwt = require('jsonwebtoken')
const login = async (key,password)=>{ 
    

};
const getLogin = async(req,res) =>{
    try{
        ////const result =  await client.login("20.007.466-1","qwerty");   /// test
        const key = req.body.key;
        const password = req.body.password;
        const result =  await client.login(key,password);
        if(result !== "Not Found" && result !== "Incorrect Password"){

            const token = jwt.sign({
                key : key,
                roles: result
            },"sdfghjklkjhg")//reemplazar por .env



            res.status(200).json(token);
        }else{
            res.status(400).json(result);
        }

        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

module.exports = {
    login,
    getLogin
}