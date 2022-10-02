const databaseAPI = require("./database");


(async () => {

    ///Show all medic centers
    //console.log( await databaseAPI.showMedicCenters());
    console.log( await databaseAPI.login("20.007.466-1","qwerty"));

}
)()


