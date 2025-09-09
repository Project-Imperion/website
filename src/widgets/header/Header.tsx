import { Logo } from '../../components/logo/Logo'
import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.name} >
				<Logo />
				<h1>Imperion</h1>
			</div>
			<nav className={styles.nav}>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
			</nav>
		</div>
	)
}
