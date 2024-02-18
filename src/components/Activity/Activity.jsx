import React from 'react'
import { useState } from "react"
import styles from "../../styles/Activity.module.css"

import { addActions } from "../../redux/reducers/addActivityReducer"
import { useDispatch, useSelector } from 'react-redux'

export default function Activity(){
    const [activity, setActivity] = useState()
    const activities=useSelector((state)=> state.addActivityReducer.addActivity);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(activity)
        dispatch(addActions.add(activity))
        setActivity("")
    }
    // activities display the list of activities
    // console.log("activities", activities)

        
    return(
        <div className={styles.activityContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder= 'Add an activity...'
                />
                <button type="submit" className={styles.getStartedBtn}>Get Started</button>
            </form>
            <div>
                <h2>Your Activities:</h2>
                    <div className={styles.listGroup}>
                        {activities.map((addActivity, index) =>(
                            <div key={index} className={styles.listGroupItem}>
                            <p>{addActivity.text}</p>
                            <button className={styles.closeBtn}
                            onClick={()=>dispatch(addActions.delete(index))}>X</button>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}