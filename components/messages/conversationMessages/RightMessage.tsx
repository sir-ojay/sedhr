import Avatar from "@/components/global/Avatar";
import React from "react";

const RightMessage = () => {
	return (
		<div className='flex justify-end mb-4 space-x-6'>
			<div className='max-w-sm  '>
				<h6 className='text-right font-semibold text-base py-2'>You </h6>
				<p className=' bg-[#F8F8FD] px-4 py-3'>
					Hey Jan, I wanted to reach out because we saw your work contributions
					and were impressed by your work.{" "}
				</p>
				<p className='font-normal text-right py-2 text-base text-neutral-60'>
					12 mins ago
				</p>
			</div>
			<Avatar
				size={44}
				name={"Jan Mayer"}
				shape='circle'
				image='/assets/icons/layouts/profile.png'
			/>
		</div>
	);
};

export default RightMessage;
