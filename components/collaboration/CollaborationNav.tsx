import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

type CollaborationNavProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
	title: string;
};

const CollaborationNav = ({
	navigations,
	title = "title",
}: CollaborationNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper className='sticky top-[164px]'>
			<section>
				<header className='mb-4'>
					<div title={title} className='font-semibold text-lg text-dark-900'>
						{title}
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
			</section>
		</WhiteWrapper>
	);
};

export default CollaborationNav;
