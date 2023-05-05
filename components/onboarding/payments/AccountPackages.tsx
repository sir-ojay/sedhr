import React from "react";
import AccountPackage from "./AccountPackage";

type AccountPackagesProps = {
	makePayment: (amount: any) => void;
};

const AccountPackages = ({ makePayment }: AccountPackagesProps) => {
	return (
		<div className='mt-[50px] flex-col flex lg:flex-row items-center justify-center gap-5'>
			<AccountPackage makePayment={makePayment} />
			<AccountPackage makePayment={makePayment} />
			<AccountPackage makePayment={makePayment} />
		</div>
	);
};

export default AccountPackages;
