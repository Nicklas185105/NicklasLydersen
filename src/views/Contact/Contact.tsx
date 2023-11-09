'use client';

import { PageInfo } from 'data/types';
import { Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Contact.module.scss';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {
	pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const hasWindow = typeof window !== 'undefined';

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		hasWindow
			? (window.location.href = `mailto:nl@sublime-it.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (My email is ${formData.email})`)
			: null;
	};

	const [width, setWidth] = useState(hasWindow ? window.innerWidth : 1024);

	useEffect(() => {
		function handleResize() {
			setWidth(hasWindow ? window.innerWidth : 1024);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [hasWindow]);

	return (
		<div className={styles.page}>
			<h3 className={styles.title}>Contact</h3>

			<div className={styles.container}>
				<h4>
					Wanna hear more? <span>Let&apos;s talk.</span>
				</h4>

				<div className={styles.description}>
					{/* <div className="flex items-center space-x-2 md:space-x-5 justify-center">
						<PhoneIcon className="text-[#F7AB0A] h-5 md:h-7 w-5 md:w-7 animate-pulse" />
						<p className="text-base md:text-2xl">{pageInfo.phoneNumber}</p>
					</div> */}
					<div className={styles.descriptionContainer}>
						<Mail className={styles.icon} />
						<p className={styles.text}>{pageInfo.email}</p>
					</div>
					{/* <div className="flex items-center space-x-2 md:space-x-5 justify-center">
						<MapPinIcon className="text-[#F7AB0A] h-5 md:h-7 w-5 md:w-7 animate-pulse" />
						<p className="text-base md:text-2xl">{pageInfo.address}</p>
					</div> */}
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{width !== null &&
						(width > 768 ? (
							<div className={styles.splitInput}>
								<input
									{...register('name')}
									className={styles.input}
									type="text"
									placeholder="Name"
								/>
								<input
									{...register('email')}
									className={styles.input}
									type="email"
									placeholder="Email"
								/>
							</div>
						) : (
							<>
								<input
									{...register('name')}
									className={styles.input}
									type="text"
									placeholder="Name"
								/>
								<input
									{...register('email')}
									className={styles.input}
									type="email"
									placeholder="Email"
								/>
							</>
						))}

					<input
						{...register('subject')}
						className={styles.input}
						type="text"
						placeholder="Subject"
					/>

					<textarea
						{...register('message')}
						className={styles.input}
						placeholder="Message"
					/>
					<button className={styles.button} type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
