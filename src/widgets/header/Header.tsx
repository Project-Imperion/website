import { Link } from 'react-router-dom'
import { Logo } from '../../components/logo/Logo'
import styles from './Header.module.scss'
import { useState } from 'react'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)


	return (
		<>
			<div className={styles.scrollingSpacer}></div> 

			<div className={styles.header}>
				<Link className={styles.name} to="/">
					<Logo />
					<h1>Imperion</h1>
				</Link>

				<nav className={styles.navBar}>
					<button
						className={styles.menuButton}
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
					>
						&#9776;
					</button>
					
					<div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
						<Link to={"/"} className={styles.navLink}>Home</Link>
						<Link to={"/groups"} className={styles.navLink}>Groups</Link>
					</div>
				</nav>
			</div>
		</>
	)
}
