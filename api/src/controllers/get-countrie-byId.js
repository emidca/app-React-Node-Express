const { Op } = require("sequelize");
const {Country, Activity} = require("../db");

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

module.exports = getCountryId;