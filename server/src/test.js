const databaseAPI = require("./database");


(async () => {

    //console.log( await productosModel.testDBAccess());
    ///mostrar centros medicos
    console.log( await databaseAPI.login("21.466.478-5 ","123pedro"));

}
)()


