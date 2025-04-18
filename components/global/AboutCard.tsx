import WhiteWrapper from "./WhiteWrapper";
import Modal from "@/components/global/Modal";
import { useState } from "react";
import Button from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useAddAboutMutation } from "@/services/profile";
import { toast } from "react-toastify";

type AboutCardProps = {
	title: string;
	description?: string;
	editable?: boolean;
};

const AboutCard = ({
	title,
	description,
	editable = false,
}: AboutCardProps) => {
	// console.log(description);
	const [showEditAboutModal, setShowEditAboutModal] = useState(false);
	const editAbout = () => {
		setShowEditAboutModal(!showEditAboutModal);
	};
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			about: "",
		},
	});
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isValid },
	} = methods;
	
	const token = Cookies.get("sedherToken");

	const [addAbout, { isLoading }] = useAddAboutMutation();

	const addAboutFunc = async (data: any) => {
		// console.log(data);
		try {
			const details = {
				token: token as string,
				body: {
					about: data.about,
				},
			};
			const response = await addAbout(details).unwrap();
			toast.success(response.message);
			setShowEditAboutModal(!showEditAboutModal);
		} catch (err: any) {
			toast.error(err?.data?.error);
			toast.error(err?.data?.message);
		}
	};

	return (
		<WhiteWrapper className='relative' title={title}>
			{editable && (
				<button onClick={editAbout} className='absolute right-5 top-5'>
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
			<article>
				<p className='font-epilogue text-dark-100 leading-[160%]'>
					{description}
				</p>
			</article>
			<Modal show={showEditAboutModal} onRequestClose={() => editAbout()}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(addAboutFunc)} className='space-y-5'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-7'>
								<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
									Edit about
								</div>
								<div className='border'></div>
							</div>
							<button
								onClick={() => setShowEditAboutModal(false)}
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

						<div className='mt-6'>
							<textarea
								className='w-full p-3 text-xs xl:text-base xl:p-6 bg-accents-light-blue rounded-[10px] focus:border-primary outline-none'
								id=''
								cols={30}
								placeholder='You can write about your years of experience, industry, or skills.
					People also talk about their achievements or previous job experiences.'
								rows={7}
								{...register("about", { required: true })}
							/>
						</div>
						<div className='mt-6'>
							<div className='flex items-center justify-end'>
								<Button
									type='submit'
									size='sm'
									className='text-sm xl:text-base font-normal w-[120px]'>
									Save
								</Button>
							</div>
						</div>
					</form>
				</FormProvider>
			</Modal>
		</WhiteWrapper>
	);
};

export default AboutCard;
