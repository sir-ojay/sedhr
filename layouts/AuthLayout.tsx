import React from "react";
import Left from "@/components/auth/Left";
import Head from "next/head";

type AuthLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<>
			<Head>
				<title>Sedher</title>
			</Head>
			<section className='flex items-center w-full h-[100vh]'>
				<Left />
				<>{children}</>
			</section>
		</>
	);
};

export default AuthLayout;
