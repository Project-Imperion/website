import { useEffect, useState } from 'react'

import { GroupCard } from '../groupCard/GroupCard'
import ReactMarkdown from 'react-markdown'
import styles from './GroupPage.module.scss'

type GroupPageProps = {
	_id: string
    name: string
    shortDesc: string
    memberCount: number
    deadCount?: number
    discordInvite?: string
    bannerUrl?: string
	websiteUrl?: string
}

export function GroupPage({_id, name, shortDesc, memberCount, deadCount, discordInvite, bannerUrl, websiteUrl}: GroupPageProps) {
	const [longDesc, setLongDesc] = useState<string>("");

	useEffect(() => {
		fetch('https://api.project-imperion.com/groupDescription?_id=' + _id)
			.then(res => res.json())
			.then(data => setLongDesc(data.longDesc))
			.catch(() => setLongDesc(""));
	}, [_id]);


	return (
		<div className={styles.container}>
			<div className={styles.cardContainer}>
				<GroupCard _id={_id} name={name} shortDesc={shortDesc} memberCount={memberCount} deadCount={deadCount} discordInvite={discordInvite} bannerUrl={bannerUrl} websiteUrl={websiteUrl} />
			</div>
		
			<div className={styles.longDesc}>
				<ReactMarkdown>{longDesc}</ReactMarkdown>
			</div>	
		</div>
	)
}