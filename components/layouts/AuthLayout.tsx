import React from "react";
import Left from "@/components/auth/Left";

type AuthLayoutProps = {
	children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<section className='flex items-center w-full h-[100vh]'>
			<Left />
			<>{children}</>
		</section>
	);
};

export default AuthLayout;
