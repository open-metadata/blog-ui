interface NavLink {
	label: string;
	link: string;
}

export interface ProductLink {
	link: string;
	title: string;
	description: string;
	icon: string;
}

interface FeatureLink extends ProductLink {
	isNew?: boolean;
}

export interface ProductUpdate {
	version: string;
	title: string;
	date: string;
	description: string;
	link: string;
	highlight?: boolean;
}

export interface ProductDropdown {
	title: string;
	productLinks: ProductLink[];
	featureLinks: FeatureLink[];
	productUpdates: ProductUpdate[];
}

interface ResourceItem {
	title: string;
	link: string;
	icon: string;
}

interface ResourceArticle {
	id: number;
	title: string;
	image: string;
	slug: string;
	description: string;
	cluster: string;
}

export interface ResourceDropdownType {
	title: string;
	resourceItems: ResourceItem[];
	resourceArticles: ResourceArticle[];
}

interface ContactInfo {
	title: string;
	link: string;
}

export interface NavData {
	navLinks: NavLink[];
	productDropdown: ProductDropdown;
	resourceDropdown: ResourceDropdownType;
	contact: ContactInfo;
}
