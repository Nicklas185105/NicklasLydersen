'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './About.module.scss';
import { PageInfo } from 'data/types';

type Props = {
	pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
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
			<h3 className={styles.title}>About</h3>

			<div className={styles.image}>
				<motion.div
					initial={{
						x: -200,
						opacity: 0,
					}}
					transition={{
						duration: 1.2,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					viewport={{ once: true }}
					className={styles.iContainer}
				>
					<Image
						src={pageInfo.profilePic.src}
						alt={pageInfo.profilePic.alt}
						layout="fill"
						objectFit="cover"
					/>
				</motion.div>
			</div>

			<div className={styles.textContainer}>
				<h4>
					Here is a <span>little</span> background
				</h4>
				<p>{pageInfo.backgroundInformation}</p>
			</div>
		</motion.div>
	);
}
