const { Op } = require("sequelize");
const {Country, Activity} = require("../db");


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
                res.send(country)
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

module.exports = getCountriesQuery;