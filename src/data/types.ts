interface Image {
	alt: string;
	src: string;
}

export interface PageInfo {
	address: string;
	backgroundInformation: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phoneNumber: string;
	profilePic: Image;
}

export interface Technology {
	image: Image;
	progress: number;
	title: string;
}

export interface Skill {
	id: number;
	image: Image;
	// progress: number;
	link: string;
	title: string;
}

export interface Experience {
	company: string;
	companyImage: Image;
	dateStarted: Date;
	dateEnded: Date;
	isCurrentlyWorkingHere: boolean;
	jobTitle: string;
	points: string[];
	technologies: Skill[];
}

export interface Project {
	title: string;
	image: Image;
	linkToBuild: string;
	summary: string;
	technologies: Skill[];
	// slug: Slug;
}

export interface Social {
	title: string;
	url: string;
}
