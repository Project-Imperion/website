import discord from '../../assets/discord.svg'
import member from '../../assets/member.svg'
import styles from './GroupCard.module.scss'

type GroupCardProps = {
	id: string
	name: string
	shortDesc: string
	memberCount: number
	discordInvite: string
	bannerUrl?: string
}


export function GroupCard({id, name, shortDesc, memberCount, discordInvite, bannerUrl}: GroupCardProps) {
	return (
		<div 
			className={styles.card}
			style={bannerUrl ? {backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url(${bannerUrl})`} : {}}
		>
			<h2 className={styles.title}>{name}</h2>
			<div className={styles.details}>
				<p className={styles.description}>{shortDesc}</p>

				<div className={styles.membersAndDiscord}>
					<div className={styles.memberCount}>
						<p>{memberCount}</p>
						<img className={styles.memberIcon} src={member} alt="Member Icon" />
					</div>
					<a
						className={styles.discordLink}
						href={`https://discord.com/invite/${discordInvite}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img className={styles.discordIcon} src={discord} alt="Discord Icon" />
					</a>
				</div>
			</div>
		</div>
	)
}