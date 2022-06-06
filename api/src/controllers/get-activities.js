const {Activity} = require("../db");

const getActivities = async (req,res)=>{
    let actividadesCreadas = await Activity.findAll({})
    res.json(actividadesCreadas)
    }


module.exports = getActivities;