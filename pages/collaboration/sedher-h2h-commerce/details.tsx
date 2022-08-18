import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import StatusPill from "@/components/global/StatusPill";
import Switch from "@/components/global/Switch";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const Details = () => {
	const router = useRouter();

	const [grid, setGrid] = useState(2);

	const getGrid = (grid: number) => {
		setGrid(grid);
	};
	return (
		<DefaultLayout title='Sedher | Collaboration | RFP'>
			<CollaborationWrapper getGrid={getGrid}>
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
							<div className='space-y-6'>
								<div className='flex justify-between pt-6'>
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
					</section>
					<section className='col-span-2 space-y-6'>
						<WhiteWrapper>
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
						</WhiteWrapper>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default Details;
