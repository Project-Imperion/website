import styles from './NotFound.module.scss'

export function NotFound() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Page Not Found</h2>
			<p className={styles.message}>Imperion apologises for not having all of the data you seek.</p>
		</div>
	)
}