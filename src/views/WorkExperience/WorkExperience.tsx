'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WorkExperience.module.scss';
import clsx from 'clsx';
import { Experience } from 'data/types';
import ExperienceCard from 'components/ExperienceCard';

type Props = {
	experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className={styles.container}
		>
			<h3 className={styles.title}>Work Experience</h3>

			<div className={clsx(styles.cardContainer, 'scrollbar')}>
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} experience={experience} />
				))}
			</div>
		</motion.div>
	);
}
