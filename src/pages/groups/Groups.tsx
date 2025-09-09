import { useEffect, useState } from 'react';

import { GroupCard } from '../../widgets/groupCard/GroupCard';
import styles from './Groups.module.scss'

export function Groups() {

	const [groups, setGroups] = useState<any[]>([]);
	useEffect(() => {
		fetch('https://api.project-imperion.com/groups')
			.then(res => res.json())
			.then(data => setGroups(data))
			.catch(() => setGroups([]));
	}, []);

	return (
		<div className={styles.container}>
			{groups.map(group => (
				<GroupCard key={group.id} {...group} />
			))}
		</div>
	)
}
