import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

type MyItemsNavProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};

const MyItemsNav = ({ navigations }: MyItemsNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper>
			<header className='mb-4'>
				<div title='My Items' className='font-semibold text-lg text-dark-900'>
					My Items
				</div>
			</header>
			<ul>
				<li>
					{navigations?.map((item) => (
						<Link
							key={item.name}
							href={`${item.href}${item.query ? item.query : ""}`}>
							<a
								className={`nav-hover ${
									location.pathname.includes(item.href) ? "active" : null
								} cursor-pointer flex items-center justify-between w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}>
								<div className='leading-[160%] font-medium'>{item.name}</div>
								<div className='leading-[160%] font-medium'>{item.count}</div>
							</a>
						</Link>
					))}
				</li>
			</ul>
		</WhiteWrapper>
	);
};

export default MyItemsNav;

MyItemsNav.defaultProps = {
	navigations: [
		{
			name: "My Products",
			href: "/my-items/my-products",
			count: 45,
			query: "?t=product",
		},
		{
			name: "My Training",
			href: "/my-items/my-training",
			count: 45,
		},
		{
			name: "My Learning",
			href: "/my-items/my-learning",
			count: 45,
		},
	],
};
