import { Link } from 'react-router-dom'
import discord from '../../assets/discord.svg'
import logo from '../../assets/logo.png'
import member from '../../assets/member.svg'
import styles from './Homepage.module.scss'

export function Homepage() {
	const botInviteUrl = "https://discord.com/oauth2/authorize?client_id=1414737487896645664&scope=bot%20applications.commands&permissions=268437504";
	
	return (
		<div className={styles.homepage}>
			<section className={styles.intro}>
				<div>
					<h2>Our Mission</h2>
					We want to make it easy for you to advertise your Ish's State group and for potential members to find and join your group.
					After the event, we will provide a timeline of group member counts, so you can see how fast groups grew.
				</div>

				<div>
					<h2>How it works</h2>
					<ul className={styles.list}>
						<li><b>Group leaders</b> add our bot to their group's discord server.</li>
						<li><b>Group leaders</b> use the <b>/setup</b> command to add their group to our database.</li>
						<p className={styles.listSpacer}></p>
						<li>Our website advertises these groups to potential members.</li>
						<li><b>Potential members</b> can browse and join these groups.</li>
						<p className={styles.listSpacer}></p>
						<li>Our website tracks the total number of members in each group.</li>
						<li>After the event, we create a timeline showing group member counts.</li>
					</ul>
				</div>
			</section>

			<section className={styles.actions}>
				<div className={styles.actionCard}> 
					<Link className={styles.actionLink} 
						to={botInviteUrl} target="_blank" rel="noopener noreferrer">
						<img src={logo} alt="Logo" className={styles.logoIcon} />
						Add our bot
					</Link>
				</div>

				<div className={styles.actionCard}>
					<Link className={styles.actionLink} to="/groups">
						<div>
							<img src={member} alt="Members" className={styles.memberIcon} />
							<img src={member} alt="Members" className={styles.memberIcon} />
							<img src={member} alt="Members" className={styles.memberIcon} />
						</div>
						View groups
					</Link>
				</div>

				<div className={styles.actionCard}>
					<Link className={styles.actionLink} to="https://discord.gg/Mm4Sq4byFx" target="_blank" rel="noopener noreferrer">
						<img src={discord} alt="Discord" className={styles.discordIcon} />
						Join our Discord
					</Link>
				</div>
			</section>
		</div>
	)
}