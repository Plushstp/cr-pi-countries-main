import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions"
import style from './SearchBar.module.css'


export default function SearchBar (){
    const dispatch = useDispatch();
    const [name, setName] = useState("");
       
    function handleInputChange (event){
        event.preventDefault();
        setName(event.target.value);
        
        console.log(name);
    };

    function handleSubmit (event){
        event.preventDefault();
        if (name.length === 0) return alert('Debe ingresar un País en el cuadro de búsqueda');
        dispatch(getCountryByName(name));
        setName('');
    }

    return(
        <div>
            <input className={style.inputSearch} type='text' value={name} placeholder="Nombre de país..." onChange={(event) => handleInputChange(event)} required/>

            <button className={style.buttonNav} type="submit" value="" onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>
    )
};