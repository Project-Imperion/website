import styles from './Help.module.scss';

export function HelpPrivacy() {
	return (
		<section className={styles.helpContent}>
			<h1>Data Privacy and Usage</h1>
			<p>
				At Imperion, we prioritise your privacy and do not collect any personal data.
				We do however collect certain information about the groups you add to our platform to provide our services effectively.
				This page outlines how we handle and use the information we collect.
			</p>
			<h2>Data We Collect</h2>
			<ul>
				<li><b>/setup:&nbsp;</b>
					The setup command uses the discord <b>guild name</b>, <b>guild id</b>, and <b>role Ids (optional)</b> for both the member and dead roles. 
					Additionally, you can choose to add a <b>description</b>, <b>invite link</b>, and a <b>banner image URL</b> for your group.
					These can be updated or removed at any time using the /setup command again.
				</li>
				<li><b>/role-menu:&nbsp;</b>
					When you add a group using the /role-menu command, the discord bot must create a message in the channel you specify.
					For this, we must store the <b>guild ID</b>, <b>channel ID</b>, and <b>message ID</b>, as well as the <b>role IDs</b> you want to include in the menu.
				</li>
				<li><b>Member Counts:</b> 
					If you have optionally set up the member and dead roles using the /setup command, we will track the <b>number of members in your group</b>.
					This data is stored only as a number, and does not include any personal information (including discord IDs) about individual members.
				</li>
			</ul>
			<h2>How We Use The Data</h2>
			<ul>
				<li><b>Service Functionality:</b> Your Discord guild ID is used to manage your interactions with the Imperion bot.</li>
				<li><b>Group Promotion:</b> The information you provide about your group is used to create a public listing on our platform, helping potential members discover and join your group.</li>
			</ul>
			<h2>Data Sharing and Security</h2>
			<ul>
				<li><b>No Third-Party Sharing:</b> We do not share any data with third parties.</li>
				<li><b>Data Security:</b> We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.</li>
				<li><b>Data Retention:</b> We will retain this group information for as long as necessary to provide our services, all of this data will be deleted once the event ends. You can request the deletion of your data at any time.</li>
			</ul>
			<h2>Your Rights</h2>
			<ul>
				<li><b>Access and Correction:</b> You have the right to access all of the data we hold about your group and to request corrections if any information is inaccurate.</li>
				<li><b>Data Deletion:</b> You can request the deletion of your group's data at any time. Please contact us to initiate this process.</li>
			</ul>
			<h2>Contact Us</h2>
			<p>
				If you have any questions or concerns about our data privacy practices, please use <a href="https://discord.gg/Mm4Sq4byFx">our discord server</a>.
			</p>
		</section>
	)
}