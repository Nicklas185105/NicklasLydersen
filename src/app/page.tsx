import styles from './page.module.scss';
import clsx from 'clsx';
import {
	About,
	Header,
	Hero,
	WorkExperience,
	Skills,
	Projects,
	Contact,
} from 'views';
import { pageInfo, experiences, socials, skills, projects } from 'data';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={clsx(styles.main, 'scrollbar')}>
			{/* Header */}
			<Header socials={socials} />

			{/* Hero */}
			<section id="hero" className={styles.section}>
				<Hero pageInfo={pageInfo} />
			</section>

			{/* About */}
			<section id="about" className={styles.section}>
				<About pageInfo={pageInfo} />
			</section>

			{/* Experience */}
			<section id="experience" className={styles.section}>
				<WorkExperience experiences={experiences} />
			</section>

			{/* Skills */}
			<section id="skills" className={styles.section}>
				<Skills skills={skills} />
			</section>

			{/* Projects */}
			<section id="projects" className={styles.section}>
				<Projects projects={projects} />
			</section>

			{/* Contact Me */}
			<section id="contact" className={styles.section}>
				<Contact pageInfo={pageInfo} />
			</section>

			<footer className={styles.footer}>
				<div className={styles.container}>
					<Link href="#hero">
						<div className={styles.image}>
							<div>
								<Image
									src="/images/up-arrow.svg"
									fill
									loading="lazy"
									alt="up arrow"
								/>
							</div>
						</div>
					</Link>
				</div>
			</footer>
		</main>
	);
}
