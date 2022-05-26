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

const getCountriesQuery =  async (req, res) => {
    try {
        const name = req.query.name;
        if(name){
        const country = await Country.findOne({
            where: {
                name:{[Op.iLike]: '%' + name + '%'}
            },
            include:{
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {attributes: []},
            },            
        })
            if (!country){
                res.status(404).json('Country not found')
            } else {
                res.json(country)
                console.log(country)
            }
        } else {
            const countries = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: [
                        'name',
                        'season',
                        'difficulty',
                        'duration',
                    ],
                    through: {attributes: []}
                }            
            })
            if(countries){
                res.json(countries)        
            } else{
                res.status(404).send("Country isn't found")
            }
        }
        } catch (error) {
            res.status(404).send(error)
    }
};

const getCountryId = async (req, res) => {
    const { id } = req.params;
    try {
        if(id){
        const country = await Country.findOne({
            where: {
                id: {[Op.iLike]: `%${id}%`}
            },
            include:{
                model: Activity,
                attributes: [
                    'name',
                    'season',
                    'difficulty',
                    'duration',
                ],
                through: {attributes: []}
            }
        })
        if (!country){
            return res.status(404).json('Country not found')
        } else{
            return res.json(country)
        }
    } else {
        return res.status(404).json('Country not found')
    }

    } catch (error) {
        res.status(404).send(error)
    }
};

module.exports = {getAllCountries, getCountriesQuery ,getCountryId}