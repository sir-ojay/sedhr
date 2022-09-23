import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import RadioInputGroup from "@/components/global/RadioInputGroup";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const CompanyDetailsForm = () => {
	const router = useRouter();
	const [theater, setTheater] = useState("");
	const [xrays, setXrays] = useState("");
	const [icu, setIcu] = useState("");
	const [ultrasound, setUltrasound] = useState("");
	const [emergency, setEmergency] = useState("");
	const [ctscan, setCtScan] = useState("");
	const [anethesiaSystems, setAnethesiaSystems] = useState("");
	const [monitors, setMonitors] = useState("");
	const [mri, setMri] = useState("");
	const [ecg, setEcg] = useState("");
	const [lab, setLab] = useState("");
	const [pharmacy, setPharmacy] = useState("");

	const handleStep = (step: number) =>
		router.push(`/onboarding/verification?step=${step}`);

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;
	return (
		<>
			<section className='w-full bg-white p-5 md:p-8'>
				<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
					Company Detail
				</h4>
				<FormProvider {...methods}>
					<form className='space-y-10'>
						<div className='flex flex-col md:flex-row gap-8'>
							<RadioInputGroup
								label='Number  of  beds'
								options={["1-10", "11-20", "21-30", "31-40", "41-above"]}
								onChange={(e) => console.log(e.target.value)}
								name='numberOfBeds'
							/>
							<div className='w-full md:w-[400px]'>
								<Input
									label='Average patient turnover per year'
									placeholder='Average patient turnover per year'
								/>
							</div>
						</div>
						<hr />
						<div className='flex flex-col w-full md:flex-row justify-between flex-wrap gap-10'>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Theater'
									options={["Yes", "No"]}
									onChange={(e) => setTheater(e.target.value)}
									name='theater'
									className='w-full md:w-auto'
								/>
								{theater === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='X-rays'
									options={["Yes", "No"]}
									onChange={(e) => setXrays(e.target.value)}
									name='xrays'
									className='w-full md:w-auto'
								/>
								{xrays === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='ICU'
									options={["Yes", "No"]}
									onChange={(e) => setIcu(e.target.value)}
									name='icu'
									className='w-full md:w-auto'
								/>
								{icu === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
						</div>
						<div className='flex flex-col w-full md:flex-row justify-between flex-wrap gap-10'>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Ultrasound'
									options={["Yes", "No"]}
									onChange={(e) => setUltrasound(e.target.value)}
									name='ultrasound'
									className='w-full md:w-auto'
								/>
								{ultrasound === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Emergency'
									options={["Yes", "No"]}
									onChange={(e) => setEmergency(e.target.value)}
									name='emergency'
									className='w-full md:w-auto'
								/>
								{emergency === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='CT Scan'
									options={["Yes", "No"]}
									onChange={(e) => setCtScan(e.target.value)}
									name='ctScan'
									className='w-full md:w-auto'
								/>
								{ctscan === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
						</div>
						<div className='flex flex-col w-full md:flex-row justify-between flex-wrap gap-10'>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Monitors'
									options={["Yes", "No"]}
									onChange={(e) => setMonitors(e.target.value)}
									name='monitors'
									className='w-full md:w-auto'
								/>
								{monitors === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='MRI'
									options={["Yes", "No"]}
									onChange={(e) => setMri(e.target.value)}
									name='mri'
									className='w-full md:w-auto'
								/>
								{mri === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Anethesia Systems'
									options={["Yes", "No"]}
									onChange={(e) => setAnethesiaSystems(e.target.value)}
									name='anethesiaSystems'
									className='w-full md:w-auto'
								/>
								{anethesiaSystems === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
						</div>
						<div className='flex flex-col w-full md:flex-row justify-between flex-wrap gap-10'>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='ECG'
									options={["Yes", "No"]}
									onChange={(e) => setEcg(e.target.value)}
									name='ecg'
									className='w-full md:w-auto'
								/>
								{ecg === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Lab'
									options={["Yes", "No"]}
									onChange={(e) => setLab(e.target.value)}
									name='lab'
									className='w-full md:w-auto'
								/>
								{lab === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
							<div className='flex flex-col md:flex-row gap-[1px] items-end'>
								<RadioInputGroup
									label='Pharmacy'
									options={["Yes", "No"]}
									onChange={(e) => setPharmacy(e.target.value)}
									name='pharmacy'
									className='w-full md:w-auto'
								/>
								{pharmacy === "Yes" && (
									<div className='w-full md:w-[125px]'>
										<Input placeholder='how many?' />
									</div>
								)}
							</div>
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex flex-col-reverse md:flex-row gap-3 justify-between my-10'>
				<Button
					onClick={() => handleStep(2)}
					size='sm'
					theme='outline'
					className='w-full md:w-[311px]'>
					Previous Step
				</Button>
				<Button
					onClick={() => handleStep(4)}
					size='sm'
					className='w-full md:w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default CompanyDetailsForm;
