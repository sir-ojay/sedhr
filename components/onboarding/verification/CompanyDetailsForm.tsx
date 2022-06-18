import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import RadioInputGroup from "@/components/global/RadioInputGroup";
import { useRouter } from "next/router";
import { useState } from "react";

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
	return (
		<>
			<section className='w-full bg-white p-8'>
				<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
					Company Detail
				</h4>
				<form className='space-y-10'>
					<div className='flex gap-8'>
						<RadioInputGroup
							label='Number  of  beds'
							options={["1-10", "11-20", "21-30", "31-40", "41-above"]}
							onChange={(e) => console.log(e.target.value)}
							name='numberOfBeds'
						/>
						<div className='w-[400px]'>
							<Input
								label='Average patient turnover per year'
								placeholder='Average patient turnover per year'
							/>
						</div>
					</div>
					<hr />
					<div className='flex justify-between flex-wrap gap-10'>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Theater'
								options={["Yes", "No"]}
								onChange={(e) => setTheater(e.target.value)}
								name='theater'
							/>
							{theater === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='X-rays'
								options={["Yes", "No"]}
								onChange={(e) => setXrays(e.target.value)}
								name='xrays'
							/>
							{xrays === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='ICU'
								options={["Yes", "No"]}
								onChange={(e) => setIcu(e.target.value)}
								name='icu'
							/>
							{icu === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
					</div>
					<div className='flex justify-between flex-wrap gap-10'>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Ultrasound'
								options={["Yes", "No"]}
								onChange={(e) => setUltrasound(e.target.value)}
								name='ultrasound'
							/>
							{ultrasound === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Emergency'
								options={["Yes", "No"]}
								onChange={(e) => setEmergency(e.target.value)}
								name='emergency'
							/>
							{emergency === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='CT Scan'
								options={["Yes", "No"]}
								onChange={(e) => setCtScan(e.target.value)}
								name='ctScan'
							/>
							{ctscan === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
					</div>
					<div className='flex justify-between flex-wrap gap-10'>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Monitors'
								options={["Yes", "No"]}
								onChange={(e) => setMonitors(e.target.value)}
								name='monitors'
							/>
							{monitors === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='MRI'
								options={["Yes", "No"]}
								onChange={(e) => setMri(e.target.value)}
								name='mri'
							/>
							{mri === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Anethesia Systems'
								options={["Yes", "No"]}
								onChange={(e) => setAnethesiaSystems(e.target.value)}
								name='anethesiaSystems'
							/>
							{anethesiaSystems === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
					</div>
					<div className='flex justify-between flex-wrap gap-10'>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='ECG'
								options={["Yes", "No"]}
								onChange={(e) => setEcg(e.target.value)}
								name='ecg'
							/>
							{ecg === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Lab'
								options={["Yes", "No"]}
								onChange={(e) => setLab(e.target.value)}
								name='lab'
							/>
							{lab === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
						<div className='flex gap-[1px] items-end'>
							<RadioInputGroup
								label='Pharmacy'
								options={["Yes", "No"]}
								onChange={(e) => setPharmacy(e.target.value)}
								name='pharmacy'
							/>
							{pharmacy === "Yes" && (
								<div className='w-[125px]'>
									<Input placeholder='how many?' />
								</div>
							)}
						</div>
					</div>
				</form>
			</section>
			<div className='flex justify-between my-10'>
				<Button
					onClick={() => handleStep(2)}
					size='sm'
					theme='outline'
					className='w-[311px]'>
					Previous Step
				</Button>
				<Button onClick={() => handleStep(4)} size='sm' className='w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default CompanyDetailsForm;
