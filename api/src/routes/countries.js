const router = require("express").Router()
const getAllCountries = require("../controllers/get-all-countries")
const getCountriesQuery = require("../controllers/get-countries-byQ")
const getCountryId = require("../controllers/get-countrie-byId")




router.get("/", getCountriesQuery)
router.get("/", getAllCountries)
router.get("/:id", getCountryId)



module.exports = router;


