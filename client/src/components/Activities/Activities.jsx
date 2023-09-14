import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getActivities } from "../../redux/actions";
import Activity from "../Activity/Activity";
import styles from "./Activities.module.css";
import Nav from "../Nav/Nav";


const Activities = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activities = useSelector((state) => state.activities);
    const [selectedActivity, setSelectedActivity] = useState('');

    useEffect(() => {
        dispatch(getActivities(selectedActivity))
    }, [dispatch, selectedActivity]);

    const selActivity = Array.from(
        new Set(activities.map((activity) => activity.name))
    );

    return (
        <>
        <div className={styles.title}>Actividades Turísticas Creadas</div>
        <select
            value={selActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}>
        <option value="">Seleccionar actividad</option>
        {selActivity.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
        </select>
        <div className={styles.container}>

        <Nav />
        <button className={styles.goBackButton} onClick={() => navigate(-1)}>Go Back</button>
            <div className={styles.mainContent}>
            
                <div className={styles.cardGrid}>

                    {
                    activities.filter((activity) =>{
                        return selectedActivity ? activity.name === selectedActivity : true;
                    }).map((activity) => (
                        <Activity
                            key={activity.id}
                            name={activity.name}
                            difficulty={activity.difficulty}
                            duration={activity.duration}
                            season={activity.season}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Activities;