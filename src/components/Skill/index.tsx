import { Skill } from 'data/types';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Skill.module.scss';

type Props = {
	skill: Skill;
	directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
	return (
		<a className={styles.container} href={skill.link} target="_blank">
			<motion.img
				initial={{
					x: directionLeft ? -100 : 100,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				src={skill.image.src}
				alt={skill.image.alt}
				className={styles.image}
			/>

			<motion.div
				initial={{
					x: directionLeft ? -100 : 100,
				}}
				transition={{ duration: 1 }}
				whileInView={{
					x: 0,
				}}
				className={styles.textContainer}
			>
				<div>
					<p>{skill.title}</p>
				</div>
			</motion.div>
		</a>
	);
}
