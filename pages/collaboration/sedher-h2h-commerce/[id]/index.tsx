import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import Switch from "@/components/global/Switch";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const index = () => {
	const router = useRouter();
	return (
		<DefaultLayout title='Sedher | Collaboration | create RFP'>
			<CollaborationWrapper showHeader={false}>
				<WhiteWrapper className='flex items-center justify-between w-full'>
					<div
						title='Request for Proposal'
						className='font-semibold text-lg text-dark-900 w-full'>
						Request for Proposal
					</div>
				</WhiteWrapper>

				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-2 space-y-8'>
						<section className='space-y-8'>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
								(card) => (
									<H2HCard key={card} type='Product' />
								)
							)}
						</section>
					</section>
					<section className='col-span-4 space-y-8'>
						<article className='bg-primary p-4 rounded-xl space-y-6'>
							<div className='flex items-center justify-between'>
								<h3 className='text-white font-semibold'>
									Learning how Request for proposal(RFP) Works
								</h3>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M5.15115 5.1515C5.37618 4.92654 5.68135 4.80016 5.99955 4.80016C6.31775 4.80016 6.62291 4.92654 6.84795 5.1515L11.9995 10.3031L17.1511 5.1515C17.2618 5.03689 17.3943 4.94547 17.5407 4.88258C17.6871 4.81969 17.8445 4.78659 18.0039 4.7852C18.1632 4.78382 18.3212 4.81418 18.4687 4.87452C18.6162 4.93485 18.7501 5.02396 18.8628 5.13663C18.9755 5.2493 19.0646 5.38328 19.1249 5.53076C19.1853 5.67823 19.2156 5.83625 19.2142 5.99558C19.2129 6.15492 19.1798 6.31238 19.1169 6.45879C19.054 6.60519 18.9626 6.73761 18.8479 6.8483L13.6963 11.9999L18.8479 17.1515C19.0665 17.3778 19.1875 17.6809 19.1848 17.9956C19.182 18.3102 19.0558 18.6112 18.8333 18.8337C18.6108 19.0562 18.3099 19.1824 17.9952 19.1851C17.6806 19.1878 17.3775 19.0669 17.1511 18.8483L11.9995 13.6967L6.84795 18.8483C6.62163 19.0669 6.3185 19.1878 6.00387 19.1851C5.68923 19.1824 5.38826 19.0562 5.16577 18.8337C4.94328 18.6112 4.81707 18.3102 4.81434 17.9956C4.81161 17.6809 4.93256 17.3778 5.15115 17.1515L10.3027 11.9999L5.15115 6.8483C4.92618 6.62327 4.7998 6.3181 4.7998 5.9999C4.7998 5.68171 4.92618 5.37654 5.15115 5.1515Z'
										fill='white'
									/>
								</svg>
							</div>

							<div className='flex justify-between items-end gap-20'>
								<p className='w-full max-w-[400px] text-sm text-white'>
									tristique tellus iaculis at. Sem erat a ultrices duis nibh.
									Commodo vestibulum vulputate malesuada mauris amet faucibus
									vitae. Fusce ut sed fermentum vitae, massa. Semper{" "}
								</p>
								<Button
									theme='plain'
									icon='video'
									size='sm'
									className='w-[210px] h-fit py-3 bg-white rounded-[5px] text-primary'>
									Watch Tutorial
								</Button>
							</div>
						</article>

						<WhiteWrapper className='space-y-6'>
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
									<Button
										theme='outline'
										onClick={() => router.push("/connection/1")}>
										view profile
									</Button>
								</div>
							</div>

							<hr />
							<div className='rounded-xl overflow-hidden'>
								<Image
									className='w-full'
									src='/assets/images/collabo.jpg'
									width={562}
									height={269}
									layout='responsive'
									alt='collabo'
								/>
							</div>
							<div className='space-y-6'>
								<div className='flex justify-between'>
									<div className='text-xl font-semibold text-dark-900'>
										Quis amet rutrum sem.
									</div>
									<Switch label='Saved H2H' />
								</div>
								<p className='text-dark-100 leading-8'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Imperdiet at egestas pellentesque et tristique tellus iaculis
									at. Sem erat a ultrices duis nibh. Commodo vestibulum
									vulputate malesuada mauris amet faucibus vitae. Fusce ut sed
									fermentum vitae, massa. Semper tortor amet odio tellus lectus
									et sapien imperdiet. Nisl purus dictum malesuada malesuada
									maecenas fermentum egestas non. Iaculis molestie viverra
									gravida sed dui cras pulvinar ac mus. Neque nulla eu lectus
									eget nulla sed. Risus quam scelerisque mauris ipsum. Lobortis
									aliquam sollicitudin nisi, velit nibh morbi enim. Ac senectus
									et purus et sit. Neque viverra lacus, amet mattis maecenas id
									in nam. Posuere pharetra, massa dui lacus enim at pharetra.
									Commodo, cras consectetur nisl, justo, fermentum leo, fames
									ultrices habitant. Non etiam duis lacus, euismod ornare
									commodo varius. Auctor diam ornare sit tincidunt laoreet nunc
									a imperdiet lectus. Donec mattis ac lectus interdum interdum
									nec. Aliquet eu vitae sit nibh turpis tincidunt erat ultrices
									ut. Ante.
								</p>
							</div>
						</WhiteWrapper>
						<div className='flex justify-between'>
							<Button theme='outline'>Cancel</Button>
							<Button
								onClick={() =>
									router.push(
										"/collaboration/sedher-h2h-commerce/thomas-clinics/details"
									)
								}>
								View full Details
							</Button>
						</div>
					</section>
				</div>
			</CollaborationWrapper>
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
