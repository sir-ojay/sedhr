import LabelValue from "@/components/global/LabelValue";
import Switch from "@/components/global/Switch";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SettingsWrapper from "@/components/settings/SettingsWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
	useGetSettingsQuery,
	useUpdateSettingsMutation,
} from "@/services/settings";
import { Settings, UpdateSettingsResponse } from "@/types/settings";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateEffect } from "react-use";

const index = () => {
	const [settings, setSettings] = useState<Settings>();

	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } = useGetSettingsQuery(
		{ token }
	);

	useEffect(() => {
		setSettings(data?.data);
	}, [isSuccess]);

	useEffect(() => {
		setValue(
			"autoplayVideos",
			settings?.accountPreferences?.autoplayVideos || false
		);
		setValue(
			"peopleViewed",
			settings?.accountPreferences?.peopleViewed || false
		);
		setValue(
			"allowCollaborationVisibility",
			settings?.visibility?.allowCollaborationVisibility || false
		);
		setValue(
			"allowConnectionsVisibility",
			settings?.visibility?.allowConnectionsVisibility || false
		);
		setValue(
			"allowDataForResearch",
			settings?.dataPrivacy?.allowDataForResearch || false
		);
		setValue(
			"applicationEmail",
			settings?.notifications?.applications?.email || false
		);
		setValue(
			"applicationInApp",
			settings?.notifications?.applications?.inApp || false
		);
		setValue(
			"applicationPushNotification",
			settings?.notifications?.applications?.pushNotification || false
		);
		setValue(
			"collaborationEmail",
			settings?.notifications?.collaborations?.email || false
		);
		setValue(
			"collaborationInApp",
			settings?.notifications?.collaborations?.inApp || false
		);
		setValue(
			"collaborationPushNotification",
			settings?.notifications?.collaborations?.pushNotification || false
		);
		setValue(
			"searchEmail",
			settings?.notifications?.searchAppearance?.email || false
		);
		setValue(
			"searchInApp",
			settings?.notifications?.searchAppearance?.inApp || false
		);
		setValue(
			"searchPushNotification",
			settings?.notifications?.searchAppearance?.pushNotification || false
		);
		setValue(
			"allowEventInvites",
			settings?.communication?.connects?.allowEventInvites || false
		);
		setValue(
			"allowPageInvites",
			settings?.communication?.connects?.allowPageInvites || false
		);
		setValue(
			"useMarketplaceData",
			settings?.advertising?.useMarketplaceData || false
		);
		setValue("useProfile", settings?.advertising?.useProfile || false);
	}, [settings]);

	const { control, getValues, watch, setValue } = useForm({
		defaultValues: {
			autoplayVideos: false,
			peopleViewed: false,
			allowCollaborationVisibility: false,
			allowConnectionsVisibility: false,
			allowDataForResearch: false,
			applicationEmail: false,
			applicationInApp: false,
			applicationPushNotification: false,
			collaborationEmail: false,
			collaborationInApp: false,
			collaborationPushNotification: false,
			searchEmail: false,
			searchInApp: false,
			searchPushNotification: false,
			allowEventInvites: false,
			allowPageInvites: false,
			useMarketplaceData: false,
			useProfile: false,
		},
	});

	const location = useRouter();

	const { tab = "" } = location.query;

	const [update, { isLoading: updating }] = useUpdateSettingsMutation();

	const updateSettings = async () => {
		const {
			autoplayVideos,
			peopleViewed,
			allowConnectionsVisibility,
			allowCollaborationVisibility,
			applicationEmail,
			applicationInApp,
			applicationPushNotification,
			searchEmail,
			searchInApp,
			searchPushNotification,
			collaborationEmail,
			collaborationInApp,
			collaborationPushNotification,
			allowEventInvites,
			allowPageInvites,
			allowDataForResearch,
			useMarketplaceData,
			useProfile,
		} = watch();
		console.log(autoplayVideos);
		try {
			let body = {
				accountPreferences: {
					// language: "English",
					autoplayVideos,
					peopleViewed,
				},
				visibility: {
					allowConnectionsVisibility,
					allowCollaborationVisibility,
				},
				communication: {
					notifications: {
						inApp: true,
						email: true,
					},
					connects: {
						allowPageInvites,
						allowEventInvites,
						allowMessageRequests: true,
						allowInMail: true,
					},
					messaging: {
						detectHarmfulContent: true,
					},
				},
				dataPrivacy: {
					allowDataForResearch,
				},
				advertising: {
					useProfile,
					useLocationData: true,
					useMarketplaceData,
				},
				notifications: {
					collaborations: {
						inApp: collaborationInApp,
						pushNotification: collaborationPushNotification,
						email: collaborationEmail,
					},
					applications: {
						inApp: applicationInApp,
						pushNotification: applicationPushNotification,
						email: applicationEmail,
					},
					searchAppearance: {
						inApp: searchInApp,
						pushNotification: searchPushNotification,
						email: searchEmail,
					},
					messaging: {
						inApp: true,
						pushNotification: true,
						email: true,
					},
				},
			} as Settings;

			await update({ body, token }).unwrap();
			toast.success("Settings updated successfully");
		} catch (error) {}
	};

	console.log(watch());

	useUpdateEffect(() => {
		// updateSettings();
		console.log("changed");
	}, [watch()]);

	return (
		<DefaultLayout title='Sedher | Settings'>
			<SettingsWrapper>
				<div>
					{tab === "account-preference" && (
						<section className='space-y-10'>
							<WhiteWrapper title='Account Preferences'>
								<div className='space-y-4'>
									<LabelValue
										label='Language'
										value={settings?.accountPreferences?.language || ""}
									/>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F]'>Autoplay Videos</div>
										<div>
											<Controller
												name='autoplayVideos'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F]'>People Viewed</div>
										<div>
											<Controller
												name='peopleViewed'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
								</div>
							</WhiteWrapper>

							<WhiteWrapper title='Account management'>
								<div className='space-y-4'>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F]'>Hibernate account</div>
										<Link href='/settings/hibernate'>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M19.75 11.7256L4.75 11.7256'
													stroke='#25324B'
													strokeWidth='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502'
													stroke='#25324B'
													strokeWidth='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
										</Link>
									</div>

									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F]'>Close account</div>
										<Link href='/settings/close'>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M19.75 11.7256L4.75 11.7256'
													stroke='#25324B'
													strokeWidth='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502'
													stroke='#25324B'
													strokeWidth='2'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
										</Link>
									</div>
								</div>
							</WhiteWrapper>
						</section>
					)}

					{tab === "visibility" && (
						<WhiteWrapper title='Visibility'>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>
										Allow Collaboration Visibility
									</div>
									<div>
										<Controller
											name='allowCollaborationVisibility'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>
										Allow Connections Visibility
									</div>
									<div>
										<Controller
											name='allowConnectionsVisibility'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</WhiteWrapper>
					)}

					{tab === "data-privacy" && (
						<WhiteWrapper title='Data Privacy'>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>Allow Data For Research</div>
									<div>
										<Controller
											name='allowDataForResearch'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</WhiteWrapper>
					)}

					{tab === "communication" && (
						<WhiteWrapper title='Communication'>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>Allow Event Invites</div>
									<div>
										<Controller
											name='allowEventInvites'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>Allow Page Invites</div>
									<div>
										<Controller
											name='allowPageInvites'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</WhiteWrapper>
					)}

					{tab === "advertising" && (
						<WhiteWrapper title='Advertising'>
							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>Use Marketplace Data</div>
									<div>
										<Controller
											name='useMarketplaceData'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='text-[#515B6F]'>Use Profile</div>
									<div>
										<Controller
											name='useProfile'
											control={control}
											render={({ field: { onChange, value } }) => (
												<Switch
													onChange={(e) => {
														onChange(e.target.checked);
														updateSettings();
													}}
													value={value}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</WhiteWrapper>
					)}

					{tab === "notifications" && (
						<section className='space-y-10'>
							<WhiteWrapper title='Application Notifications'>
								<div className='space-y-4'>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>Email</div>
										<div>
											<Controller
												name='applicationEmail'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>In App</div>
										<div>
											<Controller
												name='applicationInApp'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>
											Push Notification
										</div>
										<div>
											<Controller
												name='applicationPushNotification'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
								</div>
							</WhiteWrapper>

							<WhiteWrapper title='Collaborations Notifications'>
								<div className='space-y-4'>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>Email</div>
										<div>
											<Controller
												name='collaborationEmail'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>In App</div>
										<div>
											<Controller
												name='collaborationInApp'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>
											Push Notification
										</div>
										<div>
											<Controller
												name='collaborationPushNotification'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
								</div>
							</WhiteWrapper>

							<WhiteWrapper title='Search Appearance Notifications'>
								<div className='space-y-4'>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>Email</div>
										<div>
											<Controller
												name='searchEmail'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>In App</div>
										<div>
											<Controller
												name='searchInApp'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-[#515B6F] capitalize'>
											Push Notification
										</div>
										<div>
											<Controller
												name='searchPushNotification'
												control={control}
												render={({ field: { onChange, value } }) => (
													<Switch
														onChange={(e) => {
															onChange(e.target.checked);
															updateSettings();
														}}
														value={value}
													/>
												)}
											/>
										</div>
									</div>
								</div>
							</WhiteWrapper>
						</section>
					)}
				</div>
			</SettingsWrapper>
		</DefaultLayout>
	);
};

export default index;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
