import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
	useCreateEventMutation,
	useGetMyEventsQuery,
	useGetReceivedEventsQuery,
} from "@/services/events";
import { useUploadDocumentMutation } from "@/services/upload";
import { LoginResponse } from "@/types/auth/auth";
import { CreateEventRequest } from "@/types/events";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type MyEventsProps = {
	data: {
		id: string;
		name: string;
		about?: string;
		startDate: string;
		endDate: string;
		attendees: number;
		coverImage: string;
		attendeesPicture: string[];
	}[];
};

const MyGroups = () => {
	const [tab, setTab] = useState("received");
	const [user, setUser] = useState<LoginResponse>();
	const [receivedEvents, setReceivedEvents] = useState<MyEventsProps>();
	const [myEvents, setMyEvents] = useState<MyEventsProps>();
	const [modal, setModal] = useState(false);

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const token: any = Cookies.get("sedherToken");

	const { data, isLoading, isSuccess } = useGetReceivedEventsQuery({
		token,
		username: user?.username || "",
	});

	useEffect(() => {
		data && setReceivedEvents(data);
	}, [isSuccess, data]);

	const {
		data: myEventsData,
		isLoading: myEventsIsLoading,
		isSuccess: myEventsIsSuccess,
	} = useGetMyEventsQuery({ token });

	useEffect(() => {
		myEventsData && setMyEvents(data);
	}, [myEventsIsSuccess, myEventsData]);

	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			eventName: "Event Name Example",
			about:
				"An example of an event about this contains more information about the event",
			eventLocation: "in person",
			startDate: "",
			eventStatus: "",
			startTime: "10:30 AM",
			endDate: "",
			endTime: "11:30 AM",
			externalLink: "eventlink.com",
			coverImage: "eventimagelink.com",
			invitedSpeakers: ["6319fa18c7fed0aec690e414"],
			timezone: "UTC+01:00 West Central Africa",
			// attendees: ["631d432e586dfecf26bca780"],
		},
	});

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isValid },
	} = methods;

	const [upload, { isLoading: isLoadingUpload }] = useUploadDocumentMutation();

	const [createEvent, { isLoading: isLoadingCreateEvent }] =
		useCreateEventMutation();

	const onSubmit: SubmitHandler<CreateEventRequest | any> = async (data) => {
		console.log(data);
		try {
			const url = (await upload({
				file: data.media as any,
				token: token as string,
			}).unwrap()) as any;

			const body = {
				eventName: data.eventName,
				about: data.about,
				eventLocation: "in person",
				eventStatus: data.eventStatus,
				startDate: data.startDate,
				startTime: "10:30 AM",
				endDate: data.endDate,
				endTime: "11:30 AM",
				externalLink: "eventlink.com",
				coverImage: url.data.secureUrl,
				invitedSpeakers: ["6319fa18c7fed0aec690e414"],
				timezone: "UTC+01:00 West Central Africa",
				// attendees: ["631d432e586dfecf26bca780"],
			};

			const response = (await createEvent({
				token: token as string,
				body,
			}).unwrap()) as any;

			toast.success("Event successfully created");

			setModal(false);
		} catch (error) {}
	};

	return (
		<DefaultLayout title='Sedher | Sedher universe | My Events'>
			<SedherUniverseWrapper>
				<section className='space-y-5'>
					<WhiteWrapper>
						<span className='font-semibold text-dark-900'>Event for you</span>
					</WhiteWrapper>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<Button
								onClick={() => setTab("received")}
								theme='plain'
								className={`border-2 border-[#B8C9C9] rounded-full ${
									tab === "received"
										? " text-primary bg-tertiary"
										: "text-[#4C4475]"
								}`}>
								Received
							</Button>
							<Button
								onClick={() => setTab("my-events")}
								theme='plain'
								className={`border-2 border-[#B8C9C9] rounded-full ${
									tab === "my-events"
										? " text-primary bg-tertiary"
										: "text-[#4C4475]"
								}`}>
								My Events
							</Button>
						</div>
						<Button onClick={() => setModal(true)}>Create Event</Button>
					</div>
					{tab === "received" && (
						<section className='space-y-3'>
							{receivedEvents?.data?.map((event) => (
								<AdjustableProfileCard
									key={event.id}
									name={event.name}
									description={event?.about || "No description"}
									image={event.coverImage}
									cardType='event'
									grid={1}
									href={`/sedher-universe/my-events/${event.id}`}
								/>
							))}
							{isLoading &&
								[1, 2, 3, 4, 5, 6].map((i) => (
									<WhiteWrapper key={i} className='h-[123px]'></WhiteWrapper>
								))}
							{receivedEvents?.data.length === 0 && (
								<div>You currently do not have any events for now</div>
							)}
						</section>
					)}

					{tab === "my-events" && (
						<section className='space-y-3'>
							{myEvents?.data?.map((event, i) => (
								<AdjustableProfileCard
									key={event.id + i}
									name={event.name}
									description={event?.about || "No description"}
									image={event.coverImage}
									cardType='event'
									grid={1}
									href={`/sedher-universe/my-events/${event.id}`}
								/>
							))}
							{myEventsIsLoading &&
								[1, 2, 3, 4, 5, 6].map((i) => (
									<WhiteWrapper key={i} className='h-[123px]'></WhiteWrapper>
								))}
							{myEvents?.data.length === 0 && (
								<div>You currently do not have any events</div>
							)}
						</section>
					)}
				</section>
			</SedherUniverseWrapper>
			<Modal show={modal} onRequestClose={() => setModal(false)}>
				<div className='flex items-center justify-between mb-5'>
					<div className='flex items-center gap-7'>
						<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
							Create a Event
						</div>
					</div>
					<button onClick={() => setModal(false)} aria-label='close'>
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
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-5 max-h-[750px] overflow-y-scroll'>
						<div className='space-y-5'>
							<div className='space-y-6'>
								<Input
									placeholder='Upload Cover Photo'
									required
									type='file'
									name='media'
									showFilePreview
								/>
								<div className='flex'>
									<label
										htmlFor='online'
										className='form-check flex items-center gap-2  py-[4px] px-3'>
										<input
											className='form-check-input appearance-none rounded-full h-5 w-5 border-gray-300 bg-transaparent border-2 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
											type='radio'
											name='eventLocation'
											id='online'
											// onChange={onChange}
											value='in person'
										/>
										<span className='mt-1 text-primary'>Online</span>
									</label>

									<label
										htmlFor='inPerson'
										className='form-check flex items-center gap-2  py-[4px] px-3'>
										<input
											className='form-check-input appearance-none rounded-full h-5 w-5 border-gray-300 bg-transaparent border-2 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
											type='radio'
											name='eventLocation'
											id='inPerson'
											// onChange={onChange}
											value='in person'
										/>
										<span className='mt-1 text-primary'>In Person</span>
									</label>
								</div>
								<Input
									placeholder='Event Name'
									required
									name='eventName'
									label='Event Name'
								/>
								<Input
									placeholder='Event Description'
									required
									name='about'
									label='Event Description'
								/>
								<SelectInput
									name='eventStatus'
									label='Event Status'
									id='eventStatus'
									option='Select Event Status'
									theme='primary'
									required
									options={["open", "closed", "cancelled"]}
								/>
								<Input
									placeholder='External Event Link'
									required
									name='externalLink'
									label='External Event Link'
								/>
								<div className='flex justify-between space-x-6'>
									<div className='flex-1'>
										<Input
											placeholder='Start Date'
											required
											type='date'
											name='startDate'
											label='Start Date'
										/>
									</div>
									<div className='flex-1'>
										<Input
											placeholder='Start Time'
											required
											type='time'
											name='startTime'
											label='Start Time'
										/>
									</div>
								</div>
								<div className='flex justify-between space-x-6'>
									<div className='flex-1'>
										<Input
											placeholder='End Date'
											required
											type='date'
											name='endDate'
											label='End Date'
										/>
									</div>
									<div className='flex-1'>
										<Input
											placeholder='End Time'
											required
											type='time'
											name='endTime'
											label='End Time'
										/>
									</div>
								</div>
								<Input
									placeholder='Speakers'
									required
									name='speakers'
									label='Speakers'
								/>
							</div>
							<div className='flex justify-end'>
								<div className='flex items-center space-x-5'>
									<Button
										type='submit'
										loading={isLoadingUpload || isLoadingUpload}
										disabled={!isValid}
										size='sm'
										className='text-sm xl:text-base font-normal w-[120px]'>
										Post
									</Button>
									<Button
										type='button'
										theme='outline'
										size='sm'
										onClick={() => setModal(false)}
										className='text-sm xl:text-base font-normal w-[120px]'>
										Cancel
									</Button>
								</div>
							</div>
						</div>
					</form>
				</FormProvider>
			</Modal>
		</DefaultLayout>
	);
};

export default MyGroups;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
