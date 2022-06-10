import LeftNavigation from "@/components/layouts/LeftNavigation";
import React from "react";

type DefaultLayoutProps = {
	children?: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<div className='flex w-full'>
			<div className='w-[272px] h-screen'>
				<LeftNavigation />
			</div>
			<div className='w-[calc(100%-272px)] h-[150vh]'>{children}</div>
		</div>
	);
};

export default DefaultLayout;
