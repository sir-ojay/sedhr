import { AccountTypeCardProps } from "@/types/onboarding/account/AccountTypeCardProps";
import { types } from "data/accountTypes";
import { useRouter } from "next/router";

type AccountTypesProps = {
	types: AccountTypeCardProps[];
};

const AccountTypesHorizontalList = ({ types }: AccountTypesProps) => {
	const router = useRouter();

	const { type: accountType } = router.query;

	return (
		<div className='mt-10 w-full'>
			<ul className='flex items-center flex-wrap justify-center gap-3 overflow-auto w-full'>
				{types?.map((type, index) => (
					<li
						className={`w-[47%] md:w-[250px] text-sm p-3 md:p-[18px] text-center font-semibold md:text-lg rounded-[5px] ${
							accountType?.toString() === type.title.toLowerCase()
								? "bg-primary text-white"
								: "bg-white text-neutral-80"
						}`}
						key={index}>
						{type.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AccountTypesHorizontalList;

AccountTypesHorizontalList.defaultProps = {
	types: types,
};
