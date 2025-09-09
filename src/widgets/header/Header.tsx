import { Logo } from '../../components/logo/Logo'
import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.header}>
			<a className={styles.name} href="/">
				<Logo />
				<h1>Imperion</h1>
			</a>
			<nav className={styles.nav}>
				<a className={styles.link} href="/">Home</a>
				<a className={styles.link} href="/groups">Groups</a>
			</nav>
		</div>
	)
}
