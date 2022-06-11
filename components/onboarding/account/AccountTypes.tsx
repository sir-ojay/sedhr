import { AccountTypeCardProps } from "@/types/onboarding/account/AccountTypeCardProps";
import React from "react";
import AccountTypeCard from "./AccountTypeCard";

type AccountTypesProps = {
	types: AccountTypeCardProps[];
};

const AccountTypes = ({ types }: AccountTypesProps) => {
	return (
		<section className='w-full flex flex-wrap gap-16 justify-center items-center'>
			{types.map((type) => (
				<AccountTypeCard key={type.title} {...type} />
			))}
		</section>
	);
};

export default AccountTypes;

AccountTypes.defaultProps = {
	types: [
		{
			title: "Patient care centres",
			description:
				"Complete details about your company, set roles and permission",
			buttonColor: "#7F4433",
			iconColour: "#7F44331A",
			icon: "patient-care-centre",
		},
		{
			title: "Business",
			description:
				"Complete details about your company, set roles and permission",
			buttonColor: "#4CAF50",
			iconColour: "#4CAF5033",
			icon: "business",
		},
		{
			title: "HCP’s",
			description:
				"Complete details about your company, set roles and permission",
			buttonColor: "#FF5630E5",
			iconColour: "#FF563033",
			icon: "hcp",
		},
		{
			title: "Sedher Luminaries ",
			description:
				"Complete details about your company, set roles and permission",
			buttonColor: "#0235DD",
			iconColour: "#95BBFE4D",
			icon: "sedher-luminaries",
		},
		{
			title: "Not for Profit",
			description:
				"Complete details about your company, set roles and permission",
			buttonColor: "#11747D",
			iconColour: "#95BBFE4D",
			icon: "not-for-profit",
		},
	],
};
