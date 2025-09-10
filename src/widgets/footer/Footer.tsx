import discord from '../../assets/discord.svg'
import styles from "./Footer.module.scss"

export function Footer() {
	return (
		<>
			<div className={styles.scrollingSpacer}></div>
			<footer className={styles.footer}>
				<p className={styles.personalData}>Imperion does not store any personal data.</p>
				<a className={styles.discordLink} href="https://discord.gg/Mm4Sq4byFx" target="_blank" rel="noopener noreferrer">
					<p className={styles.discordText}>Join us Today!</p>

					<img className={styles.discordIcon} src={discord} alt="Join our Discord" />
				</a>
			</footer>
		</>
	)
}
