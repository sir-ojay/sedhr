import Link from "next/link";
import { useRouter } from "next/router";
import WhiteWrapper from "../global/WhiteWrapper";

type SedherUniverseNavProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};

const SedherUniverseNav = ({ navigations }: SedherUniverseNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper className='sticky top-[164px]'>
			<section>
				<header className='mb-4'>
					<div title='My Items' className='font-semibold text-lg text-dark-900'>
						Manage my Sedher universe
					</div>
				</header>
				<ul>
					<li>
						{navigations?.map((item) => (
							<Link
								key={item.name}
								href={`${item.href}${item.query ? item.query : ""}`}
								className={`nav-hover ${
									location.pathname.includes(item.href) ? "active" : null
								} cursor-pointer flex items-center justify-between w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}>
								<div className='leading-[160%] font-medium'>{item.name}</div>
								<div className='leading-[160%] font-medium'>{item.count}</div>
							</Link>
						))}
					</li>
				</ul>
			</section>
		</WhiteWrapper>
	);
};

export default SedherUniverseNav;

SedherUniverseNav.defaultProps = {
	navigations: [
		{
			name: "My Connections",
			href: "/sedher-universe/my-connections",
			count: "",
		},
		// {
		// 	name: "My Follows",
		// 	href: "/sedher-universe/my-follows",
		// 	count: '',
		// 	query: "?t=patientcarecenters",
		// },
		{
			name: "My Groups",
			href: "/sedher-universe/my-groups",
			count: "",
		},
		{
			name: "My Events",
			href: "/sedher-universe/my-events",
			count: "",
		},
		// {
		// 	name: "My Forums",
		// 	href: "/sedher-universe/my-forums",
		// 	count: '',
		// },
	],
};
