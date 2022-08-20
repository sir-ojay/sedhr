import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

const payment = () => {
	return (
		<DefaultLayout>
			<div className='flex justify-between items-center'>
				<GoBackButton label='Payment Method ' />
				<Button
					theme='plain'
					icon='video2'
					size='sm'
					className='w-[210px] h-fit py-3 bg-primary rounded-[5px] text-white'>
					Watch Tutorial
				</Button>
			</div>
		</DefaultLayout>
	);
};

export default payment;
