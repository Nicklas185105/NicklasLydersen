'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BackgroundCircles.module.scss';

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{
				duration: 2.5,
			}}
			className={styles.container}
		>
			<div className={styles.circle1} />
			{/* xs:h-[100px] xs:w-[100px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] */}
			<div className={styles.circle2} />
			<div className={styles.circle3} />
			<div className={styles.circle4} />
			<div className={styles.circle5} />
		</motion.div>
	);
}

export default BackgroundCircles;
