import discord from '../../assets/discord.svg'
import styles from "./Footer.module.scss"

export function Footer() {
	return (
		<>
			<div className={styles.scrollingSpacer}></div>
			<footer className={styles.footer}>
				<p>Join us Today!</p>
				<a className={styles.discordLink} href="https://discord.gg/Mm4Sq4byFx" target="_blank" rel="noopener noreferrer">
					<img className={styles.discordIcon} src={discord} alt="Join our Discord" />
				</a>
			</footer>
		</>
	)
}
