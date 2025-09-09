import ImperionLogo from '../../assets/logo.png'
import styles from './Logo.module.scss'

export function Logo() {
	return (
		<div className={styles.logoContainer}>
			<img
				src={ImperionLogo}
				alt="Imperion Logo"
				className={styles.imperionLogo}
			/>
		</div>
	)
}