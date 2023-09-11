import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from "../../redux/actions";
import Activity from "../Activity/Activity";
import styles from "./Activities.module.css";
import Nav from "../Nav/Nav";


const Activities = () => {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const [selectedActivity, setSelectedActivity] = useState('');

    useEffect(() => {
        dispatch(getActivities(selectedActivity))
    }, [dispatch, selectedActivity]);

    const uniqueActivityNames = Array.from(
        new Set(activities.map((activity) => activity.name))
    );

    return (
        <>
        <select
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}>
        <option value="">Todas las actividades</option>
        {uniqueActivityNames.map((name) => (
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