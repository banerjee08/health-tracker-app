import React from "react"
import { Link } from "react-router-dom"
import image from "../assets/workout.png"
import styles from "../styles/Home.module.css"

export default function Home(){
    return(
        <div className={styles.homeContainer}>
            <img src={image} className={styles.workoutImg}/>
            <h1>Elevate your well-being: Where fitness meets lifestyle in one app!</h1>
            <p>
                Add adventure to your daily life by keeping a track of your daily activities with #Fit2Fitter.
            </p>
            <Link to="activity" className={styles.cta}>Find your mojo</Link>
        </div>
    )
}