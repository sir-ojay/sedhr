import Input from "@/components/global/Input";
import DefaultLayoutHeader from "@/components/layouts/DefaultLayoutHeader";
import LeftNavigation from "@/components/layouts/LeftNavigation";
import Head from "next/head";
import React from "react";

type DefaultLayoutProps = {
	title: string;
	showHeader?: boolean;
	children?: React.ReactNode;
};

const DefaultLayout = ({
	title,
	children,
	showHeader = true,
}: DefaultLayoutProps) => {
	return (
		<div className='flex w-full'>
			<Head>
				<title>{title}</title>
			</Head>
			<aside className='w-[272px] h-screen'>
				<LeftNavigation />
			</aside>
			<section
				className={`w-[calc(100%-272px)] ${showHeader ? "py-8 pr-9" : null}`}>
				{showHeader && <DefaultLayoutHeader />}
				<main
					className={`min-w-[calc(100%-272px)] ${
						showHeader
							? "p-8 rounded-xl min-h-[calc(100vh-164px)] bg-accents-light-blue"
							: null
					}`}>
					{children}
				</main>
			</section>
		</div>
	);
};

export default DefaultLayout;

DefaultLayout.defaultProps = {
	title: "Sedher",
};
