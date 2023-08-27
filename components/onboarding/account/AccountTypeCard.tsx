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
		<article className='w-[256px] bg-white p-5 rounded-[5px] font-epilogue '>
			<div
				className='w-[30px] h-[30px] md:w-[65px] md:h-[65px] rounded-full mb-4 flex justify-center items-center'
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
				<h2 className='text-dark-900 font-bold text-[16px] leading-[150%]'>
					{title}
				</h2>
				<p className='text-dark-100  md:text-base leading-[150%]'>
					{description}
					<span className='text-secondary text-sm cursor-pointer'> read more....</span>
				</p>
			</div>
			<Button
				type='button'
				className='w-full text-white text-sm mt-4 rounded-sm'
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
