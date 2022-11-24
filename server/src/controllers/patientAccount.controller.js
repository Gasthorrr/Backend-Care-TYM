const getConnection = require("./../database");

function getAge(date){
    const today = new Date();
    const birth = new Date(date);
    const age = today.getFullYear() - birth.getFullYear();
    return age;
}

function temporalPass(){
    let password = '';
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for(i=1;i<=8;i++){
        const char = Math.floor(Math.random() * str.length + 1);
        password = password + str.charAt(char);
    }
    return password;
}

const createAccount = async(req,res) => {
    try{
        const rut = req.body.rut;
        const full_name = req.body.full_name;
        const date_of_birth = req.body.date_of_birth;
        const phone = req.body.phone;
        const gender = req.body.gender;
        const address = req.body.address;
        const email = req.body.email;
        const health_coverage = req.body.health_coverage;
        const state = 'sin verificar';
        const age = getAge(date_of_birth);
        const password = await temporalPass();

        if(rut === undefined || full_name === undefined || date_of_birth === undefined || phone === undefined || gender === undefined || address === undefined || email === undefined || health_coverage === undefined){
            return res.status(400).json({message: "Bad Request. Please fill all field"});
        }
        const client = await getConnection.client;
        await client.query(`INSERT INTO "patient" ("rut", "full_name", "password", "phone", "age", "gender", "address", "email", "health_coverage", "date_of_birth", "state") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [rut, full_name, password, phone, age, gender, address, email, health_coverage, date_of_birth, state]);
        res.status(200).json({ message: "Patient added" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

module.exports = {
    createAccount
};