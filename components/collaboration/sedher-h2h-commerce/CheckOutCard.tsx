import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import React from "react";
type CheckOutCardProps = {
	title: string;
	body: string;
};
const CheckOutCard = ({ title, body }: CheckOutCardProps) => {
	return (
		<WhiteWrapper>
			<div>
				<h4 className='text-[#2A2069] font-bold text-base'> {title}</h4>
				<div className='flex items-center justify-between'>
					<p className='w-[50%]'>{body}</p>
					<Button className='w-[171px]' theme='outline'>
						select
					</Button>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default CheckOutCard;
