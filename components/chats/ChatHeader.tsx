import React from 'react';
import Avatar from "../global/Avatar";

const ChatHeader = () => {
  return (
<>
			<div className='flex items-center justify-center mt-[12px]'>
				<div className='flex flex-col text-center '>
					<Avatar
						size={88}
						name={"Jan Mayer"}
						shape='circle'
						image='/assets/icons/layouts/profile.png'
					/>
					<div>
						<h4 className='font-semibold bg-light-blue   text-dark-900 text-[24px] font-archivo cursor-pointer'>
							Jan Mayer
						</h4>
						<p className='font-normal text-base text-neutral-60'>
							Designer candidate
						</p>
					</div>
				</div>
			</div>
			<div className='mb-5 mt-[102px] relative'>
				<div className='mb-5 border mt-[102px] w-[100%] ' />
				<div className=' relative top-[-44px] mx-auto rounded border border-[#D6DDEB] justify-between  py-3 px-4 flex bg-white w-28'>
					<img
						src='/assets/icons/arrow-down.svg'
						alt='arrow-down'
						title='arrow-down'
					/>
					Today
				</div>
			</div>
		</>
  )
}

export default ChatHeader