import { nextjs, react, sass, typescript } from './skills';
import { Project } from './types';

const projects: Project[] = [
	{
		title: 'Test Case',
		image: {
			alt: 'Test Case',
			src: '/images/projects/test-case.webp',
		},
		summary:
			'A portfolio page to showcase my skills and what I can do, while being able to have a place to showcase my different skill groups and the different projects I have made over the years.',
		linkToBuild: 'https://nicklaslydersen.com',
		technologies: [react, nextjs, typescript, sass],
	},
	{
		title: 'Test Case',
		image: {
			alt: 'Test Case',
			src: '/images/projects/test-case.webp',
		},
		summary:
			'A portfolio page to showcase my skills and what I can do, while being able to have a place to showcase my different skill groups and the different projects I have made over the years.',
		linkToBuild: 'https://nicklaslydersen.com',
		technologies: [react, nextjs, typescript, sass],
	},
];

export default projects;
