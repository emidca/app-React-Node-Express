const { Router } = require('express');
//Importar todos los routers;
const countrieRoute = require("./countries")
const activityRoute = require("./activity")
const router = Router();

//Configurar los routers

router.use("/countries", countrieRoute);
router.use("/activity", activityRoute);

//router.use("/countries", RouteGetCountrie)

module.exports = router;
