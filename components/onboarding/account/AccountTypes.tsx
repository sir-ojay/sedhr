import { AccountTypeCardProps } from "@/types/onboarding/account/AccountTypeCardProps";
import { types } from "data/accountTypes";
import React from "react";
import AccountTypeCard from "./AccountTypeCard";

type AccountTypesProps = {
	types: AccountTypeCardProps[];
};

const AccountTypes = ({ types }: AccountTypesProps) => {
	return (
		<section className='w-full flex md:gap-6 sm:justify-center  justify-between '>
			{types.map((type) => (
				<AccountTypeCard key={type.title} {...type} />
			))}
		</section>
	);
};

export default AccountTypes;

AccountTypes.defaultProps = {
	types: types,
};
