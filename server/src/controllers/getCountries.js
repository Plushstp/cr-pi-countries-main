const { Country } = require("../db");
const axios = require("axios");

const getCountries = async () => {
    const countriesInDB = await Country.findAll();
    if (countriesInDB.length > 0){
        return countriesInDB;
    } else {
        const getCountryAPI = await axios.get('http://localhost:5000/countries');
        const allDataCountry = getCountryAPI.data;
        const countryForDB = allDataCountry.map((elem) => {
            return {
                id: elem.cca3,
                name: elem.name.common,  
                flag: elem.flags.png,
                continent: elem.continents[0],
                capital: elem.capital ? elem.capital[0] : "El país no tiene capital",
                subregion: !elem.subregion ? "Antarctic" : elem.subregion,
                area: elem.area,
                population: elem.population,
            };
        });
        await Country.bulkCreate(countryForDB)
        .then(() => {
          console.log("Todos los países agregados a la base de datos");
        })
        .catch((error) => {
          console.error("Error en la carga de algun pais", error.message);
        });
    };       
    const newAllCountries = await Country.findAll();
    return newAllCountries;
};


module.exports = getCountries;