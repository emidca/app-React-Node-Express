const axios = require("axios");
const {Country} = require("../db")

const ApiData = async () => {
    try {
        let apiUrl = await axios.get("https://restcountries.com/v3/all");
        let apiInfo = await apiUrl.data.map(c => {
            return {
                id: c.cca3,
                name: c.name.common,
                flags: c.flags[0],
                continents: c.region,
                capital: (c.capital === undefined || c.capital.lenght < 1) ? "undefined" : c.capital[0],
                subregion: (c.subregion === undefined || c.subregion.lenght < 1) ? "undefined" : c.subregion[0],
                area: c.area,
                population: c.population,
            }
        });
        await Country.bulkCreate(apiInfo); // Mete la info en la Base de datos
        console.log("Se cargaron los datos correctamente!")
        return apiInfo;
} catch (error) {
    console.log(error)
 };
}

module.exports = ApiData;
