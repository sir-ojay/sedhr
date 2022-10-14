import Input from "@/components/global/Input";
import DefaultLayoutHeader from "@/components/layouts/DefaultLayoutHeader";
import LeftNavigation from "@/components/layouts/LeftNavigation";
import Head from "next/head";
import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

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
	const [isOpen, setOpen] = useState(false);

	const closeModal = (e: any) => {
		if (e.target.classList.contains("overlay")) {
			setOpen(false);
		}
	};

	return (
		<div className='flex w-full'>
			<Head>
				<title>{title}</title>
			</Head>
			{isOpen && (
				<div
					onClick={closeModal}
					className='fixed-top z-40 left-0 overlay bg-[#061A1480] w-screen h-screen'
				/>
			)}
			<aside
				className={`xl:hidden h-screen z-50 ${
					isOpen
						? "fixed top-0 left-0 transform transition-transform"
						: "-translate-x-[100vw] xl:translate-x-0"
				}`}>
				<LeftNavigation isOpen={isOpen} setOpen={setOpen} />
			</aside>
			<aside className='hidden xl:block w-[272px] h-screen'>
				<LeftNavigation />
			</aside>
			<section
				className={`w-full xl:w-[calc(100%-272px)] ${
					showHeader ? "py-16 xl:py-8 xl:pr-9" : ""
				}`}>
				{showHeader && (
					<DefaultLayoutHeader isOpen={isOpen} setOpen={setOpen} />
				)}
				<main
					className={`min-w-[calc(100%-272px)] ${
						showHeader
							? "p-6 md:p-8 rounded-xl min-h-[100vh] bg-accents-light-blue xl:mt-[100px]"
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
