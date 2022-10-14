export type LeftNavigationProps = {
	isOpen?: boolean;
	setOpen?: any;
	navigations: {
		name: string;
		links: {
			name: string;
			href: string | null;
			icon: string;
			query?: string;
			slug?: string;
		}[];
	}[];
};
