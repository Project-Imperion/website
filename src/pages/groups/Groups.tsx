import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GroupCard } from '../../widgets/groupCard/GroupCard';
import { GroupPage } from '../../widgets/groupPage/GroupPage';
import styles from './Groups.module.scss'

export function Groups() {
    const navigate = useNavigate();

	const [groups, setGroups] = useState<any[]>([]);

	const { id } = useParams<{ id?: string }>();
	const selectedGroup = id ? groups.find(group => group._id === id) : null;

	useEffect(() => {
		fetch('https://api.project-imperion.com/groups')
			.then(res => res.json())
			.then(data => setGroups(data))
			.catch(() => setGroups([]));
	}, []);

	return (
		<div className={styles.container}>
			{groups.map(group => (
				<GroupCard key={group._id} {...group} />
			))}
			{selectedGroup && (
				<>
					<div className={styles.overlay} onClick={() => navigate(`/groups`)}/>
					<div className={styles.groupPageContainer}>
						<GroupPage {...selectedGroup} />
					</div>
				</>
			)}
		</div>
	)
}
