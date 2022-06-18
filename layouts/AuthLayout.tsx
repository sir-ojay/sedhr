import React from "react";
import Left from "@/components/auth/Left";
import Head from "next/head";

type AuthLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<section className='flex items-center w-full h-[100vh]'>
				<Left />
				<main className='w-[55%] h-full'>{children}</main>
			</section>
		</>
	);
};

export default AuthLayout;

AuthLayout.defaultProps = {
	children: null,
	title: "Sedher | Welcome",
};
