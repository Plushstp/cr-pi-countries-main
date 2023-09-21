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
  
  const [errors, setErrors]= useState({});

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
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
    setInput({
      ...input,
      [event.target.name] : event.target.value
    });
  }

  const handlerSelectChange = (event) => { // para la opcion de multiples paises
    if (event.target.value === "") {
      setErrors({
        ...errors,
        countryId: "Debes elegir un país",
      });
      return;
    }
    setErrors({
      ...errors,
      countryId: "",
    });
    const countryExists = input.countryId.find(
      (item) => item === event.target.innerText
    );
    if (!countryExists) {
      setInput({
        ...input,
        countryId :[...input.countryId, event.target.value],
      });
    }
  }

  const handleActivitySelect = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault()
    if (input.name === "" ||
      input.duration === "" ||
      input.difficulty === "" ||
      input.season === "" ||
      input.countryId.length === 0) return alert("Debe completar todos los campos");
      dispatch(postActivity(input))
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: []
      })
      alert("Actividad creada correctamente")
      navigate("/home")
  }
  
  return (
    <div className={styles.formContainer}>
      <Nav />
      <div className={styles.title}>Crear Actividad de Turismo para Paises</div>
      <button className={styles.buttonForm} onClick={() => navigate("/home")}>Go back</button>
      <div className={styles.formContent}>
        <div className={styles.formContainer}>
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Nombre de Actividad: </label>
            <select name="select" onChange={(e) => handleActivitySelect(e)}>
            <option value="Select Activity Name">Tourist Activity</option>
            <option value="Adventure Turism">Turism</option>
            <option value="Art gallery tours">Art gallery tours</option>
            <option value="Basketball">Basketball</option>
            <option value="Boxing">Boxing</option>
            <option value="City walking tours">City walking tours</option>
            <option value="Climbing">Climbing</option>
            <option value="Cricket">Cricket</option>
            <option value="Cycling tours">Cycling tours</option>
            <option value="Farm visits ">Farm visits</option>
            <option value="Fishing">Fishing</option>
            <option value="Football">American Football</option>
            <option value="Music festivals">Music festivals</option>
            <option value="Museum visits">Museum visits</option>
            <option value="Ping Pong">Ping Pong</option>
            <option value="Racing">Racing</option>
            <option value="Rugby">Rugby</option>
            <option value="Snowboard">Snowboard</option>
            <option value="Soccer">Soccer</option>
            <option value="Swimming">Swimming</option>
            <option value="Tennis">Tennis</option>
            <option value="Volley">Volley</option>
            <option value="Waterpolo">Waterpolo</option>
            </select>

            {errors.name && (
              <p className={styles.p}>{errors.name}</p>
            )}
            
            <label htmlFor='difficulty'>Dificultad: </label>
              <select onChange={handlerInputChange} name='difficulty'>
                <option value={input.difficulty}>Seleccionar Dificultad</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select> 
            <p className={styles.p}>{errors.difficulty}</p>

            <label htmlFor='duration'>Duración en hs.: </label>
            <select onChange={handlerInputChange} name='duration'>
                <option value={input.duration}>Seleccionar Duración en hs</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
               </select> 
            <p className={styles.p}>{errors.duration}</p>

            <label htmlFor='season'>Estaciones del año: </label>
              <select onChange={handlerInputChange} name='season'>
                  <option value={input.season}>Seleccionar estación</option>
                  <option value='Spring'>Primavera</option>
                  <option value='Summer'>Verano</option>
                  <option value='Autumn'>Otoño</option>
                  <option value='Winter'>Invierno</option>
              </select>
            <p className={styles.p}>{errors.season}</p>

            <label htmlFor='countries'>Paises:</label>
                <select onChange={handlerSelectChange} name='countries'>                
                    <option value=''>Seleccionar Paises</option>
                    {countries && 
                      countries.map((country) => { 
                        return (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                          );
                        })
                    }
                </select>
                <input
                  name='countries'
                  type='text'
                  value={input.countryId}
                  onChange={handlerInputChange}
                  placeholder='Seleccione al menos un país'

                />
                {errors.countryId && (
                  <p className={styles.p}>{errors.countryId}</p>
                )}
                
                <button className={styles.createButton} type='submit'>Crear Actividad</button>
          </form>
        </div>
      </div>
    </div>
  );
};

/*
<input
name='name'
placeholder='Nombre hasta 30 caracteres...'
type='text'
value={input.name}
onChange={handlerInputChange}
/>
*/