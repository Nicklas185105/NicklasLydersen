'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Project } from 'data/types';
import styles from './Projects.module.scss';
import clsx from 'clsx';

type Props = {
	projects: Project[];
};

export default function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className={styles.container}
		>
			<h3 className={styles.title}>Projects</h3>

			<div className={clsx(styles.case, 'scrollbar')}>
				{projects?.map((project, index) => (
					<div key={index} className={styles.caseContainer}>
						<div className={styles.div}>
							<motion.div
								initial={{
									opacity: 0,
									y: -200,
								}}
								transition={{ duration: 1.2 }}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{ once: true }}
								className={styles.image}
							>
								<Image
									src={project.image.src}
									alt={project.image.alt}
									fill
									loading="lazy"
								/>
							</motion.div>
							<div className={styles.caseContent}>
								<h4 className={styles.caseTitle}>
									<span>
										Case Study {index + 1} of {projects.length}:
									</span>{' '}
									{project?.title}
								</h4>

								<div className={styles.technologies}>
									{project?.technologies.map((technology, index) => (
										<div key={index} className={styles.skill}>
											<Image
												src={technology.image.src}
												alt={technology.image.alt}
												fill
												loading="lazy"
											/>
										</div>
									))}
								</div>

								<p className={styles.summary}>{project.summary}</p>
							</div>
							{/* {project?.linkToBuild && (
							<Link
								href={'/' + project?.linkToBuild + '/' + project?.slug.current}
							>
								<button className="projectButton">Link to Build</button>
							</Link>
						)} */}
						</div>
					</div>
				))}
			</div>

			<div className={styles.line} />
		</motion.div>
	);
}
