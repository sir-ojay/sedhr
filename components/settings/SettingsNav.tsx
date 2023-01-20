import Link from "next/link";
import { useRouter } from "next/router";
import WhiteWrapper from "../global/WhiteWrapper";

type SettingsNavProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};

const SettingsNav = ({ navigations }: SettingsNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper className='sticky top-[164px]'>
			<section>
				<ul>
					<li>
						{navigations?.map((item) => (
							<Link
								key={item.name}
								href={`${item.href}${item.query ? item.query : ""}`}
								className={`nav-hover ${
									location.asPath.includes(item.href) ? "active" : null
								} cursor-pointer flex items-center justify-between w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}>
								<div className='leading-[160%] font-medium capitalize'>
									{item.name}
								</div>
							</Link>
						))}
					</li>
				</ul>
			</section>
		</WhiteWrapper>
	);
};

export default SettingsNav;

SettingsNav.defaultProps = {
	navigations: [
		{
			name: "Account Preference",
			href: "/settings?tab=account-preference",
		},
		{
			name: "Visibility",
			href: "/settings?tab=visibility",
		},
		{
			name: "Communication",
			href: "/settings?tab=communication",
		},
		{
			name: "Data privacy",
			href: "/settings?tab=data-privacy",
		},
		{
			name: "notifications",
			href: "/settings?tab=notifications",
		},
		{
			name: "advertising",
			href: "/settings?tab=advertising",
		},
	],
};
