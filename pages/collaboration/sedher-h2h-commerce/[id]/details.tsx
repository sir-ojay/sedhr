import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import LabelValue from "@/components/global/LabelValue";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";

const Details = () => {
	const router = useRouter();

	return (
		<DefaultLayout title='Sedher | Collaboration | RFP'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4 space-y-6'>
					<WhiteWrapper>
						<div className='rounded-xl overflow-hidden'>
							<Image
								className='w-full'
								src='/assets/images/collabo.jpg'
								width={562}
								height={269}
								layout='responsive'
							/>
						</div>
					</WhiteWrapper>

					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-[#2A2069]'>
								About this item
							</h4>
							<p className='text-dark-100 leading-8'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Imperdiet at egestas pellentesque et tristique tellus iaculis
								at. Sem erat a ultrices duis nibh. Commodo vestibulum vulputate
								malesuada mauris amet faucibus vitae. Fusce ut sed fermentum
								vitae, massa. Semper tortor amet odio tellus lectus et sapien
								imperdiet. Nisl purus dictum malesuada malesuada maecenas
								fermentum egestas non. Iaculis molestie viverra gravida sed dui
								cras pulvinar ac mus. Neque nulla eu lectus eget nulla sed.
								Risus quam scelerisque mauris ipsum. Lobortis aliquam
								sollicitudin nisi, velit nibh morbi enim. Ac senectus et purus
								et sit. Neque viverra lacus, amet mattis maecenas id in nam.
								Posuere pharetra, massa dui lacus enim at pharetra. Commodo,
								cras consectetur nisl, justo, fermentum leo, fames ultrices
								habitant. Non etiam duis lacus, euismod ornare commodo varius.
								Auctor diam ornare sit tincidunt laoreet nunc a imperdiet
								lectus. Donec mattis ac lectus interdum interdum nec. Aliquet eu
								vitae sit nibh turpis tincidunt erat ultrices ut. Ante.
							</p>
						</div>
					</WhiteWrapper>
					<WhiteWrapper>
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
					</WhiteWrapper>
					<WhiteWrapper>
						<div className='space-y-4'>
							<h4 className='font-semibold text-xl font-archivo text-black'>
								Techincal Details
							</h4>
							<div className='space-y-4'>
								<LabelValue label='Weight Approx' value='14,500 kg' />
								<LabelValue
									label='Dimensions(length,width and height)'
									value='6,500,4,564,4,456 '
								/>
							</div>
						</div>
					</WhiteWrapper>
					<div className='flex justify-between !mt-[47px]'>
						<Button
							onClick={() =>
								router.push("/collaboration/sedher-h2h-commerce/create")
							}
							theme='outline'>
							Back
						</Button>
						<Button
							onClick={() =>
								router.push(
									"/collaboration/sedher-h2h-commerce/thomas-clinics/order-items"
								)
							}>
							Place Order
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
									<div className='text-base text-dark-100'>Friday 13 June</div>
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
										value=' 1600 W Universal Machining Centre'
										orientation='vertical'
									/>
									<LabelValue
										label='item number'
										value=' 4556778'
										orientation='vertical'
									/>
									<LabelValue
										label='Model / type'
										value='MH 1600 W'
										orientation='vertical'
									/>
									<LabelValue
										label='Year of manufacture'
										value='20 june, 2022'
										orientation='vertical'
									/>
									<LabelValue
										label='Item available from'
										value='Immediately'
										orientation='vertical'
									/>
									<LabelValue
										label='Item condition'
										value='unchecked'
										orientation='vertical'
									/>
									<LabelValue
										label='location'
										value='nigeria,lagos obawole, show map'
										orientation='vertical'
										isLink={true}
									/>
								</div>
							</div>
						</div>
					</WhiteWrapper>
				</section>
			</div>
		</DefaultLayout>
	);
};

export default Details;
