import styles from './Help.module.scss';

export function HelpSetup() {
	return (
		<section className={styles.helpContent}>
			<h1>/setup Command</h1>
			<p>
				The /setup command is used to configure Imperion for your server.
				<br />
				To use the /setup command, type <code>/setup</code> in your server.
				<br />
				The bot will guide you through the setup process.
			</p>
			<h2>Settings</h2>
			<p>
				During setup, some configuration options are optional.
				You can skip these by following the bot's instructions or leaving fields blank.
				<ul>
					<li>
						<strong>Group Name</strong>: The name of your discord server.
					</li>
					<li>
						<strong>Short Description</strong>: A brief summary of your group for quick reference.
					</li>
					<li>
						<strong>Long Description</strong>: A more detailed explanation about your group. This section allows for markdown, so you can include formatting, links, and lists to better describe your group. For more features, see <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noreferrer">Markdown Help</a>.
					</li>
					<li>
						<strong>Banner Image URL (optional)</strong>: 
						An image link to visually represent your group, we recommend using a 2:3 aspect ratio image and hosting it through a tool like <a href="https://imgur.com/" target="_blank" rel="noreferrer">imgur</a>, you should get a link that looks like https://i.imgur.com/yourimage.png.
						The text will be displayed over this image so avoid using images with important text, and will be light or dark depending on the average color of the image.
					</li>
					<li>
						<strong>Website URL (optional)</strong>: A link to your group's official website.
					</li>
					<li>
						<strong>Discord Link (optional)</strong>: An invite link for users to join your Discord server.
					</li>
					<li>
						<strong>Member Role (optional)</strong>: The role assigned to regular members for permissions.
					</li>
					<li>
						<strong>Dead Role (optional)</strong>: The role for members that have been killed during the event, we recommend you allow users a way of assigning this to themselves (such as /role-menu).
					</li>
				</ul>
			</p>
			<h2>Member and Dead Roles</h2>
			<p>
				<strong>Member role:</strong>
				<br />
				Give this role to anyone actively participating in your group.
				Counts toward your group's member total, and appears on the left of group stats.
			</p>
			<p>
				<strong>Dead role:</strong>
				<br />
				Give this role when someone is "dead" in the event.
				They appear as a ghost in stats and are not counted as active members.
			</p>
			<h2>Editing Settings</h2>
			<p>
				To edit your server's settings, simply run the <code>/setup</code> command again.
				The bot will guide you through the setup process and allow you to make changes.
			</p>
			<h2>Data Storage</h2>
			<p>
				Imperion stores only the necessary configuration data for your server, such as roles and entered data.
				No personal user data is stored. All settings can be updated or removed at any time using the /setup command.
				To read more about this data, please see our <a href="/help/privacy">Data Privacy and Usage</a> section.
			</p>
		</section>
	)
}
