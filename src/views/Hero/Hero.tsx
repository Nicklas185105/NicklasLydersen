'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from 'components/BackgroundCircles';
import styles from './Hero.module.scss';
import { PageInfo } from 'data/types';

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, The Name's ${pageInfo.name}`,
			'A-guy-who-loves-Coffee.tsx',
			'<ButLovesToCode />',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className={styles.container}>
			<BackgroundCircles />
			<div className={styles.image}>
				<Image
					src={pageInfo.heroImage.src}
					layout="fill"
					objectFit="cover"
					alt={pageInfo.heroImage.alt}
				/>
			</div>
			<div className={styles.textContainer}>
				<h2 className={styles.title}>{pageInfo.role}</h2>
				<div className={styles.typewriter}>
					<h1 className={styles.text}>
						<span>{text}</span>
						<Cursor cursorColor="#F7AB0A" />
					</h1>
				</div>

				<div className={styles.linkContainer}>
					<Link href="#about">
						<button className={styles.button}>About</button>
					</Link>
					<Link href="#experience">
						<button className={styles.button}>Experience</button>
					</Link>
					<Link href="#skills">
						<button className={styles.button}>Skills</button>
					</Link>
					<Link href="#projects">
						<button className={styles.button}>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
