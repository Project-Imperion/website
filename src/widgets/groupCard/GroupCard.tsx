import { useEffect, useState } from "react";

import dead from '../../assets/dead.svg'
import discord from '../../assets/discord.svg'
import member from '../../assets/member.svg'
import styles from './GroupCard.module.scss'
import { useNavigate } from "react-router-dom";
import website from '../../assets/website.svg'

type GroupCardProps = {
    _id: string
    name: string
    shortDesc: string
    memberCount: number
    deadCount?: number
    discordInvite?: string
    bannerUrl?: string
    websiteUrl?: string
}

export function GroupCard({_id, name, shortDesc, memberCount, deadCount, discordInvite, bannerUrl, websiteUrl}: GroupCardProps) {
    const navigate = useNavigate();

    const [isBannerDark, setIsBannerDark] = useState<boolean>(false);

    useEffect(() => {
        if (!bannerUrl) return;
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.src = bannerUrl;
        img.onload = () => {
            // Create canvas
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.drawImage(img, 0, 0);

            // Sample: average brightness of 100 random pixels
            let total = 0;
            let count = 0;
            const sampleSize = 100;
            for (let i = 0; i < sampleSize; i++) {
                const x = Math.floor(Math.random() * img.naturalWidth);
                const y = Math.floor(Math.random() * img.naturalHeight);
                const pixel = ctx.getImageData(x, y, 1, 1).data;
                // Basic luminance formula
                const brightness = 0.299*pixel[0] + 0.587*pixel[1] + 0.114*pixel[2];
                total += brightness;
                count++;
            }
            const avg = total / count;
            setIsBannerDark(avg < 100); // 0 (black) to 255 (white) threshold
        };
    }, [bannerUrl]);

    return (
        <div 
            className={`${styles.card} ${isBannerDark ? styles.lightText : ""}`}
            style={bannerUrl ? {backgroundImage: `url(${bannerUrl})`} : {}}
            onClick={() => navigate(`/groups/${_id}`)}
        >
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.details}>
            <p className={styles.description}>{shortDesc}</p>
            <div className={styles.membersAndDiscord}>
                <div className={styles.members}>
                {memberCount > 0 ? (
                    <div className={styles.memberCount}>
                    <p>{deadCount ? memberCount - deadCount : memberCount}</p>
                    <img className={`${styles.memberIcon} ${isBannerDark ? styles.lightIcon : ""}`} src={member} alt="Member Icon" />
                    </div>
                ) : null}
                {deadCount && deadCount > 0 ? (
                    <div className={styles.memberCount}>
                    <p>{deadCount}</p>
                    <img className={`${styles.deadIcon} ${isBannerDark ? styles.lightIcon : ""}`} src={dead} alt="Dead Member Icon" />
                    </div>
                ) : null}
                </div>
                <div className={styles.links}>
                {websiteUrl && (
                    <a
                    className={`${styles.link} ${isBannerDark ? styles.lightIcon : ""}`}
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img className={styles.websiteIcon} src={website} alt="Website Icon" />
                    </a>
                )}
                {discordInvite && (
                    <a
                    className={`${styles.link} ${isBannerDark ? styles.lightIcon : ""}`}
                    href={discordInvite}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img className={styles.discordIcon} src={discord} alt="Discord Icon" />
                    </a>
                )}
                </div>
            </div>
            </div>
        </div>
    )
}
