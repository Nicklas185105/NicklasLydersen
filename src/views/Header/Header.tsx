'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Social } from 'data/types';

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	return (
		<header className={styles.header}>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className={styles.container}
			>
				{/* Social Icons */}
				{socials.map((social, index) => (
					<SocialIcon
						key={index}
						network={social.title.toLowerCase()}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div>

			{/* <motion.div
				initial={{
					y: 0,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					y: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1,
					delay: 1.5,
				}}
			>
				{socials.map((social, index) => (
					<SocialIcon
						key={index}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div> */}

			<Link href="#contact">
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className={styles.contact}
				>
					<SocialIcon
						className={styles.icon}
						network="email"
						fgColor="gray"
						bgColor="transparent"
					/>
					<p>Get In Touch</p>
				</motion.div>
			</Link>
		</header>
	);
}
