import Link from "next/link";
import Router from "next/router";
import React from "react";

type OnboardingHeaderProps = {
	steps: {
		title: string;
		step?: Number;
		icon?: string;
		description?: string;
	}[];
	step: number;
	children?: React.ReactNode;
};

const OnboardingHeader = ({ step, steps, children }: OnboardingHeaderProps) => {
	return (
		<div>
			<nav className='bg-white'>
				<ul className='bg-white pt-16 pb-4 flex justify-between items-center gap-5 px-7 w-[calc(100%-272px)] fixed right-0'>
					{steps.map((_step, index) => (
						<li
							key={_step.title + index}
							className={`${_step.title === "dash" ? "flex-1" : null}`}>
							{_step.title !== "dash" ? (
								<Link href={`/onboarding/${_step.title.toLowerCase()}`}>
									<a className='flex gap-4 cursor-pointer'>
										<div
											className={`w-14 h-14 ${
												step === _step.step ? "bg-primary" : "bg-[#D4EBEB]"
											} rounded-full flex justify-center items-center`}>
											<img
												className={`${
													step === _step.step ? "tab-active" : null
												}`}
												src={`/assets/icons/layouts/onboarding-layout/${_step.icon}.svg`}
												alt={_step.icon}
											/>
										</div>
										<div>
											<div className='font-semibold text-lg font-epilogue leading-[160%] text-dark-900'>
												{_step.title}
											</div>
											<div
												className={`font-epilogue ${
													step === _step.step
														? "text-secondary"
														: "text-[#899A9A]"
												}`}>
												{_step.description}
											</div>
										</div>
									</a>
								</Link>
							) : (
								<>
									{index !== steps.length - 1 && (
										<div key={index} className='h-[1px] bg-[#D4EBEB]' />
									)}
								</>
							)}
						</li>
					))}
				</ul>
			</nav>

			<main className='py-[140px] bg-[#e7f6fd66] p-9'>{children}</main>
		</div>
	);
};

export default OnboardingHeader;

OnboardingHeader.defaultProps = {
	steps: [
		{
			title: "Account",
			description: "Step 1/4",
			icon: "account",
			step: 1,
		},
		{
			title: "dash",
		},
		{
			title: "Payment",
			description: "Step 2/4",
			icon: "payment",
			step: 2,
		},
		{
			title: "dash",
		},
		{
			title: "Verification",
			description: "Step 3/4",
			// icon: "verification",
			icon: "payment",
			step: 3,
		},
		{
			title: "dash",
		},
		{
			title: "Start",
			description: "Step 4/4",
			// icon: "start",
			icon: "payment",
			step: 4,
		},
	],
};
