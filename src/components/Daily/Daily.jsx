import React from "react"
import styles from "../../styles/Daily.module.css"


export default function Daily(){
    return (
        <div className={styles.dailyContainer}>
            <h2>Daily Activities</h2>
            <div className={styles.activityList}>
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
                </div>
                <div className={styles.dailyActivity}>
                    <p className={styles.activityName}>Running</p>
                    <button className={styles.yesBtn}>Yes</button>
                    <button className={styles.noBtn}>No</button>
                    <button className={styles.blehBtn}>Bleh</button>
                </div>
            </div>
        </div>
    )
}