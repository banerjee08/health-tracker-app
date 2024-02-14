import React from "react"
import { useState } from "react"
import styles from "../../styles/Weekly.module.css"


export default function Weekly(){
    const [days, setDays] = useState([])
    return(
        <div className={styles.weeklyContainer}>
            <h2>Weekly Activities</h2>
            <ul className={styles.weeklyActivityList}>
                <li className={styles.days}>Day 1</li>
                <li className={styles.days}>Day 2</li>
                <li className={styles.days}>Day 3</li>
                <li className={styles.days}>Day 4</li>
                <li className={styles.days}>Day 5</li>
                <li className={styles.days}>Day 6</li>
                <li className={styles.days}>Day 7</li>   
            </ul>
        </div>
    )
}
