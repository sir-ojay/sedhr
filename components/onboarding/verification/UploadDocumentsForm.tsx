import Button from "@/components/global/Button";
import FileUpload from "@/components/global/FileUpload";
import Input from "@/components/global/Input";
import { useUploadDocumentMutation } from "@/services/upload";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type UploadDocumentsFormProps = {
	documentsInfo: (details: any) => void;
};

const UploadDocumentsForm = ({ documentsInfo }: UploadDocumentsFormProps) => {
	const router = useRouter();

	const { type, idType } = router.query;

	const methods = useForm({
		defaultValues: {
			[idType?.toString().replaceAll("'", "") as string]: undefined,
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	const token = Cookies.get("sedherToken");

	const photoId = watch(idType?.toString().replaceAll("'", "") as string);

	const [uploadDocument, { isLoading }] = useUploadDocumentMutation();

	const handleUpload = async () => {
		try {
			let data: any = [];
			const result = (await uploadDocument({
				file: photoId as any,
				token: token as string,
			}).unwrap()) as any;
			data.push({
				idType,
				idLink: result.data[0],
				// publicId: result.data.publicId,
			});
			documentsInfo(data);
		} catch (err: any) {
			toast.error(err?.data?.message || err.data.error);
		}
	};

	const handleStep = async (step: number) => {
		if (step === 5) {
			await handleUpload();
			// router.push({
			// 	pathname: "/onboarding/start",
			// 	query: {
			// 		...router.query,
			// 	},
			// });
		} else {
			router.push({
				pathname: "/onboarding/verification",
				query: {
					...router.query,
					step,
				},
			});
		}
	};

	return (
		<>
			<section className='w-full bg-white p-5 md:p-8'>
				<FormProvider {...methods}>
					<form>
						<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
							Upload document
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input
								name={
									(idType?.toString().replaceAll("'", "") as string) || "name"
								}
								type='file'
								label={(idType as string) || "Name"}
							/>
							{/* <Input name="" type='file' label='CAC registration' />
							<Input type='file' label='Operating permit' />
							<Input type='file' label='Operating License' />
							<Input type='file' label='Tax ID Document' />
							<Input type='file' label='Driver License ' /> */}
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex flex-col-reverse md:flex-row gap-3 justify-between my-10'>
				<Button
					onClick={() =>
						handleStep(
							type?.toString() === "hcp's"
								? 1
								: type?.toString() === "patient care centres"
								? 3
								: 2
						)
					}
					size='sm'
					theme='outline'
					className='w-full md:w-[311px]'>
					Previous Step
				</Button>
				<Button
					disabled={!isValid}
					loading={isLoading}
					type='submit'
					onClick={() => handleStep(5)}
					size='sm'
					className='w-full md:w-[311px]'>
					Complete
				</Button>
			</div>
		</>
	);
};

export default UploadDocumentsForm;
