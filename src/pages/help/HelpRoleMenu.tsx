import styles from './Help.module.scss';

export function HelpRoleMenu() {
	return (
		<section className={styles.helpContent}>
			<h1>/role-menu Command</h1>
			<p>
				The /role-menu command is used to create a role selection menu for your server.
				<br />
				To use the /role-menu command, type <code>/role-menu</code> in your server.
				<br />
				The bot will guide you through the role menu creation process.
			</p>
			<h2>Editing the Role Menu</h2>
			<p>
				To edit an existing role menu, simply run the <code>/role-menu</code> command again.
				The bot will detect the existing menu and prompt you to make changes.
				If you need to change the channel, you can delete the existing message and run the command again to create a new menu in a different channel.
			</p>
			<h2>Data Storage</h2>
			<p>
				During role menu creation, we store some information about the menu.
				<ul>
					<li>
						<strong>Server ID</strong>: The unique identifier for your Discord server.
					</li>
					<li>
						<strong>Channel ID</strong>: The unique identifier for the channel where the role menu will be sent.
					</li>
					<li>
						<strong>Message ID</strong>: The unique identifier for the message that contains the role menu.
					</li>
					<li>
						<strong>Role IDs</strong>: The unique identifiers for the roles included in the menu.
					</li>
				</ul>
			</p>
			<p>
				Imperion stores only the necessary configuration data for your server, such as message ID and roles.
				No personal user data is stored. All settings can be updated or removed at any time using the /role-menu command.
				To read more about this data, please see our <a href="/help/privacy">Data Privacy and Usage</a> section.
			</p>
		</section>
	)
}
