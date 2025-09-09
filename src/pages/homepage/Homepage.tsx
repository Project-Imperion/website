import styles from './Homepage.module.scss'

export function Homepage() {
	return (
		<div className={styles.homepage}>
			<h2>Welcome to Imperion</h2>
			<p className={styles.description}>Spying on you for your own protection.</p>
		</div>
	)
}