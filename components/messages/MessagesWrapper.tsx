import React from "react";
import Input from "../global/Input";
import WhiteWrapper from "../global/WhiteWrapper";
import SingleMessage from "./SingleMessage";

type MessagesWrapperProps = {
	children: React.ReactNode;
};

const MessagesWrapper = ({ children }: MessagesWrapperProps) => {
	return (
		<div className='grid grid-cols-6 gap-8'>
			<section className='col-span-2 space-y-6 '>
				<div className='sticky top-[164px]'>
					<WhiteWrapper>
						<Input type='search' placeholder='Search...' />
						{[1, 2, 3, 4, 6, 6, 7].map((card) => (
							<SingleMessage card={card} key={card} />
						))}
					</WhiteWrapper>
				</div>
			</section>
			<section className='col-span-4  space-y-6'>{children}</section>
		</div>
	);
};

export default MessagesWrapper;
