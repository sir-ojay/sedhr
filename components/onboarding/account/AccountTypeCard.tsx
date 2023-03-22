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
		<article className='w-[334px] bg-white p-5 rounded-[5px] font-epilogue space-y-5'>
			<div
				className='w-[60px] h-[60px] md:w-[85px] md:h-[85px] rounded-full mb-4 flex justify-center items-center'
				style={{
					backgroundColor: `${iconColour}`,
				}}>
				<img
					src={`/assets/icons/onboarding/account/${icon}.svg`}
					className='w-[50%] md:w-auto'
					alt=''
				/>
			</div>
			<div>
				<h2 className='text-dark-900 font-bold text-lg leading-[150%]'>
					{title}
				</h2>
				<p className='text-dark-100 text-sm md:text-base leading-[150%]'>
					{/* Complete details about your company, set roles and permission */}
					{description}
					<span className='text-secondary cursor-pointer'> read more....</span>
				</p>
			</div>
			<Button
				type='button'
				className='w-full text-white'
				style={{
					backgroundColor: `${buttonColor}`,
				}}
				size='sm'
				theme='plain'
				onClick={gotoPayment}>
				Setup
			</Button>
		</article>
	);
};

export default AccountTypeCard;
