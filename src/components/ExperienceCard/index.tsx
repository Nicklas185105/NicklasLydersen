import { Experience } from 'data/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styles from './ExperienceCard.module.scss';
import clsx from 'clsx';

type Props = {
	experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
	return (
		<article className={styles.article}>
			<div>
				<motion.img
					initial={{
						y: -100,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
					}}
					className={styles.image}
					src={experience.companyImage.src}
					alt={experience.companyImage.alt}
				/>
				<div className={styles.container}>
					<h4>{experience.jobTitle}</h4>
					<p className={styles.p}>{experience.company}</p>
					<div className={styles.technologies}>
						{experience.technologies.map((technology, index) => (
							<div key={index} className={styles.tImage}>
								<Image
									src={technology.image.src}
									fill
									loading="lazy"
									alt={technology.image.alt}
								/>
							</div>
						))}
					</div>
					<p className={styles.date}>
						{experience.dateStarted.toDateString()} -{' '}
						{experience.isCurrentlyWorkingHere
							? 'Present'
							: experience.dateEnded.toDateString()}
					</p>
					<ul className={clsx(styles.points, 'scrollbar')}>
						{experience.points.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
}
