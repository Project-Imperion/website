import styles from './Help.module.scss';

export function HelpGeneral() {
	return (
		<section className={styles.helpContent}>
			<h1>General Information</h1>
			<p>
				Welcome to Imperion! This platform is designed to help Ish's State groups grow and connect with potential members.
				Here are some key points to understand about how Imperion works:
			</p>
			<ul>
				<li><b>Independent Operation:</b> We are an independent group, not associated with Ish's State or its team. Our goal is to support the community and facilitate group growth.</li>
				<li><b>Group Advertising:</b> Group leaders can add their groups to our database using the /setup command, making it easy for potential members to find and join.</li>
				<li><b>Member Tracking:</b> We track the total number of members in each group and provide a timeline of group member counts after the event.</li>
				<li><b>Role Menu:</b> Group leaders can use the /role-menu command to allow users to select Discord roles from a menu.</li>
				<li><b>Community Growth:</b> Our mission is to help groups grow organically and connect with like-minded individuals.</li>
				<li><b>Fair Play:</b> Imperion must not be used to metagame in the event. We encourage fair play and respect for all participants.</li>
			</ul>
			<p>
				We hope you find Imperion useful!
			</p>
		</section>
	)
}