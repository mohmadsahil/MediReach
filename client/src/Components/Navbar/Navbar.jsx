import React from 'react'
import styles from "../Navbar/Navbar.module.css"

export const Navbar = () => {
  return (
    <div>
        <nav className={styles.mainNav}>
            <div className={styles.logo}>
                <h1 className={styles.logo1}>Medi</h1>
                <h1 className={styles.logo2}>Reach</h1>
            </div>

            <div className={styles.menuLinks}>
                <ul>
                    <li className={styles.menuLinksItems}>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Doctors</a>
                        <button className={styles.signUpButton}>Sign Up</button>
                        <button className={styles.signUpButton}>Sign In</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
 )
}
