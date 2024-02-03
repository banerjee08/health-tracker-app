import React from "react"
import { Link, NavLink } from "react-router-dom"

import styles from "../styles/Header.module.css"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <header>
            <Link className={styles.siteLogo} to="/"><strong>#FIT2</strong>Fitter</Link>
            <nav>
                <NavLink
                    to="/activity"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Activities
                </NavLink>
                <NavLink
                    to="/daily"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Daily
                </NavLink>
                <NavLink
                    to="/weekly"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Weekly
                </NavLink>
            </nav>
        </header>
    )
}