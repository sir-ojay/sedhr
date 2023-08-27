import React from "react";
import AccountPackage from "./AccountPackage";
import { type } from "os";

type AccountPackagesProps = {
	makePayment: (amount: any) => void;
};



const AccountPackages = ({ makePayment }: AccountPackagesProps) => {
	return (
		<div className='mt-[50px] flex-col flex lg:flex-row items-center justify-center gap-5'>
			<AccountPackage makePayment={makePayment} naming={'Sedher IGNITE '}/>
			<AccountPackage makePayment={makePayment} naming={'Sedher ACCELERATE '}/>
			<AccountPackage makePayment={makePayment} naming={'Sedher TURBO '}/>
		</div>
	);
};

export default AccountPackages;
