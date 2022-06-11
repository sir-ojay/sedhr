import { LeftNavigationProps } from "@/types/layouts/LeftNavigationProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigations from "./Navigations";

const LeftNavigation = ({ navigations }: LeftNavigationProps) => {
	return (
		<nav className='bg-white fixed top-0 left-0 w-[272px] h-full'>
			<div className='ml-[62px] my-[32px]'>
				<Link href='/'>
					<a>
						<Image
							src='/assets/icons/logo.svg'
							width={125}
							height={53}
							alt='sedher'
						/>
					</a>
				</Link>
			</div>
			<Navigations navigations={navigations} />
		</nav>
	);
};

export default LeftNavigation;

LeftNavigation.defaultProps = {
	navigations: [
		{
			name: null,
			links: [
				{
					name: "Feeds",
					icon: "feeds",
					href: "/feeds",
				},
				{
					name: "My Connection",
					icon: "my-connection",
					href: "/my-connection",
				},
				{
					name: "My Item",
					icon: "my-item",
					href: "/my-item",
				},
				{
					name: "Sedher Universe",
					icon: "sedher-universe",
					href: "/sedher-universe",
				},
				{
					name: "More Sedher",
					icon: "more",
					href: null,
				},
			],
		},
		{
			name: "SERVICES",
			links: [
				{
					name: "Connection",
					icon: "connection",
					href: "/connection",
				},
				{
					name: "Collaboration",
					icon: "collaboration",
					href: "/collaboration",
				},
				{
					name: "Sedher Finance",
					icon: "sedher-finance",
					href: "/sedher-finance",
				},
			],
		},
		{
			name: "ACCOUNT",
			links: [
				{
					name: "Marketplace",
					icon: "marketplace",
					href: "/marketplace",
				},
				{
					name: "Notifications",
					icon: "notifications",
					href: "/notifications",
				},
				{
					name: "Messages",
					icon: "messages",
					href: "/messages",
				},
				{
					name: "Profile",
					icon: "profile",
					href: "/profile",
				},
			],
		},
		{
			name: "SETTINGS",
			links: [
				{
					name: "Settings",
					icon: "settings",
					href: "/settings",
				},
				{
					name: "Help center",
					icon: "help-center",
					href: "/help-center",
				},
				{
					name: "Logout",
					icon: "logout",
					href: null,
				},
			],
		},
	],
};
