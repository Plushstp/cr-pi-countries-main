const express = require("express"); 
const { conn } = require("../db");
const { Activity, Country } = conn.models; 

//POST Activities Funcionando OK

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