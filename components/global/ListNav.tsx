import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import WhiteWrapper from "./WhiteWrapper";

type ListNavProps = {
	navs: {
		name: string;
		href: string;
	}[];
	type?: "query" | "slug";
};

const ListNav = ({ navs, type = "query" }: ListNavProps) => {
	const location = useRouter();

	return (
		<WhiteWrapper>
			<ul className='flex items-center gap-5 flex-wrap'>
				{navs?.map((nav, i) => (
					<li key={nav.name}>
						<Link href={nav.href}>
							{type === "query" ? (
								<div
									className={`font-semibold px-5 pb-2 ${
										nav.href.includes(
											`=${Object.values(location?.query)[0]}`
										) ||
										(i === 0 && Object.keys(location?.query).length === 0)
											? "border-b-4 border-b-primary text-dark-900"
											: "text-dark-100"
									}`}>
									{nav.name}
								</div>
							) : (
								<div
									className={`font-semibold px-5 pb-2 ${
										location.pathname.includes(nav.href)
											? "border-b-4 border-b-primary text-dark-900"
											: "text-dark-100"
									}`}>
									{nav.name}
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
		</WhiteWrapper>
	);
};

export default ListNav;
