import Button from "@/components/global/Button";
import { AccountTypeCardProps } from "@/types/onboarding/account/AccountTypeCardProps";
import Router from "next/router";

const AccountTypeCard = ({
	title,
	description,
	icon,
	buttonColor,
	iconColour,
}: AccountTypeCardProps) => {
	const gotoPayment = () => {
		Router.push(`/onboarding/payment?type=${title.toLowerCase()}`);
	};
	return (
		<div className='w-[334px] bg-white p-5 rounded-[5px] font-epilogue space-y-5'>
			<div
				className='w-[85px] h-[85px] rounded-full mb-4 flex justify-center items-center'
				style={{
					backgroundColor: `${iconColour}`,
				}}>
				<img src={`/assets/icons/onboarding/account/${icon}.svg`} alt='' />
			</div>
			<div>
				<h2 className='text-dark-900 font-bold text-lg leading-[150%]'>
					{title}
				</h2>
				<p className='text-dark-100 leading-[150%]'>
					Complete details about your company, set roles and permission
					<span className='text-secondary cursor-pointer'> read more....</span>
				</p>
			</div>
			<Button
				className='w-full text-white'
				style={{
					backgroundColor: `${buttonColor}`,
				}}
				size='sm'
				theme='plain'
				onClick={gotoPayment}>
				Setup
			</Button>
		</div>
	);
};

export default AccountTypeCard;
