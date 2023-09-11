import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postActivity, getActivities, getAllCountries } from "../../redux/actions";
import styles from "../Form/Form.module.css";
import Nav from "../Nav/Nav";
import validate from "./validate";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.allCountries);
  countries.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt());
  const [errors,setErrors]= useState({});

  const [input, setInput]= useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: []
  });
  
  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllCountries())
  }, [dispatch])

  const handlerInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name] : event.target.value
  });
  setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      }));
  }

  const handlerSelectChange = (event) => { // para la opcion de multiples paises
    setInput({
      ...input,
      countryId :[...input.countryId,event.target.value]
  });
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (input.name === "" ||
      input.duration === "" ||
      input.difficulty === "" ||
      input.season === "" ||
      input.countryId.length === 0) return alert('Debe llenar los campos');
      dispatch(postActivity(input))
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: []
      })
      alert("Actividad creada")
      navigate("/home")
  }
  
  return (
    <div className={styles.formContainer}>
      <Nav />
      <h1 className={styles.h1}>Crear Actividad de Turismo para Paises</h1>
      <button className={styles.buttonForm} onClick={() => navigate("/home")}>Go back</button>
      <div className={styles.formContent}>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Nombre de Actividad: </label>
            <input
              name='name'
              placeholder='nombre actividad...'
              type='text'
              onChange={handlerInputChange}
            />
            <p>{errors.name}</p>
            <label htmlFor='difficulty'>Dificultad: </label>
            <input 
              name='difficulty' 
              placeholder='solo num. entre 1 y 5'
              type="number"
              onChange={handlerInputChange}
            />
            <p>{errors.difficulty}</p>
            <label htmlFor='duration'>Duración en hs.: </label>
            <input 
              name='duration' 
              placeholder='solo num. entre 1 y 24'
              type="number"
              onChange={handlerInputChange}
            />
            <p>{errors.duration}</p>
            <label htmlFor='season'>Estaciones: </label>
              <select onChange={handlerInputChange} name='season'>
                  <option value=''>Select season</option>
                  <option value='Spring'>Primavera</option>
                  <option value='Summer'>Verano</option>
                  <option value='Autumn'>Otoño</option>
                  <option value='Winter'>Invierno</option>
              </select>
            <p>{errors.season}</p>
            <label htmlFor='countries'>Paises:</label>
                <select
                    onChange={handlerSelectChange}
                    name='countries'>                
                    <option value=''>Seleccionar Paises</option>
                    {   //mapeamos el arreglo de paises para obtener el nombre en los select
                        countries.map((country) => <option key={country.id} value={country.id}>
                            {country.name}</option>
                        )
                    }
                </select>
                <p>{errors.countries}</p>
                <button className={styles.createButton} type='submit'>Crear Actividad</button>
          </form>
        </div>
      </div>
    </div>
  );
};