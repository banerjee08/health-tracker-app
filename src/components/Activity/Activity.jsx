import React from 'react'
import { useState } from "react"
import styles from "../../styles/Activity.module.css"

export default function Activity(){
    const [activity, setActivity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(activity)
        setActivity("")
    }

        
    return(
        <div className={styles.activityContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                />
                <button type="submit">Get Started</button>
            </form>
            <div>
                <h2>Your Activities:</h2>
                    <ul className={styles.listGroup}>
                        <li className={styles.listGroupItem}>An item</li>
                        <li className={styles.listGroupItem}>A second item</li>
                        <li className={styles.listGroupItem}>A third item</li>
                        <li className={styles.listGroupItem}>A fourth item</li>
                        <li className={styles.listGroupItem}>And a fifth one</li>
                    </ul>
            </div>
        </div>
    )
}