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
	image: Image;
	progress: number;
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
	technologies: Technology[];
}

export interface Project {
	title: string;
	image: Image;
	linkToBuild: string;
	summary: string;
	technologies: Technology[];
	// slug: Slug;
}

export interface Social {
	title: string;
	url: string;
}
