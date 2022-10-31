import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
	useGetMyEventsQuery,
	useGetReceivedEventsQuery,
} from "@/services/events";
import { LoginResponse } from "@/types/auth/auth";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

type MyEventsProps = {
	data: {
		id: string;
		name: string;
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
						<Button>Create Event</Button>
					</div>
					{tab === "received" && (
						<section className='space-y-3'>
							{receivedEvents?.data?.map((event) => (
								<AdjustableProfileCard
									key={event.id}
									name='Adagio CME-CPD Training Service'
									description='Wed, Jun 1 - Fri, Jun 10 '
									image='/assets/images/square-avatar-1.png'
									cardType='event'
									grid={1}
									href='/sedher-universe/my-events/Adagio CME-CPD Training Service'
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
							{myEvents?.data?.map((event) => (
								<AdjustableProfileCard
									key={event.id}
									name='Adagio CME-CPD Training Service'
									description='Wed, Jun 1 - Fri, Jun 10 '
									image='/assets/images/square-avatar-1.png'
									cardType='event'
									grid={1}
									href='/sedher-universe/my-events/Adagio CME-CPD Training Service'
								/>
							))}
							{myEventsIsLoading &&
								[1, 2, 3, 4, 5, 6].map((i) => (
									<WhiteWrapper key={i} className='h-[123px]'></WhiteWrapper>
								))}
							{receivedEvents?.data.length === 0 && (
								<div>You currently do not have any events</div>
							)}
						</section>
					)}
				</section>
			</SedherUniverseWrapper>
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
