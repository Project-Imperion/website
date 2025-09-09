import styles from "./Footer.module.scss"

export function Footer() {
	return (
		<>
			<div className={styles.scrollingSpacer}></div>
			<footer className={styles.footer}>
				<p>Join us Today!</p>
			</footer>
		</>
	)
}
