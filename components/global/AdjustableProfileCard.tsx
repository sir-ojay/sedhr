import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";
import { motion } from "framer-motion";
import Router from "next/router";
import SmallAvatars from "./SmallAvatars";
import Cookies from "js-cookie";
import {
	useAcceptFriendRequestMutation,
	useFollowRequestMutation,
	useRemoveConnectionMutation,
	useSendFriendRequestMutation,
} from "@/services/connections";
import Link from "next/link";

type AdjustableProfileCardProps = {
	name: string;
	description: string;
	accountType?: string;
	image?: string;
	grid: number;
	cardType: "connect" | "connectAccept" | "page" | "event" | "group";
	connected?: boolean;
	href?: string;
	username?: string;
};

const AdjustableProfileCard = ({
	name,
	description,
	accountType,
	image = "",
	cardType,
	grid,
	connected = false,
	href = "",
	username = "",
}: AdjustableProfileCardProps) => {
	const token: any = Cookies.get("sedherToken");

	const [sendRequest, { isLoading: isLoadingFriendRequest }] =
		useSendFriendRequestMutation();

	const [acceptRequest, { isLoading: isLoadingAcceptFriendRequest }] =
		useAcceptFriendRequestMutation();

	const [followRequest, { isLoading: isLoadingFollowRequest }] =
		useFollowRequestMutation();

	const [removeConnection, { isLoading: isLoadingRemoveConnection }] =
		useRemoveConnectionMutation();

	return (
		<motion.article layout>
			<WhiteWrapper>
				<div
					className={`flex ${
						grid === 1 ? "flex-row items-center" : "flex-col"
					} justify-between gap-6`}>
					{(cardType === "connect" ||
						cardType === "page" ||
						cardType === "connectAccept") && (
						<div className='flex gap-6 items-center'>
							<Avatar image={image} name={name} size={64} href={href} />
							<div>
								<div className='space-y-2'>
									<div className='font-semibold text-dark-900'>{name}</div>
									<div className='flex items-center gap-2'>
										<div className='text-sm text-dark-100'>{description}</div>
										<svg
											width='4'
											height='4'
											viewBox='0 0 4 4'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<circle cx='2' cy='2' r='2' fill='#4C4475' />
										</svg>
										<div className='text-sm text-accents-brown'>
											{accountType}
										</div>
									</div>
									{/* <div className='flex items-center gap-2'>
										<svg
											width='16'
											height='15'
											viewBox='0 0 16 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z'
												fill='#FAAD1F'
											/>
										</svg>
										<div className='text-sm font-semibold text-[#FAAD1F]'>
											4.9{" "}
											<span className='text-dark-100 font-normal'>(25)</span>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					)}
					{(cardType === "event" || cardType === "group") && (
						<div className='flex gap-6 items-center'>
							<Avatar
								image={image}
								name={name}
								shape='square'
								rounded
								size={64}
								href={href}
							/>
							<div>
								<div className='space-y-2'>
									<Link
										href={href}
										className='font-semibold text-dark-900 hover:underline'>
										{name}
									</Link>
									<div className='text-sm text-dark-100'>{description}</div>
									<SmallAvatars name='Richard Ingwe' label='+300 seen' />
								</div>
							</div>
						</div>
					)}
					<div
						className={`${
							grid === 1 && connected && cardType === "connect"
								? "w-[240px]"
								: grid === 1
								? "w-[164px]"
								: "w-full"
						} flex flex-col gap-3 items-center`}>
						{(cardType === "connect" ||
							cardType === "page" ||
							cardType === "connectAccept") && (
							<>
								{cardType === "connect" && !connected ? (
									<Button
										onClick={() => sendRequest({ token, username })}
										size='sm'
										loading={isLoadingFriendRequest}
										className='w-full'>
										Connect
									</Button>
								) : cardType === "page" && !connected ? (
									<Button
										onClick={() => followRequest({ token, username })}
										size='sm'
										loading={isLoadingFollowRequest}
										className='w-full'>
										Follow
									</Button>
								) : cardType === "connectAccept" && !connected ? (
									<Button
										onClick={() => acceptRequest({ token, username })}
										size='sm'
										loading={isLoadingAcceptFriendRequest}
										className='w-full'>
										Accept Connection
									</Button>
								) : (
									<Button
										onClick={() => {
											cardType === "connect" &&
												removeConnection({ token, username });
										}}
										size='sm'
										theme='outline'
										className='w-full'>
										{cardType === "connect" ? "Remove Connection" : "Unfollow"}
									</Button>
								)}
								{/* {cardType === "page" && !connected ? (
									<Button size='sm' className='w-full'>
										Follow
									</Button>
								) : (
									<Button size='sm' theme='outline' className='w-full'>
										Remove Connection
									</Button>
								)} */}
								{connected ||
									(cardType !== "connectAccept" && (
										<Button size='sm' theme='outline' className='w-full'>
											Ignore
										</Button>
									))}
							</>
						)}
						{(cardType === "group" || cardType === "event") && (
							<Button
								onClick={() => Router.push(href)}
								size='sm'
								theme='outline'
								className='w-full'>
								View details
							</Button>
						)}
					</div>
				</div>
			</WhiteWrapper>
		</motion.article>
	);
};

export default AdjustableProfileCard;
