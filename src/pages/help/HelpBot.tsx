import styles from './Help.module.scss';

export function HelpBot() {
	return (
		<section className={styles.helpContent}>
			<h1>Adding the bot to your server</h1>
			<p>
				To add Imperion to your server, you need to have the "Manage Server" permission.
				You can then <a href="https://discord.com/oauth2/authorize?client_id=1414737487896645664&scope=bot%20applications.commands&permissions=268437504" target="_blank" rel="noreferrer">invite the bot</a> to your server
				<br />
				Select the server you want to add the bot to, and click "Continue".
				<br />
				You will then be asked to authorize the bot. Click "Authorize" to add the bot to your server.
				<br />
				You may also be asked to complete a CAPTCHA to verify that you are not a bot.
			</p>
			<h2>Permissions</h2>
			<p>
				Imperion only requires the "Manage Roles" and "Send Messages" permissions.
				Do <b>not</b> grant the bot any additional permissions.
				For security, ensure that privileged roles (such as event staff or roles with "Administrator") are placed <b>above</b> the bot in your server's role hierarchy.
			</p>
			<h2>Using the Bot</h2>
			<p>
				Once the bot is added to your server, you can use the <a href="/help/setup">/setup</a> command to configure the bot for your server.
				<br />
				You can also use the <a href="/help/role-menu">/role-menu</a> command to create role menus for your server.
				<br />
				For more information on how to use these commands, please refer to the respective help sections.
			</p>
		</section>
	)
}