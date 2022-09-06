import CreateRFPWrapper from "@/components/collaboration/rfp/CreateRFPWrapper";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";

const create = () => {
	const router = useRouter();

	const { step } = router.query;

	return (
		<DefaultLayout>
			<CreateRFPWrapper step={step}>
				{(step === "1" || step === undefined) && (
					<div className='space-y-6'>
						<WhiteWrapper title='RFPCode'>
							<div className='flex justify-between'>
								<div>
									<div className='text-sm text-dark-100 mb-3'>
										Ensectetur adipiscing elit. Odio ullamcorper sed urna
									</div>
									<Button>Generate RFQCode</Button>
								</div>
								<div>
									<Input placeholder='23455' />
								</div>
							</div>
						</WhiteWrapper>
						<WhiteWrapper title='Engagement Details'>
							<form className='space-y-6'>
								<Input label='Product Name' placeholder='Product Name' />
								<Input label='Categories' placeholder='Categories' />
								<Input
									label='Product Description'
									placeholder='Product Description'
								/>
							</form>
						</WhiteWrapper>
						<div className='flex items-center justify-between'>
							<Button theme='outline'>Discard</Button>
							<Button
								onClick={() => {
									router.push({
										pathname: "/collaboration/rfp/create",
										query: {
											step: "2",
										},
									});
								}}>
								Continue
							</Button>
						</div>
					</div>
				)}
				{step === "2" && (
					<div className='space-y-8'>
						<WhiteWrapper title='Create Criteria '>
							<div className='flex items-center justify-between'>
								<div className='text-sm text-dark-100'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque.
								</div>
								<Button>Add Criteria</Button>
							</div>
						</WhiteWrapper>
						<WhiteWrapper title='Create Fields '>
							<div className='flex items-center justify-between'>
								<div className='text-sm text-dark-100'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque.
								</div>
								<Button>Add Criteria</Button>
							</div>
						</WhiteWrapper>
						<div className='flex items-center justify-between'>
							<Button theme='outline'>Discard</Button>
							<div className='flex items-center justify-between'>
								<Button theme='plain' className='text-primary w-[200px]'>
									Skip Step
								</Button>
								<Button
									onClick={() => {
										router.push({
											pathname: "/collaboration/rfp/create",
											query: {
												step: "3",
											},
										});
									}}>
									Continue
								</Button>
							</div>
						</div>
					</div>
				)}
				{step === "3" && (
					<div className='space-y-6'>
						<WhiteWrapper title='Add Fields '>
							<div className='flex items-center justify-between'>
								<div className='text-sm text-dark-100'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque.
								</div>
								<Button>Add Criteria</Button>
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
						</WhiteWrapper>

						<WhiteWrapper title='Create Fields '>
							<div className='flex items-center justify-between'>
								<div className='text-sm text-dark-100'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Quisque.
								</div>
								<Button>Add Criteria</Button>
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
							<div className='p-5 mt-5 rounded-xl bg-accents-light-blue'>
								<Input label='Description' placeholder='Description' />
							</div>
						</WhiteWrapper>

						<div className='flex items-center justify-between'>
							<Button theme='outline'>Discard</Button>
							<div className='flex items-center justify-between'>
								<Button theme='plain' className='text-primary w-[200px]'>
									Skip Step
								</Button>
								<Button
									onClick={() => {
										router.push({
											pathname: "/collaboration/rfp/create",
											query: {
												step: "4",
											},
										});
									}}>
									Continue
								</Button>
							</div>
						</div>
					</div>
				)}

				{step === "4" && (
					<div className='space-y-6'>
						<WhiteWrapper title='Client Communication'>
							<div className='text-sm text-dark-100'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Quisque.
							</div>
						</WhiteWrapper>

						<div className='flex items-center justify-between'>
							<Button theme='outline'>Discard</Button>
							<div className='flex items-center justify-between'>
								<Button theme='plain' className='text-primary w-[200px]'>
									Skip Step
								</Button>
								<Button
									onClick={() => {
										router.push({
											pathname: "/collaboration/rfp/create",
											query: {
												step: "5",
											},
										});
									}}>
									Continue
								</Button>
							</div>
						</div>
					</div>
				)}
			</CreateRFPWrapper>
		</DefaultLayout>
	);
};

export default create;
