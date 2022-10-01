const databaseAPI = require("./database");


(async () => {

    //console.log( await productosModel.testDBAccess());
    ///mostrar centros medicos
    console.log( await databaseAPI.getTipoDeUsuario("20.007.466-2"));

}
)()


