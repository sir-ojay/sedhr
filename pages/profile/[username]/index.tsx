import CollaborationNav from "@/components/collaboration/CollaborationNav";
import RecommendationCard from "@/components/connection/RecommendationCard";
import SkillsCard from "@/components/connection/SkillsCard";
import AboutCard from "@/components/global/AboutCard";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import ListNav from "@/components/global/ListNav";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import AnalyticsCard from "@/components/profile/AnalyticsCard";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
	useAddEducationMutation,
	useUpdateCoverPhotoMutation,
	useUserProfileDetailsQuery,
} from "@/services/profile";
import { useUploadDocumentMutation } from "@/services/upload";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProfilePage = () => {
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			school: "",
			description: "",
			fieldOfStudy: "",
			startDate: "",
			endDate: "",
			grade: "",
			degreeType: "",
			startYear: "",
			endYear: "",
		},
	});
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isValid },
	} = methods;

	const user = JSON.parse(Cookies.get("sedherUser") || "{}");
	// const name = user.name?.replace(/\s/g, "").toLowerCase();
	// const username = user.username?.replace(/\s/g, "").toLowerCase();

	const [showEditAboutModal, setShowEditAboutModal] = useState(false);
	const [showEditCoverPicture, setShowEditCoverPicture] = useState(false);
	const router = useRouter();
	const token = Cookies.get("sedherToken");

	const username = router.query.username?.toString() as string;
	const { data, isLoading, isSuccess } = useUserProfileDetailsQuery({
		token,
		id: username || "",
	});

	// console.log(data.data);

	const editAbout = () => {
		setShowEditAboutModal(!showEditAboutModal);
	};

	const editCoverPicture = () => {
		setShowEditCoverPicture(!showEditCoverPicture);
	};

	const [updateCoverPhoto, { isLoading: isLoadingUpload }] =
		useUpdateCoverPhotoMutation();
	const [upload, { isLoading: isLoadingUploadDocument }] =
		useUploadDocumentMutation();

	const editCoverPhoto = async (data: any) => {
		let details = {};
		try {
			if (data.media) {
				const url = (await upload({
					file: data.media as any,
					token: token as string,
				}).unwrap()) as any;

				details = {
					token: token as string,
					body: {
						pictureLink: url.data.secureUrl,
					},
				};
			}
			const response = await updateCoverPhoto(details).unwrap();
			toast.success(response.message);
			setShowEditCoverPicture(false);
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};
	console.log(data?.data);
	const navigations = [
		{
			name: "Home",
			href: `/profile/${username}`,
		},
		{
			name: "Activity",
			href: `/profile/${username}/activity`,
		},
		{
			name: "Events",
			href: `/profile/${username}/event`,
		},
		{
			name: "Group",
			href: `/profile/${username}/group`,
		},
	];

	return (
		<DefaultLayout title='Sedher | Profile'>
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard
						type='profile'
						editCoverPicture={editCoverPicture}
						editable={true}
						data={data && data.data}
					/>
					<ListNav navs={navigations} type='slug' />
					<AboutCard
						editAbout={editAbout}
						editable={true}
						title='About Me'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					dolorum, earum dolorem veritatis molestiae obcaecati consequatur nemo
					quis delectus at. Ullam distinctio quo ea tenetur suscipit neque,
					ducimus et doloremque nisi, magni, sunt eos reiciendis voluptate
					 laboriosam facilis, fuga culpa officia recusandae
					accusantium saepe id tempore.'
					/>
					<AnalyticsCard
						title='Analytics'
						totalViews={6}
						totalImpressions={1}
						totalAppearances={0}
					/>
					<WhiteWrapper>
						<LargeProfileCard
							editable={true}
							avatarShape='circle'
							title='Experiences'
							type='experience'
							// addExperience={addExperience}
						/>
					</WhiteWrapper>
					<WhiteWrapper>
						<LargeProfileCard
							addExp={true}
							//   avatarShape="circle"
							title='Education'
							type='education'
							// editable={true}
							// addExperience={addExperience}
						/>
						;
					</WhiteWrapper>
					<WhiteWrapper>
						<LargeProfileCard
							//   avatarShape="circle"
							title='licenses & certifications'
							type='licenses-certifications'
						/>
					</WhiteWrapper>
					<SkillsCard
						skills={[
							"Communication",
							"Ceneral Medicine",
							"Detail Oriented",
							"Leadership",
							"Psychiatry",
						]}
					/>
					<RecommendationCard />
				</div>
				<AdditionalDetailsCard type='profile' />
			</div>
			<Modal show={showEditAboutModal} onRequestClose={() => editAbout()}>
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
			</Modal>

			<Modal
				show={showEditCoverPicture}
				onRequestClose={() => editCoverPicture()}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(editCoverPhoto)} className='space-y-5'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-7'>
								<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
									Cover photo
								</div>
							</div>
							<button
								onClick={() => setShowEditCoverPicture(false)}
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
						<div>
							<Input required type='file' name='media' showFilePreview />
						</div>
						<div>
							<h4 className='text-center'>
								Showcase your personality, interests, team moments or notable
								milestones A good background photo will help you stand out.
							</h4>
						</div>
						<div className='mt-6'>
							<div className='flex items-center justify-end'>
								<Button
									type='submit'
									size='sm'
									className='text-sm xl:text-base font-normal '>
									Save
								</Button>
							</div>
						</div>
					</form>
				</FormProvider>
			</Modal>
		</DefaultLayout>
	);
};

export default ProfilePage;
