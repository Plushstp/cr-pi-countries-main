import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllCountries,
    getActivities,
    filterByContinent,
    sortByName,
    sortByPopulation,
    filterByActivity
} from "../../redux/actions";
import Card from "../Card/Card";
import styles from "../Home/Home.module.css";
import Filters from "../Filters/Filters";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const dataCountries = useSelector(state=>state.allCountries)
  const allactivities = useSelector(state=>state.activities);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  
  const cardsForPage = 10 // para renderizar solo 10 tarjetas de paises por pag.
  const [currentPage, setCurrentPage] = useState({
    initialIndex:0,
    finalIndex:cardsForPage
  })

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivities())
  }, [])

  const currentCards=dataCountries.slice(currentPage.initialIndex,currentPage.finalIndex) // tendremos un slice del array original q llega por props
        
  const countries = dataCountries.length>10 ?  // por si menos de diez paises
    currentCards :
    dataCountries
  
  const hanldeButtonBack =()=>{
    setCurrentPage({
        initialIndex:currentPage.initialIndex - 10,
        finalIndex:currentPage.finalIndex - 10
    })
  }

  const handleButtonNext =()=>{
    setCurrentPage({
        initialIndex:currentPage.initialIndex + 10,
        finalIndex:currentPage.finalIndex + 10
    })
  }

  const handleSortByName = (name) => {
    const selectedOption = name.target.value
    setSelectedSort(selectedSort)
    if (selectedOption === "Quitar") {
      dispatch(getAllCountries())
    }
    if (selectedOption === "ascendent" || selectedOption === "descendent") {
      dispatch(sortByName(selectedOption))
    }
  }

  const handleSortByPopulation = (popul) => {
    const selectedOption = popul.target.value
    setSelectedSort(selectedSort)
    if (selectedOption === "Quitar") {
      dispatch(getAllCountries())
    }
    if (selectedOption === "ascendent" || selectedOption === "descendent") {
      dispatch(sortByPopulation(selectedOption))
    }
  }

    const handleFilterContinent = (cont) => {
        const selectedOption = cont.target.value
        setSelectedOption(selectedOption)
        if (selectedOption === "Todos") {
          dispatch(getAllCountries())
        } else if (selectedOption === "North America") {
            dispatch(filterByContinent("North America"))
        } else if (selectedOption === "South America") {
          dispatch(filterByContinent("South America"))
        } else if (selectedOption === "Europe") {
            dispatch(filterByContinent("Europe"))
        } else if (selectedOption === "Asia") {
            dispatch(filterByContinent("Asia"))
        } else if (selectedOption === "Africa") {
            dispatch(filterByContinent("Africa"))
        } else if (selectedOption === "Oceania") {
            dispatch(filterByContinent("Oceania"))
        } else if (selectedOption === "Antarctica") {
          dispatch(filterByContinent("Antarctica"))
        }
    }

    const handleFilterByActivity = (act) => {
        const selectedOption = act.target.value
        setSelectedOption(selectedOption)
        if (selectedOption === "Quitar") {
          dispatch(getAllCountries())
        }
        dispatch(filterByActivity(selectedOption))
    }

    return (
      <div className={styles.container}>
        <Nav />
        <div className={styles.mainContent}>
        <SearchBar/>
            <Filters
              selectedOption={selectedOption}
              handleSortByName={handleSortByName}
              handleSortByPopulation={handleSortByPopulation}
              handleFilterContinent={handleFilterContinent}
              handleFilterByActivity={handleFilterByActivity}
            />
            <div className={styles.cardGrid}>
                  {
                  countries.length>0 ? (countries.map((country) =>
                    
                      <Card
                        id={country.id}
                        name={country.name}
                        flag={country.flag}
                        continent={country.continent}
                        key={country.id}

                      />)) : <p>Loading...</p>
                    
                  }
            </div>
            <div className={styles.backnextButton}>
                <button onClick={hanldeButtonBack} disabled={currentPage.initialIndex === 0}>Back</button>
                <button onClick={handleButtonNext} disabled={currentPage.finalIndex >= dataCountries.length}>Next</button>
            </div>
        </div>
      </div>
    )
};

/*No van
                        capital={country.capital}
                        subregion={country.subregion}
                        area={country.area}
                        population={country.population}*/