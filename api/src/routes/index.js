const { Router } = require('express');
//Importar todos los routers;
const countriesRoute = require("./countries")
const postActivity = require("./activity")
const router = Router();

//Configurar los routers

router.use("/countries", countriesRoute);
router.use("/activity", postActivity);

//router.use("/countries", RouteGetCountrie)

module.exports = router;
