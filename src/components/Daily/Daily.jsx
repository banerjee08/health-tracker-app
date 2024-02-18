import React from "react"
import { useState } from "react"
import styles from "../../styles/Daily.module.css"

import { addActions } from "../../redux/reducers/addActivityReducer"
import { useDispatch, useSelector } from 'react-redux'


export default function Daily(){
    const activities=useSelector((state)=> state.addActivityReducer.addActivity);
    const dispatch = useDispatch();

    console.log("activities", activities)
    return (
        <div className={styles.dailyContainer}>
            <h2>Daily Activities</h2>
            <div className={styles.activityList}>
                {activities.map((addActivity, index) =>(
                        //     <div className={styles.listGroupItem}>
                        //     <p>{addActivity.text}</p>
                        //     <button className={styles.closeBtn}
                        //     onClick={()=>dispatch(addActions.delete(index))}>X</button>
                        // </div>
                        <div key={index} className={styles.dailyActivity}>
                            <p className={styles.activityName}>{addActivity.text}</p>
                            <button className={styles.yesBtn}>Yes</button>
                            <button className={styles.noBtn}>No</button>
                            <button className={styles.blehBtn}>Bleh</button>
                        </div>
                ))}
                {/* <div className={styles.dailyActivity}>
                    <p className={styles.activityName}>Running</p>
                    <button className={styles.yesBtn}>Yes</button>
                    <button className={styles.noBtn}>No</button>
                    <button className={styles.blehBtn}>Bleh</button>
                </div>
                <div className={styles.dailyActivity}>
                    <p className={styles.activityName}>Running</p>
                    <button className={styles.yesBtn}>Yes</button>
                    <button className={styles.noBtn}>No</button>
                    <button className={styles.blehBtn}>Bleh</button>
                </div>
                <div className={styles.dailyActivity}>
                    <p className={styles.activityName}>Running</p>
                    <button className={styles.yesBtn}>Yes</button>
                    <button className={styles.noBtn}>No</button>
                    <button className={styles.blehBtn}>Bleh</button>
                </div> */}
            </div>
        </div>
    )
}