import { usePostMutation } from "@/services/feed";
import { useUploadDocumentMutation } from "@/services/upload";
import { PostRequest, PostResponse } from "@/types/feed";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import Input from "../global/Input";
import Modal from "../global/Modal";
import WhiteWrapper from "../global/WhiteWrapper";

const PostStatus = () => {
	const [showPostModal, setShowPostModal] = useState(false);
	const [postMedia, setPostMedia] = useState(false);

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			post: "",
			contentType: "text",
			postType: "public",
			media: null,
		},
	});

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isValid },
	} = methods;

	// console.log(watch("media"));

	const [post, { isLoading }] = usePostMutation();

	const [upload, { isLoading: isLoadingUpload }] = useUploadDocumentMutation();

	const token = Cookies.get("sedherToken");

	const onSubmit: SubmitHandler<PostRequest | any> = async (data) => {
		try {
			let details = {} as PostRequest;

			if (data.media) {
				const url = (await upload({
					file: data.media as any,
					token: token as string,
				}).unwrap()) as any;

				details = {
					token: token as string,
					body: {
						content: data.post,
						postType: "public",
						contentType: data.media[0]
							? data.media[0].type.split("/")[0].toString().toLowerCase()
							: "text",
						attachment: [
							{
								url: url.data.secureUrl,
								contentType: data.media[0].type
									.split("/")[0]
									.toString()
									.toLowerCase(),
							},
						],
					},
				};
			} else {
				details = {
					token: token as string,
					body: {
						content: data.post,
						postType: "public",
						contentType: "text",
					},
				};
			}

			// console.log(details);
			const result = (await post(details as any).unwrap()) as PostResponse;
			// console.log(result);
			toast.success("Post created successfully");
			setShowPostModal(false);
		} catch (err: any) {
			toast.error(err?.data?.message);
		}
	};

	useEffect(() => {
		setValue("post", "", { shouldValidate: true });
		setPostMedia(false);
	}, [showPostModal]);

	const postActions = (
		<div className='flex text-sm xl:text-base items-center gap-4 xl:gap-10'>
			<button
				onClick={() => setPostMedia((state) => !state)}
				type='button'
				className={`flex p-3 rounded-[5px] hover:fill-primary items-center gap-1 hover:text-primary ${
					postMedia
						? "fill-primary text-primary bg-accents-light-blue"
						: "text-[#899A9A] fill-[#899A9A]"
				}`}>
				<svg
					className='w-4 h-4 fill-inherit xl:w-auto xl:h-auto'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.1645 21.9977 19.3284 21.981 19.49 21.95L19.79 21.88H19.86H19.91L20.28 21.74L20.41 21.67C20.51 21.61 20.62 21.56 20.72 21.49C20.8535 21.3918 20.9805 21.2849 21.1 21.17L21.17 21.08C21.2682 20.9805 21.3585 20.8735 21.44 20.76L21.53 20.63C21.5998 20.5187 21.6601 20.4016 21.71 20.28C21.7374 20.232 21.7609 20.1819 21.78 20.13C21.83 20.01 21.86 19.88 21.9 19.75V19.6C21.9567 19.4046 21.9903 19.2032 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7957 2 19 2ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V14.69L7.29 11.39C7.38296 11.2963 7.49356 11.2219 7.61542 11.1711C7.73728 11.1203 7.86799 11.0942 8 11.0942C8.13201 11.0942 8.26272 11.1203 8.38458 11.1711C8.50644 11.2219 8.61704 11.2963 8.71 11.39L17.31 20H5ZM20 19C19.9991 19.1233 19.9753 19.2453 19.93 19.36C19.9071 19.4087 19.8804 19.4556 19.85 19.5C19.8232 19.5423 19.7932 19.5825 19.76 19.62L14.41 14.27L15.29 13.39C15.383 13.2963 15.4936 13.2219 15.6154 13.1711C15.7373 13.1203 15.868 13.0942 16 13.0942C16.132 13.0942 16.2627 13.1203 16.3846 13.1711C16.5064 13.2219 16.617 13.2963 16.71 13.39L20 16.69V19ZM20 13.86L18.12 12C17.5477 11.457 16.7889 11.1543 16 11.1543C15.2111 11.1543 14.4523 11.457 13.88 12L13 12.88L10.12 10C9.54772 9.45699 8.7889 9.15428 8 9.15428C7.2111 9.15428 6.45228 9.45699 5.88 10L4 11.86V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V13.86Z' />
				</svg>
				<span className=' font-medium'>Photo/Video</span>
			</button>
		</div>
	);

	return (
		<WhiteWrapper>
			<div className='flex items-center gap-6 mb-5'>
				<div className='hidden xl:block'>
					<Avatar
						name='Salami Tayo'
						size={48}
						image='/assets/icons/layouts/profile.png'
					/>
				</div>
				<div className='xl:hidden'>
					<Avatar
						name='Salami Tayo'
						size={35}
						image='/assets/icons/layouts/profile.png'
					/>
				</div>
				<button
					onClick={() => setShowPostModal(true)}
					className='w-[calc(100%-72px)] text-sm xl:text-base px-4 py-2 xl:py-3 text-dark-100 text-left bg-accents-light-blue rounded-[5px]'>
					What do you want to write about?
				</button>
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex text-sm xl:text-base items-center gap-4 xl:gap-10'>
					<button className='flex items-center gap-1'>
						<svg
							className='w-4 h-4 xl:w-auto xl:h-auto'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z'
								fill='#899A9A'
							/>
						</svg>
						<span className='text-[#899A9A] font-medium'>Video</span>
					</button>
					<button className='flex items-center gap-1'>
						<svg
							className='w-4 h-4 xl:w-auto xl:h-auto'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.1645 21.9977 19.3284 21.981 19.49 21.95L19.79 21.88H19.86H19.91L20.28 21.74L20.41 21.67C20.51 21.61 20.62 21.56 20.72 21.49C20.8535 21.3918 20.9805 21.2849 21.1 21.17L21.17 21.08C21.2682 20.9805 21.3585 20.8735 21.44 20.76L21.53 20.63C21.5998 20.5187 21.6601 20.4016 21.71 20.28C21.7374 20.232 21.7609 20.1819 21.78 20.13C21.83 20.01 21.86 19.88 21.9 19.75V19.6C21.9567 19.4046 21.9903 19.2032 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7957 2 19 2ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V14.69L7.29 11.39C7.38296 11.2963 7.49356 11.2219 7.61542 11.1711C7.73728 11.1203 7.86799 11.0942 8 11.0942C8.13201 11.0942 8.26272 11.1203 8.38458 11.1711C8.50644 11.2219 8.61704 11.2963 8.71 11.39L17.31 20H5ZM20 19C19.9991 19.1233 19.9753 19.2453 19.93 19.36C19.9071 19.4087 19.8804 19.4556 19.85 19.5C19.8232 19.5423 19.7932 19.5825 19.76 19.62L14.41 14.27L15.29 13.39C15.383 13.2963 15.4936 13.2219 15.6154 13.1711C15.7373 13.1203 15.868 13.0942 16 13.0942C16.132 13.0942 16.2627 13.1203 16.3846 13.1711C16.5064 13.2219 16.617 13.2963 16.71 13.39L20 16.69V19ZM20 13.86L18.12 12C17.5477 11.457 16.7889 11.1543 16 11.1543C15.2111 11.1543 14.4523 11.457 13.88 12L13 12.88L10.12 10C9.54772 9.45699 8.7889 9.15428 8 9.15428C7.2111 9.15428 6.45228 9.45699 5.88 10L4 11.86V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V13.86Z'
								fill='#899A9A'
							/>
						</svg>
						<span className='text-[#899A9A] font-medium'>Photo</span>
					</button>
					<button className='flex items-center gap-1'>
						<svg
							className='w-4 h-4 xl:w-auto xl:h-auto'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M6 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H6C6.26522 23 6.51957 22.8946 6.70711 22.7071C6.89464 22.5196 7 22.2652 7 22V14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13ZM5 21H3V15H5V21ZM22 9H18C17.7348 9 17.4804 9.10536 17.2929 9.29289C17.1054 9.48043 17 9.73478 17 10V22C17 22.2652 17.1054 22.5196 17.2929 22.7071C17.4804 22.8946 17.7348 23 18 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V10C23 9.73478 22.8946 9.48043 22.7071 9.29289C22.5196 9.10536 22.2652 9 22 9ZM21 21H19V11H21V21ZM14 1H10C9.73478 1 9.48043 1.10536 9.29289 1.29289C9.10536 1.48043 9 1.73478 9 2V22C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22V2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1ZM13 21H11V3H13V21Z'
								fill='#899A9A'
							/>
						</svg>
						<span className='text-[#899A9A] font-medium'>Poll</span>
					</button>
				</div>
				<Button size='sm' className='text-sm xl:text-base font-normal'>
					Post
				</Button>
			</div>
			<Modal
				show={showPostModal}
				onRequestClose={() => setShowPostModal(false)}>
				<section className='space-y-5'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-7'>
							<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
								Create A post
							</div>
							<button className='text-accents-brown text-sm xl:text-base flex items-center gap-4'>
								Anyone
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clipPath='url(#clip0_3230_76408)'>
										<path
											d='M4 6L8 10L12 6L4 6Z'
											fill='#F47D5B'
											stroke='#F47D5B'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_3230_76408'>
											<rect width='16' height='16' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
						<button onClick={() => setShowPostModal(false)} aria-label='close'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.15213 5.1515C5.37716 4.92654 5.68233 4.80016 6.00052 4.80016C6.31872 4.80016 6.62389 4.92654 6.84892 5.1515L12.0005 10.3031L17.1521 5.1515C17.2628 5.03689 17.3952 4.94547 17.5416 4.88258C17.688 4.81969 17.8455 4.78659 18.0048 4.7852C18.1642 4.78382 18.3222 4.81418 18.4697 4.87452C18.6171 4.93485 18.7511 5.02396 18.8638 5.13663C18.9765 5.2493 19.0656 5.38328 19.1259 5.53076C19.1862 5.67823 19.2166 5.83625 19.2152 5.99558C19.2138 6.15492 19.1807 6.31238 19.1178 6.45879C19.055 6.60519 18.9635 6.73761 18.8489 6.8483L13.6973 11.9999L18.8489 17.1515C19.0675 17.3778 19.1885 17.6809 19.1857 17.9956C19.183 18.3102 19.0568 18.6112 18.8343 18.8337C18.6118 19.0562 18.3108 19.1824 17.9962 19.1851C17.6816 19.1878 17.3784 19.0669 17.1521 18.8483L12.0005 13.6967L6.84892 18.8483C6.6226 19.0669 6.31948 19.1878 6.00484 19.1851C5.69021 19.1824 5.38923 19.0562 5.16674 18.8337C4.94425 18.6112 4.81805 18.3102 4.81532 17.9956C4.81258 17.6809 4.93354 17.3778 5.15213 17.1515L10.3037 11.9999L5.15213 6.8483C4.92716 6.62327 4.80078 6.3181 4.80078 5.9999C4.80078 5.68171 4.92716 5.37654 5.15213 5.1515Z'
									fill='#515B6F'
								/>
							</svg>
						</button>
					</div>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
							<textarea
								className='w-full p-3 text-sm xl:text-base xl:p-6 bg-accents-light-blue rounded-[10px] focus:border-primary outline-none'
								id=''
								cols={30}
								placeholder='What do you want to talk about?'
								rows={postMedia ? 2 : 7}
								{...register("post", { required: true })}
							/>
							{postMedia && (
								<div>
									<Input required type='file' name='media' showFilePreview />
								</div>
							)}
							<div className='flex items-center justify-between'>
								<div>{postActions}</div>
								<Button
									type='submit'
									loading={isLoading || isLoadingUpload}
									disabled={!isValid}
									size='sm'
									className='text-sm xl:text-base font-normal w-[120px]'>
									Post
								</Button>
							</div>
						</form>
					</FormProvider>
				</section>
			</Modal>
		</WhiteWrapper>
	);
};

export default PostStatus;
