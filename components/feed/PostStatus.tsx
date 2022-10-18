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
import SelectInput from "../global/SelectInput";
import WhiteWrapper from "../global/WhiteWrapper";

const PostStatus = () => {
	const [showPostModal, setShowPostModal] = useState(false);
	const [postMedia, setPostMedia] = useState(false);

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			post: "",
			contentType: "text",
			postType: "Public",
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
						postType: data.postType.toString().toLowerCase(),
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
						postType: data.postType.toString().toLowerCase(),
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
		setValue("postType", "Public", { shouldValidate: true });
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
					<button
						onClick={() => {
							setShowPostModal(true);
							setTimeout(() => {
								setPostMedia(true);
							}, 0);
						}}
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
				<Button size='sm' className='text-sm xl:text-base font-normal'>
					Post
				</Button>
			</div>
			<Modal
				show={showPostModal}
				onRequestClose={() => setShowPostModal(false)}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-7'>
								<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
									Create post
								</div>
								<div className='w-[85px] xl:w-[100px]'>
									<SelectInput
										name='postType'
										theme='plain'
										option='Public'
										options={["Public", "Private", "Group"]}
										className='text-sm xl:text-base text-accents-brown brown-caret'
									/>
								</div>
							</div>
							<button
								onClick={() => setShowPostModal(false)}
								aria-label='close'>
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
						<div className='space-y-5'>
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
						</div>
					</form>
				</FormProvider>
			</Modal>
		</WhiteWrapper>
	);
};

export default PostStatus;
