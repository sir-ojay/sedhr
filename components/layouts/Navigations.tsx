import { LeftNavigationProps } from "@/types/layouts/LeftNavigationProps";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Navigations = ({ navigations }: LeftNavigationProps) => {
	const location = useRouter();

	return (
		<div className='overflow-y-auto h-[calc(100vh-120px)] pt-1 transition-all ease-in scrollbar-thin hover:scrollbar-thumb-primary hover:scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
			{navigations.map((navigation) => (
				<div key={navigation.name} className='pb-3'>
					{navigation.name && (
						<>
							<hr />
							<div
								aria-label={`${navigation.name.toLowerCase()} navigation group`}
								className='mt-5 mb-3 px-8 text-[#3772ff7f] text-sm font-semibold'>
								{navigation.name}
							</div>
						</>
					)}
					<ul className='flex flex-col gap-[2px] px-4'>
						{navigation.links.map((item) => (
							<li
								key={item.name}
								title={item.name}
								aria-label={`link to ${item.name}`}
								className='flex items-center cursor-pointer'>
								{item.href ? (
									<Link
										href={`${item.href}${item.slug ? item.slug : ""}${
											item.query ? item.query : ""
										}`}>
										<a
											className={`nav-hover ${
												location.pathname.includes(item.href) ? "active" : ""
											} cursor-pointer flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]`}>
											<img
												src={`/assets/icons/layouts/${item.icon}.svg`}
												className='group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]'
											/>
											<div className='leading-[160%] font-medium'>
												{item.name}
											</div>
										</a>
									</Link>
								) : (
									<button
										onClick={() => {
											if (item.name === "Logout") Router.push("/auth/signin");
										}}
										type='button'
										tabIndex={0}
										className='nav-hover flex items-center w-full px-4 py-3 gap-x-4 transition-all ease-in group-hover:text-primary text-dark-100 group-hover:bg-[#E7F6FD] rounded-[5px]'>
										<img
											src={`/assets/icons/layouts/${item.icon}.svg`}
											alt={item.name}
											title={item.name}
											className='group-hover:invert-[25%] group-hover:sepia-[49%] group-hover:saturate-[527%] group-hover:hue-rotate-[137deg] group-hover:brightness-[93%]'
										/>
										<div className='leading-[160%] font-medium'>
											{item.name}
										</div>
									</button>
								)}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Navigations;
