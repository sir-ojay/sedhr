import {
	useCommentMutation,
	useLazyGetCommentsQuery,
	useLikeAPostMutation,
	useUnLikeAPostMutation,
} from "@/services/feed";
import { LoginResponse } from "@/types/auth/auth";
import { Comment, CommentRequest, Post } from "@/types/feed";
import Cookies from "js-cookie";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import Input from "../global/Input";
import WhiteWrapper from "../global/WhiteWrapper";

const FeedPost = ({
	commentsCount,
	content,
	contentType,
	author,
	attachments,
	createdAt,
	updatedAt,
	liked,
	likes,
	id,
}: Post) => {
	const [user, setUser] = useState<LoginResponse>();
	const [fullContent, setFullContent] = useState(false);
	const [likesCount, setLikesCount] = useState(likes);
	const [newCommentCount, setNewCommentCount] = useState(commentsCount);
	const [isLiked, setIsLiked] = useState(liked);
	const [showComments, setShowComments] = useState(false);
	const [commentValue, setCommentValue] = useState();
	const [comments, setComments] = useState<Comment[]>([]);

	const [likeAPost] = useLikeAPostMutation();

	const [UnLikeAPost] = useUnLikeAPostMutation();

	const token: any = Cookies.get("sedherToken");

	const handleLikeAPost = async () => {
		try {
			setLikesCount(likesCount + 1);
			setIsLiked(true);
			await likeAPost({ token, id }).unwrap();
		} catch (err: any) {
			setLikesCount(likesCount - 1);
			setIsLiked(false);
			console.log(err);
		}
	};

	const handleUnLikeAPost = async () => {
		try {
			setLikesCount(likesCount - 1);
			setIsLiked(false);
			await UnLikeAPost({ token, id }).unwrap();
		} catch (err: any) {
			setLikesCount(likesCount + 1);
			setIsLiked(true);
			console.log(err);
		}
	};

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			comment: "",
		},
	});

	const {
		handleSubmit,
		setValue,
		getValues,
		formState: { errors, isValid },
	} = methods;

	const [comment] = useCommentMutation();

	const onSubmit: SubmitHandler<CommentRequest | any> = async (data) => {
		try {
			const details = {
				token: token as string,
				id,
				body: {
					content: data.comment,
				},
			};

			const result = await comment(details as any).unwrap();
			setCommentValue(getValues("comment") as any);
			setValue("comment", "");
			setNewCommentCount(newCommentCount + 1);
		} catch (err: any) {
			toast.error(err?.data?.message);
			setNewCommentCount(newCommentCount - 1);
		}
	};

	const [getComments, result] = useLazyGetCommentsQuery();

	const { data, error, isLoading, isSuccess, isFetching } = result;

	useEffect(() => {
		if (showComments) {
			getComments({ token, id });
		}
	}, [showComments]);

	useEffect(() => {
		data && setComments(data?.data.comments);
	}, [isSuccess, data]);

	return (
		<WhiteWrapper>
			<article>
				<header className='flex justify-between items-start'>
					<div className='flex gap-3 mb-4'>
						<div className='hidden xl:block'>
							<Avatar
								shape='square'
								name={author?.name || "SDR"}
								href={`/profile/${author?.username}`}
								size={64}
							/>
						</div>
						<div className='xl:hidden'>
							<Avatar
								shape='square'
								name={author?.name || "SDR"}
								href={`/profile/${author?.username}`}
								size={48}
							/>
						</div>
						<div className='space-y-[1px]'>
							<Link
								href={`/profile/${author?.username}`}
								className='font-semibold text-sm xl:text-base text-dark-900 hover:underline'>
								{author.name}
							</Link>
							<div className='text-xs xl:text-sm text-dark-100'></div>
							<div className='text-xs xl:text-sm capitalize text-accents-brown'>
								{author.accountType === "hcp"
									? author.accountType?.toUpperCase()
									: author.accountType}{" "}
								{author.company && `- ${author.company}`}
							</div>
							<div className='text-xs xl:text-sm text-dark-100'>
								{moment(createdAt).fromNow()}
							</div>
						</div>
					</div>
					{/* <button type='button' className='transform rotate-90'>
						<img
							src='/assets/icons/layouts/more.svg'
							alt='see more'
							title='see more'
						/>
					</button> */}
				</header>
				<section className='space-y-5'>
					<p className='text-sm xl:text-base leading-[160%]'>
						{!fullContent && content.length > 220
							? content.slice(0, 220)
							: content}
						{content.length > 220 && (
							<Button
								tag='a'
								onClick={(e) => {
									e.preventDefault();
									setFullContent((state) => !state);
								}}
								underline={false}
								className='hover:underline whitespace-nowrap'>
								{!fullContent ? "...see more" : "...see less"}
							</Button>
						)}
					</p>
					<div className='rounded-xl w-full h-auto'>
						{contentType === "image" && (
							<Image
								width={500}
								height={500}
								className='rounded-lg xl:rounded-xl w-full h-auto'
								src={attachments[0]?.url}
								alt='post'
							/>
						)}
					</div>
					<div className='flex items-center justify-between'>
						<div className='space-x-4 text-xs text-dark-100 xl:text-base'>
							<span>{likesCount ?? 0} Likes</span>
							<span>{newCommentCount ?? 0} Comments</span>
						</div>
						<button
							onClick={isLiked ? handleUnLikeAPost : handleLikeAPost}
							type='button'
							className='flex items-center gap-1 p-2 rounded-lg hover:bg-accents-light-blue'>
							<div>
								<svg
									width='18'
									height='18'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_4121_38466)'>
										<path
											d='M4.66667 7.33317V12.6665C4.66667 12.8433 4.59643 13.0129 4.4714 13.1379C4.34638 13.2629 4.17681 13.3332 4 13.3332H2.66667C2.48986 13.3332 2.32029 13.2629 2.19526 13.1379C2.07024 13.0129 2 12.8433 2 12.6665V7.99984C2 7.82303 2.07024 7.65346 2.19526 7.52843C2.32029 7.40341 2.48986 7.33317 2.66667 7.33317H4.66667ZM4.66667 7.33317C5.37391 7.33317 6.05219 7.05222 6.55228 6.55212C7.05238 6.05202 7.33333 5.37375 7.33333 4.6665V3.99984C7.33333 3.64622 7.47381 3.30708 7.72386 3.05703C7.97391 2.80698 8.31304 2.6665 8.66667 2.6665C9.02029 2.6665 9.35943 2.80698 9.60948 3.05703C9.85952 3.30708 10 3.64622 10 3.99984V7.33317H12C12.3536 7.33317 12.6928 7.47365 12.9428 7.72369C13.1929 7.97374 13.3333 8.31288 13.3333 8.6665L12.6667 11.9998C12.5708 12.4088 12.3889 12.76 12.1484 13.0005C11.908 13.241 11.6219 13.3577 11.3333 13.3332H6.66667C6.13623 13.3332 5.62753 13.1225 5.25245 12.7474C4.87738 12.3723 4.66667 11.8636 4.66667 11.3332'
											stroke={isLiked ? "#3772FF" : "#616A6A"}
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_4121_38466'>
											<rect width='16' height='16' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>
							<span
								className={`text-sm xl:text-base font-medium ${
									isLiked ? "text-primary" : "text-dark-100 "
								}`}>
								{isLiked ? "Liked" : "Like"}
							</span>
						</button>
					</div>
					<hr />
					{!showComments && (
						<div className='flex items-center justify-between'>
							<button
								onClick={() => {
									setShowComments(true);
								}}
								type='button'
								className='flex items-center gap-2 xl:gap-4'>
								<div>
									<img
										src='/assets/icons/feed/comment.svg'
										alt='see more'
										title='see more'
									/>
								</div>
								<span className='text-dark-100 text-xs xl:text-sm font-medium'>
									Comment
								</span>
							</button>
							{/* <button
								type='button'
								className='flex items-center gap-2 xl:gap-4'>
								<div>
									<img
										src='/assets/icons/feed/share.svg'
										alt='share'
										title='share'
									/>
								</div>
								<span className='text-dark-100 text-xs xl:text-sm font-medium'>
									Share
								</span>
							</button> */}
						</div>
					)}
					{showComments && (
						<div>
							<FormProvider {...methods}>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex items-center gap-6'>
									<div>
										<div className='hidden xl:block'>
											<Avatar
												name={user?.name || "SDR"}
												size={48}
												href={`/profile/${user?.username}`}
												image='/assets/icons/layouts/profile.png'
											/>
										</div>
										<div className='xl:hidden'>
											<Avatar
												name={user?.name || "SDR"}
												size={35}
												href={`/profile/${user?.username}`}
												image='/assets/icons/layouts/profile.png'
											/>
										</div>
									</div>
									<div className='w-full'>
										<Input
											id='comment'
											name='comment'
											autoFocus
											placeholder='Write a comment...'
										/>
									</div>
								</form>
							</FormProvider>

							<div className='mt-6 space-y-2'>
								{comments.map((comment) => {
									const {
										name,
										username,
										profilePicture = "",
										comment: { id, isEdited, content, createdAt },
									} = comment;
									return (
										<div key={id}>
											<div className='flex items-center gap-4'>
												<div>
													<div className='hidden xl:block'>
														<Avatar
															name={name || "SDR"}
															size={48}
															href={`/profile/${username}`}
															image={profilePicture}
														/>
													</div>
													<div className='xl:hidden'>
														<Avatar
															name={user?.name || "SDR"}
															size={35}
															href={`/profile/${username}`}
															image={profilePicture}
														/>
													</div>
												</div>
												<div className='text-title text-sm xl:text-base font-semibold'>
													{name}
												</div>
											</div>
											<div className='ml-12 xl:ml-16 space-y-2'>
												<div className='p-3 text-sm xl:text-base text-dark-100 rounded border border-[#D6DDEB]'>
													{content}
												</div>
												<div className='text-[#7C8493] font-thin text-xs xl:text-sm'>
													{moment(createdAt).fromNow()}
												</div>
											</div>
										</div>
									);
								})}
								{isLoading && (
									<div className='flex justify-center items-center'>
										<ClipLoader color='#3b82f6' loading={isLoading} size={24} />
									</div>
								)}
								{!isLoading && comments.length === 0 && (
									<div className='ml-12 xl:ml-16 text-sm xl:text-base font-semibold'>
										No comments yet, you could be the first to comment...
									</div>
								)}
							</div>
						</div>
					)}
				</section>
			</article>
		</WhiteWrapper>
	);
};

export default FeedPost;
