import React, { useEffect, } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { cleanDetail, getDetail } from "../../redux/actions";
import styles from "../Detail/Detail.module.css";
import continents from "../../img/continents.jpg";
import Nav from "../Nav/Nav";
import Activity from '../Activity/Activity';


export default function Detail() {

  const countryDetail = useSelector((state)=>state.countriesDetail) //variable global
  const dispatch = useDispatch() // para accionar el getdetail, y el cleanDetail
  const {id:idDetail} = useParams() // traemos el id q nos viene por params en la URL
  
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getDetail(idDetail)) 
    return ()=>{
        dispatch(cleanDetail()) 
    }        
  },[idDetail])

  return (
    <div className={styles.containerDetail}>
      <img src={continents} className={styles.continents} />
      <Nav />
      <button className={styles.goBackButton} onClick={() => navigate(-1)}>Go Back</button>
      <div className={styles.content}>
          <div className={styles.detailTitle}>Nombre: {countryDetail.name}</div>
          <div className={styles.detailDesc}>Identificador: {countryDetail.id}</div>
          <div className={styles.detailDesc}>Continente: {countryDetail.continent}</div>
          <div className={styles.detailDesc}>Capital: {countryDetail.capital}</div>
          <div className={styles.detailDesc}>Subregion: {countryDetail.subregion}</div>
          <div className={styles.detailDesc}>Area: {countryDetail.area} metros cuadrados</div>
          <div className={styles.detailDesc}>Poblacion actual: {countryDetail.population} personas</div>
          <img className={styles.img} src={countryDetail.flag} alt=''></img>
      </div>
      <div className={styles.targetActivities}>
        <h1 className={styles.h1}>Actividades Turísticas</h1>
          <div className={styles.divTargets}>
            { //si existen actividades para ese país
              countryDetail.Activities && countryDetail.Activities.length>0 ? (                            
                countryDetail.Activities.map((elem)=>
                <Activity
                    key={elem.id}
                    name={elem.name}
                    difficulty={elem.difficulty}
                    duration={elem.duration}
                    season={elem.season}                            
                    Countries={[]}
                />)                      
              ):( // si no existen actividades
                <>
                  <h2>No hay actividades turísticas para este país.</h2>                            
                </>
              )
            }                
          </div>
      </div>

    </div>
  )
};