import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, getAllCountries } from "../../redux/actions"
import style from './SearchBar.module.css'


export default function SearchBar (){
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const countries = useSelector((state) => state.allCountries);
       
    function handleInputChange (event){
        event.preventDefault();
        setSearch(event.target.value);
        
        console.log(search);
    };

    function handleSubmit (event){
        event.preventDefault();
        if (search.length === 0) return alert('Debe ingresar un País en el cuadro de búsqueda');
        const toSearch = search.toLowerCase();
        const validate = countries.filter((event) => 
            event.name.toLowerCase().includes(toSearch)
        );
        if (validate.length < 1) { 
         return alert('No existe pais con ese nombre');
        } else { 
        dispatch(getCountryByName(search))
        
        }
        setSearch('');
    }

    return(
        <div>
            <input className={style.inputSearch} 
            type='text' 
            value={search} 
            placeholder={"Ingresar nombre de país"}
            onChange={(event) => handleInputChange(event)} required/>

            <button className={style.buttonNav} type="submit" value="" onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>
    )
};