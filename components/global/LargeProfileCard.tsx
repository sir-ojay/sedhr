import Cookies from "js-cookie";
import Link from "next/link";
import React, { useState } from "react";

import Avatar from "./Avatar";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";

type LargeProfileCardProps = {
	title: string;
	avatarShape?: "circle" | "square";
	editable?: boolean;
	showEditIcon?: boolean;
	editExperience?: () => void;
	addExperience?: () => void;
	addExp?: boolean;
	addEdu?: boolean;
	education?: any;
	type:
		| "event"
		| "group"
		| "experience"
		| "education"
		| "licenses-certifications";
};

const LargeProfileCard = ({
	title,
	type,
	avatarShape = "square",
	editable,
	showEditIcon,
	addExp,
	addEdu,
	education,
	editExperience,
}: // addExperience,
LargeProfileCardProps) => {
	return (
		<WhiteWrapper title={title} className='relative'>
			{editable && (
				<React.Fragment>
					<button className='absolute right-[55px] top-5'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0_3166_71931)'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z'
									fill='#4C4475'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z'
									fill='#4C4475'
								/>
							</g>
							<defs>
								<clipPath id='clip0_3166_71931'>
									<rect width='24' height='24' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</button>
				</React.Fragment>
			)}

			{(type === "event" || type === "group") && (
				<article className='flex gap-6'>
					<Avatar name='Salami Tayo' size={80} />
					<div>
						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<div className='font-semibold text-dark-900'>Salami Tayo</div>
								<Button
									icon='blue-plus'
									theme='plain'
									size='sm'
									className='text-primary'>
									Follow
								</Button>
							</div>
							<div className='flex items-center gap-2'>
								<div className='text-sm text-dark-100'>Physiotherapists</div>
								<svg
									width='4'
									height='4'
									viewBox='0 0 4 4'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<circle cx='2' cy='2' r='2' fill='#4C4475' />
								</svg>
								<div className='text-sm text-accents-brown'>HCP</div>
							</div>
							<p className='font-epilogue text-dark-900 leading-[160%]'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
								illo ducimus rem, necessitatibus quasi voluptatum nobis
								inventore molestiae deleniti in quae perferendis excepturi
								distinctio. Fugiat ut dolorem voluptas voluptatibus
								reprehenderit.
							</p>
						</div>
					</div>
				</article>
			)}

			{(type == "experience" ||
				type === "education" ||
				type === "licenses-certifications") && (
				<>
					{[1, 2].map((i) => (
						<article
							key={i}
							className={`flex gap-6 py-6 ${
								i !== 2 ? "border-b border-[#e0dada]" : ""
							}`}>
							<Avatar name='Medical Doctor' size={80} shape={avatarShape} />
							<div>
								<div className='space-y-2'>
									<div className='font-semibold text-title'>Medical Doctor</div>
									{showEditIcon && (
										<button className='absolute right-5 '>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M22 7.24002C22.0007 7.10841 21.9755 6.97795 21.9258 6.85611C21.876 6.73427 21.8027 6.62346 21.71 6.53002L17.47 2.29002C17.3765 2.19734 17.2657 2.12401 17.1439 2.07425C17.0221 2.02448 16.8916 1.99926 16.76 2.00002C16.6284 1.99926 16.4979 2.02448 16.3761 2.07425C16.2542 2.12401 16.1434 2.19734 16.05 2.29002L13.22 5.12002L2.28999 16.05C2.1973 16.1435 2.12398 16.2543 2.07421 16.3761C2.02445 16.4979 1.99923 16.6284 1.99999 16.76V21C1.99999 21.2652 2.10534 21.5196 2.29288 21.7071C2.48042 21.8947 2.73477 22 2.99999 22H7.23999C7.37991 22.0076 7.51988 21.9857 7.65081 21.9358C7.78173 21.8858 7.9007 21.8089 7.99999 21.71L18.87 10.78L21.71 8.00002C21.8013 7.9031 21.8756 7.79155 21.93 7.67002C21.9396 7.59031 21.9396 7.50973 21.93 7.43002C21.9347 7.38347 21.9347 7.33657 21.93 7.29002L22 7.24002ZM6.82999 20H3.99999V17.17L13.93 7.24002L16.76 10.07L6.82999 20ZM18.17 8.66002L15.34 5.83002L16.76 4.42002L19.58 7.24002L18.17 8.66002Z'
													fill='#515B6F'
												/>
											</svg>
										</button>
									)}
									<div className='flex items-center gap-2'>
										<div className='text-sm text-title'>Eko hospital</div>
										<svg
											width='4'
											height='4'
											viewBox='0 0 4 4'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<circle cx='2' cy='2' r='2' fill='#4C4475' />
										</svg>
										<div className='text-sm text-dark-100'>Full-Time</div>
										<svg
											width='4'
											height='4'
											viewBox='0 0 4 4'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<circle cx='2' cy='2' r='2' fill='#4C4475' />
										</svg>
										<div className='text-sm text-dark-100'>
											Jun 2019 - Present
										</div>
									</div>
									<div className='text-sm text-dark-100'>Lagos ikeja</div>
									<p className='font-epilogue text-title leading-[160%]'>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Veniam illo ducimus rem, necessitatibus quasi voluptatum
										nobis inventore molestiae deleniti in quae perferendis
										excepturi distinctio. Fugiat ut dolorem voluptas
										voluptatibus reprehenderit.
									</p>
								</div>
							</div>
						</article>
					))}
					<div className='flex justify-center mt-5'>
						<Button
							tag='a'
							theme='secondary'
							underline={false}
							className='font-semibold'>
							Show 3 more experiences
						</Button>
					</div>
				</>
			)}
		</WhiteWrapper>
	);
};

export default LargeProfileCard;
