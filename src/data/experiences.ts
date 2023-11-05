import { Experience } from './types';

const experiences: Experience[] = [
	{
		jobTitle: 'Software Engineer',
		companyImage: {
			src: '/images/sublime-it.webp',
			alt: 'Sublime IT',
		},
		company: 'Sublime IT',
		dateStarted: new Date('2022-09-01'),
		dateEnded: new Date('2023-10-27'),
		isCurrentlyWorkingHere: false,
		technologies: [],
		points: [
			'Help build up the business',
			'Building an Ecommerce System',
			'Building advanced websites for clients',
			'Building company infrastructure',
		],
	},
	{
		jobTitle: 'Software Engineer',
		companyImage: {
			src: '/images/pwc.webp',
			alt: 'PwC',
		},
		company: 'PwC',
		dateStarted: new Date('2021-02-01'),
		dateEnded: new Date('2021-08-31'),
		isCurrentlyWorkingHere: false,
		technologies: [],
		points: [
			'Was a leading developer on a huge project where Liquid was used',
			'Created a lot of microservices to help the programmers with their daily work',
			'Used SCRUM in Azure DevOps on a daily basis',
			'Created a VSCode Extension to help us move out of an online editor',
		],
	},
];

export default experiences;
