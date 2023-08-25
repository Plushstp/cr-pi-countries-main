const express = require("express"); //importamos el modulo express
const { conn } = require("../db");
const { Activity, Country } = conn.models; //instancia de conexion de sequelize

const postActivities = async ({
    name, 
    difficulty, 
    duration, 
    season, 
    countryId,
}) => {
    if (!name || !difficulty || !duration || !season || !countryId) throw Error("Faltan datos");

    const checkExistActivity = await Activity.findAll({
        where: {
            name: name.toUpperCase(),
        },
    });
    if (checkExistActivity.length>0) throw Error("Ya existe la actividad");

    //const countryIdUpperCase = countryId.toUpperCase();
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });
    if (countryId) await newActivity.addCountry(countryId);
    return newActivity;
};

module.exports = postActivities;