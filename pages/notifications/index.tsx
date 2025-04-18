import Checkbox from "@/components/global/Checkbox";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import NotificationLoader from "@/components/loaders/NotificationLoad";
import NotificationCard from "@/components/notifications/NotificationCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetUserNotificationMutation } from "@/services/notifications";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";

export type NotificationsProps = {
	category: string;
	content: string;
	createdAt: string;
	title: string;
	updatedAt: string;
	userId: string;
	_id: string;
};

const NotificationsPage = () => {
	const methods = useForm({
		defaultValues: {
			message: "",
		},
		mode: "onChange",
	});
	const [userNotifications, setUserNotifications] =
		useState<NotificationsProps[]>();

	const token = Cookies.get("sedherToken");

	const [getUserNotification, { isLoading }] = useGetUserNotificationMutation();

	useEffect(() => {
		const handleGetNotifcation = async () => {
			try {
				const data = await getUserNotification(token).unwrap();
				setUserNotifications(data.data);
			} catch (err: any) {
				toast.error(err?.data?.message);
			}
		};
		handleGetNotifcation();
	}, []);

	return (
		<DefaultLayout title='Sedher | Notifications'>
			<header className='flex justify-between items-center mb-9'>
				<div>
					<div className='font-bold text-2xl text-dark-900'>Notifications</div>
				</div>
				{/* <div className='flex items-center gap-4 font-epilogue'>
					<div className='text-dark-100'>Sort by:</div>
					<div className='flex items-center gap-2 font-medium cursor-pointer'>
						Most Recent
						<svg
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12.6663 6.16699L7.99967 10.8337L3.33301 6.16699'
								stroke='#1E5156'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
					<div className='flex items-center gap-4 border-l-2 pl-5 border-l-[#20243013]'>
						<button type='button' className={`p-2 bg-[#1e515610] rounded`}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z'
									stroke='#1E5156'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z'
									fill='#1E5156'
									stroke='#1E5156'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div> */}
			</header>
			<div className='grid  gap-6'>
				{/* grid-cols-9 will be later apply to grid container when there is an aside */}
				<section className='col-span-7'>
					{!isLoading && (
						<WhiteWrapper>
							{userNotifications?.map((notification, index) => (
								<NotificationCard
									{...notification}
									key={notification._id}
									index={index}
								/>
							))}
						</WhiteWrapper>
					)}
					{!isLoading && userNotifications?.length === 0 && (
						<WhiteWrapper>
							You don't have any notifications available
						</WhiteWrapper>
					)}
					<WhiteWrapper>
						{isLoading && (
							<>
								<NotificationLoader />
							</>
						)}
					</WhiteWrapper>
				</section>
				<aside className='col-span-2 hidden'>
					<WhiteWrapper className='sticky top-[164px]' title='Filter by'>
						<FormProvider {...methods}>
							<form className='flex flex-col items-start gap-5'>
								{[1, 2, 3, 4, 5].map((checkbox) => (
									<Checkbox
										key={checkbox}
										name={checkbox.toString()}
										label='Caption'
									/>
								))}
							</form>
						</FormProvider>
					</WhiteWrapper>
				</aside>
			</div>
		</DefaultLayout>
	);
};

export default NotificationsPage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
