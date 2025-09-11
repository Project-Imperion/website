import discord from '../../assets/discord.svg'
import github from '../../assets/github.svg'
import styles from "./Footer.module.scss"

export function Footer() {
	return (
		<>
			<div className={styles.scrollingSpacer}></div>
			<footer className={styles.footer}>
				<p className={styles.associated}>Imperion is an independent group, and is not associated with Ish's State or its team.</p>
				
				<div className={styles.links}>
					<a className={styles.discordLink} href="https://discord.gg/Mm4Sq4byFx" target="_blank" rel="noopener noreferrer">
						<p className={styles.discordText}>Join us Today!</p>
						<img className={styles.discordIcon} src={discord} alt="Join our Discord" />
					</a>
					<a className={styles.githubLink} href="https://github.com/Project-Imperion" target="_blank" rel="noopener noreferrer">
						<p className={styles.githubText}>View our Code!</p>
						<img className={styles.githubIcon} src={github} alt="View our Code" />
					</a>
				</div>
			</footer>
		</>
	)
}
