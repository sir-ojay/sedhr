import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import LabelValue from "@/components/global/LabelValue";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import moment from "moment";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Details = () => {
	const router = useRouter();
	const [snergiData, setSnergiData] = useState<Snergi>();

	const token: any = Cookies.get("sedherToken");

	const { data, isLoading, isSuccess } = useGetSnergiQuery({
		token,
		id: router.query.id?.toString()!,
	});

	useEffect(() => {
		console.log(data);
		// @ts-ignore: Unreachable code error
		data && setSnergiData(data?.data[0]);
	}, [isSuccess, data]);

	return (
		<DefaultLayout title='Sedher | Collaboration | Sedher-Synergi'>
			{isLoading && (
				<div className='col-span-4'>
					<WhiteWrapper className='w-full h-[700px]'></WhiteWrapper>
				</div>
			)}
			{!isLoading && (
				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-4 space-y-6'>
						<WhiteWrapper>
							<div className='rounded-xl overflow-hidden'>
								<Image
									className='w-full h-[500px] object-cover'
									width={562}
									height={269}
									alt=''
									src={
										snergiData?.equipments?.imageUrl ===
										"https://user-profile0link.com/synergy/book.png"
											? "/assets/images/collabo.jpg"
											: snergiData?.equipments?.imageUrl ||
											  "/assets/images/collabo.jpg"
									}
								/>
							</div>
						</WhiteWrapper>

						<WhiteWrapper>
							<div className='space-y-4'>
								<h4 className='font-semibold text-xl font-archivo text-[#2A2069]'>
									About this item
								</h4>
								<p className='text-dark-100 leading-8'>
									{snergiData?.bookings?.description}
								</p>
							</div>
						</WhiteWrapper>
						{/* <WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-black'>
								cost and benefits
							</h4>
							<div className='space-y-4'>
								<LabelValue
									label='Amount to be pay upfront'
									value='18%'
									info='icon'
								/>
								<LabelValue
									label='Dismantling & loading costs (binding)'
									value='NGN 300,000'
									info='icon'
								/>
								<LabelValue label='Total Pices' value='NGN 3,000,000' />
								<LabelValue label='Plus VAT' value='NGN 30,000' />
								<LabelValue label='Shipping Cost' value='NGN 30,000' />
								<LabelValue
									label='payment terms'
									value='100% payment prior to collection'
								/>
							</div>
						</div>
					</WhiteWrapper> */}

						<div className='flex justify-between !mt-[47px]'>
							<Button onClick={() => router.back()} theme='outline'>
								Back
							</Button>
							<Button
								onClick={() =>
									router.push("/collaboration/sedher-synergi/gideon/create")
								}>
								Create a new Booking
							</Button>
						</div>
					</section>
					<section className='col-span-2 space-y-6'>
						<WhiteWrapper>
							<div>
								<div className='flex w-full gap-5'>
									<div>
										<Avatar name='Thomas clinics' rounded size={100} />
									</div>
									<div className='w-full space-y-2'>
										<div className='flex justify-between'>
											<h3 className='text-2xl font-semibold text-dark-900'>
												Thomas clinics
											</h3>
											<StatusPill
												text='Service'
												bg='#FF39561A'
												textColor='#FF3956'
											/>
										</div>
										<div className='text-lg space-x-3'>
											<span className='text-dark-100'>Dental clinics</span>
											<span className='text-[#F47D5B]'>
												Patient care centres{" "}
											</span>
										</div>
										<div className='text-base text-dark-100'>
											Friday 13 June
										</div>
									</div>
								</div>
								<Button
									theme='outline'
									className='w-full mt-5'
									onClick={() => router.push("/connection/1")}>
									view profile
								</Button>
							</div>
						</WhiteWrapper>

						<WhiteWrapper>
							<div className='sticky  '>
								<div className='space-y-4'>
									<h4 className='font-semibold text-xl font-archivo text-black'>
										Item details
									</h4>
									<div className='space-y-4'>
										<LabelValue
											label='Name'
											value={snergiData?.bookings?.title || "N/A"}
											orientation='vertical'
										/>
										<LabelValue
											label='Serial Number'
											value={snergiData?.equipments?.serialNumber || "N/A"}
											orientation='vertical'
										/>
										<LabelValue
											label='availability'
											value={snergiData?.equipments?.availability || "N/A"}
											orientation='vertical'
										/>
										<LabelValue
											label='Build Year'
											value={snergiData?.equipments?.buildYear || "N/A"}
											orientation='vertical'
										/>
										<LabelValue
											label='Item available from'
											value='Immediately'
											orientation='vertical'
										/>
										<LabelValue
											label='Item condition'
											value={snergiData?.equipments?.condition || "N/A"}
											orientation='vertical'
										/>
										<LabelValue
											label='Location'
											value={`${snergiData?.locationDetails?.country || ""}, ${
												snergiData?.locationDetails?.state || ""
											}, ${snergiData?.locationDetails?.lga || ""}, ${
												snergiData?.locationDetails?.street || ""
											}`}
											orientation='vertical'
										/>
									</div>
								</div>
							</div>
						</WhiteWrapper>
					</section>
				</div>
			)}
		</DefaultLayout>
	);
};

export default Details;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
