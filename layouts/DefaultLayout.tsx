import LeftNavigation from "@/components/layouts/LeftNavigation";
import Head from "next/head";
import React from "react";

type DefaultLayoutProps = {
	title: string;
	children?: React.ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
	return (
		<div className='flex w-full'>
			<Head>
				<title>{title}</title>
			</Head>
			<aside className='w-[272px] h-screen'>
				<LeftNavigation />
			</aside>
			<main className='w-[calc(100%-272px)]'>{children}</main>
		</div>
	);
};

export default DefaultLayout;

DefaultLayout.defaultProps = {
	title: "Sedher",
};
