/* --- STATE --- */
export interface JsonResumeState {
	$schema: string;
	basics: {
		name: string;
		label: string;
		image: string;
		picture: string;
		email: string;
		phone: string;
		url: string;
		summary: string;
		location: {
			countryCode: string;
			address: string;
			city: string;
			region: string;
		};
		profiles: Array<{
			network: string;
			username: string;
			url: string;
		}>;
	};
	work: Array<{
		name: string;
		position: string;
		startDate: string;
		endDate: string;
		highlights: Array<any>;
		summary: string;
		summary2?: string;
		url: string;
	}>;
	volunteer: Array<any>;
	education: Array<{
		institution: string;
		area: string;
		studyType: string;
		startDate: string;
		endDate: string;
		gpa: string;
		courses: Array<any>;
	}>;
	awards: Array<any>;
	publications: Array<any>;
	skills: Array<{
		name: string;
		level: string;
		keywords: Array<string>;
	}>;
	languages: Array<{
		language: string;
		fluency: string;
	}>;
	interests: Array<any>;
	references: Array<{
		name: string;
		reference: string;
	}>;
	projects: Array<{
		name: string;
		startDate: string;
		summary: string;
		url: string;
		endDate: string;
	}>;
	meta: {
		version: string;
		canonical: string;
		theme: string;
	};
	certificates: Array<{
		title: string;
		issuer: string;
		url: string;
	}>;
}
