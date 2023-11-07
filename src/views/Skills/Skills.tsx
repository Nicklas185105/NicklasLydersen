'use client';

import { Skill as SkillType } from 'data/types';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Skills.module.scss';
import Skill from 'components/Skill';

type Props = {
	skills: SkillType[];
};

export default function Skills({ skills }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={styles.container}
		>
			<h3 className={styles.title}>Skills</h3>

			<h3 className={styles.description}>
				Hover over a skill currency for name and click for link
			</h3>

			<div className={styles.skillContainer}>
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill key={skill.id} skill={skill} />
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill key={skill.id} skill={skill} directionLeft={true} />
				))}
			</div>
		</motion.div>
	);
}
