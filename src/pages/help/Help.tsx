import { useNavigate, useParams } from 'react-router-dom';

import { HelpBot } from './HelpBot';
import { HelpGeneral } from './HelpGeneral';
import { HelpPrivacy } from './HelpPrivacy';
import { HelpRoleMenu } from './HelpRoleMenu';
import { HelpSetup } from './HelpSetup';
import type { JSX } from 'react';
import styles from './Help.module.scss';

const helpPages: Record<string, JSX.Element> = {
	'privacy': <HelpPrivacy />,
	'bot': <HelpBot />,
	'setup': <HelpSetup />,
	'role-menu': <HelpRoleMenu />
}


export function Help() {
    const navigate = useNavigate();

	const { topic } = useParams<{ topic?: string }>();

	return (
		<div className={styles.helpPageWrapper}>
			<section className={styles.helpButtons}>
				<div
					className={`${styles.helpButton} ${window.location.pathname === '/help' ? styles.active : ''}`}
					onClick={() => navigate('/help')}
				>
					General information
				</div>
				<div
					className={`${styles.helpButton} ${window.location.pathname === '/help/privacy' ? styles.active : ''}`}
					onClick={() => navigate('/help/privacy')}
				>
					Data privacy and usage
				</div>
				<div
					className={`${styles.helpButton} ${window.location.pathname === '/help/bot' ? styles.active : ''}`}
					onClick={() => navigate('/help/bot')}
				>
					Adding the bot to your server
				</div>
				<div
					className={`${styles.helpButton} ${window.location.pathname === '/help/setup' ? styles.active : ''}`}
					onClick={() => navigate('/help/setup')}
				>
					/setup command
				</div>
				<div
					className={`${styles.helpButton} ${window.location.pathname === '/help/role-menu' ? styles.active : ''}`}
					onClick={() => navigate('/help/role-menu')}
				>
					/role-menu command
				</div>
			</section>

			<section className={styles.helpGeneral}>
				{(topic && helpPages[topic]) || <HelpGeneral />}
			</section>
		</div>
	)
}