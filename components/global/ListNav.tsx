import Link from "next/link";
import { useRouter } from "next/router";
import WhiteWrapper from "./WhiteWrapper";

type ListNavProps = {
	navs: {
		name: string;
		href: string;
	}[];
};

const ListNav = ({ navs }: ListNavProps) => {
	const location = useRouter();
	return (
		<WhiteWrapper>
			<ul className='flex items-center gap-5'>
				{navs?.map((nav) => (
					<li key={nav.name}>
						<Link href={nav.href}>
							<a
								className={`font-semibold px-5 pb-2 ${
									location.asPath.includes(nav.href)
										? "border-b-4 border-b-primary text-dark-900"
										: "text-dark-100"
								}`}>
								{nav.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</WhiteWrapper>
	);
};

export default ListNav;
