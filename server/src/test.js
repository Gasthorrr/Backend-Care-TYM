const productosModel = require("./database");


(async () => {

    console.log( await productosModel.testDBAccess());

}
)()


