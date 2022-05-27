const { Op } = require("sequelize");
const {Country, Activity} = require("../db");


const getAllCountries = async (req, res)=>{
  try {
      const {name} = req.query;
      if(name){
          const findCountrie = await Country.findOne({
              where: {name: {[Op.iLike]: `%${name}%`}},
              include: [{
                  model: Activity,
                  attributes: ["name"], 
                  through: {
                  attributes: [],
              },
              }]
        })
          res.json(findCountrie)
      } else {
          const findAllCountries = await Country.findAll({
              include:{ model: Activity}
          })
        res.json(findAllCountries)
     }
      
  } catch (error) {
      res.status(404).send(error)
  }
};




module.exports = getAllCountries;