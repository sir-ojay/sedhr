import WhiteWrapper from "@/components/global/WhiteWrapper";
import Link from "next/link";
import { useRouter } from "next/router";

type CommunicationNavProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};

const CommunicationNav = ({ navigations }: CommunicationNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper className='sticky top-[164px]'>
			<section>
				<header className='mb-4'>
					<div title='My Items' className='font-semibold text-lg text-dark-900'>
						My Communication
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

export default CommunicationNav;

CommunicationNav.defaultProps = {
	navigations: [
		{
			name: "My Groups",
			href: "/collaboration/communication/my-groups",
			count: 45,
		},
		{
			name: "My Events",
			href: "/collaboration/communication/my-events",
			count: 45,
		},
		// {
		// 	name: "My Forums",
		// 	href: "/collaboration/communication/my-forums",
		// 	count: 45,
		// },
	],
};
