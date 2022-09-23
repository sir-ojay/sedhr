import React from "react";
import AccountPackage from "./AccountPackage";

const AccountPackages = () => {
	return (
		<div className='mt-[50px] flex-col flex lg:flex-row items-center justify-center gap-5'>
			<AccountPackage />
			<AccountPackage />
			<AccountPackage />
		</div>
	);
};

export default AccountPackages;
