import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ControllerRenderProps, FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";  
import { useUploadDocumentMutation } from "@/services/upload";
import { toast } from "react-toastify";

export type RfpDetails = {
  productName: string;
  category: string;
  scopeOfWork: string;
  additionalDetails?: {
    fieldName: string;
    value: any | undefined;
  }[];
};


type RfpDetailsFormProps = {
  rfpDetailsForm: (details: RfpDetails) => void;
};

const RfpDeatails = ({ rfpDetailsForm }: RfpDetailsFormProps) => {

  const [uploadDocument, { isLoading }] = useUploadDocumentMutation();

	const token = Cookies.get("sedherToken");

const [file, setFile] = useState<any>("");

const onFileChange = async(e:any) => {
  console.log("knjk")
 const  photoId = e?.target?.files?.[0]
  try {
    let data: any = [];
    const result = (await uploadDocument({
      file: photoId as any,
      token: token as string,
    }).unwrap()) as any;
    data.push({
      idType:"rfp",
      idLink: result.data[0],
      // publicId: result.data.publicId,
    });
    console.log(data)
    // documentsInfo(data);
  } catch (err: any) {
    toast.error(err?.data?.message || err.data.error);
  }
};

  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      productName: "",
      category: "",
      scopeOfWork: "",
      additionalDetails: [
        {
          fieldName: "",
          value: " ",
        }
      ],
    },
    mode: "onChange",
  });

  const {
    formState: { errors ,  isValid},
    watch,
    getValues,
    setValue,
  } = methods;
  // const handleScopeOfWorkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const inputText = e.target.value;
  //   const maxLength = 20;
  //   if (inputText.length > maxLength) {
  //     e.target.value = inputText.substring(0, maxLength);
  //   }
  //   setValue("scopeOfWork", e.target.value);
  // };
  // const handleScopeOfWork1Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const inputText = e.target.value;
  //   const maxLength = 20;
  //   if (inputText.length > maxLength) {
  //     e.target.value = inputText.substring(0, maxLength);
  //   }
  //   setValue("additionalDetails.0.value", e.target.value);
  // };

  // let setValueFunc = setValue; reusing the function
  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    maxLength: number,
    setValue: (
      name: string,
      value: any,
      options?: Partial<ControllerRenderProps>
    ) => void
  ) => {
    const inputText = e.target.value;
    if (inputText.length > maxLength) {
      e.target.value = inputText.substring(0, maxLength);
    }
    setValue(e.target.name, e.target.value);
  };
  const details = watch();
  console.log(details);

  const handleStep = () => {
    const body = {
      ...details,
    };
    rfpDetailsForm(body);
    router.push({
      pathname: "/collaboration/rfp/create",
      query: {
        step: "2",
      },
    });
    console.log(body);
  };

  const [isOpen, setIsOpen] = useState(false);
  const addDetails = () => setIsOpen(!isOpen);
  useEffect(() => {}, [errors]);
  const handleUpload = async () => {
		try {
			let data: any = [];
			const result = (await uploadDocument({
        file: data as any,
				token: token as string,
			}).unwrap()) as any;
			data.push({
				idLink: result.data[0],
				// publicId: result.data.publicId,
			});
      console.log(result, data);
      console.log( data);
		} catch (err: any) {
			toast.error(err?.data?.message || err.data.error);
		}
	};
  // const handlePhotoChange = (event) => {
  //   setPhotoId(event.target.files[0]);
  // };

  return (
    <>
      <div className="space-y-6">
      {/* <WhiteWrapper title="RFPCode">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-dark-100 mb-3">
                    Copy Reference Code for this project
                  </div>
                  <Button>CopyRFQCode</Button>
                </div>
                <div>
                  <Input
                    placeholder={codeData?.data.code}
                    name={codeData?.data.code}
                  />
                  <div className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
                  <p>{codeData?.data.code}</p>
                  </div>
                 
                </div>
              </div>
            </WhiteWrapper> */}
        <FormProvider {...methods}>
          <form className="space-y-6">
          
            <WhiteWrapper title="RFP Details">
              <Input
                label="Project Name"
                placeholder="Project Name"
                name="productName"
                rules={["required"]}
              />
              <Input
                label="Project Category"
                placeholder="Project Category"
                name="category"
                rules={["required"]}
              />

              <label htmlFor="Scope of Work" className="flex flex-col relative">
                <span className="w-full font-bold text-left text-title mb-1">
                  Scope of Work
                </span>
                {/* <textarea
                  className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                  id="scopeOfWork"
                  cols={30}
                  placeholder="Scope of Work"
                  rows={1}
                  {...register("scopeOfWork", { maxLength: 20 })}
                  onChange={(e) => {
                    handleScopeOfWorkChange(e);
                  }
                
                }
                /> */}
                <textarea
                  className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                  id="scopeOfWork"
                  name="scopeOfWork"
                  cols={30}
                  placeholder="Scope of Work"
                  rows={1}
                  onChange={(e) => handleTextChange(e, 2000, setValue)}
                  value={getValues("scopeOfWork")}
                />
              </label>
              <div className="flex justify-between text-dark-100">
                <span>Maximum 2000 characters</span>

                <span>{details.scopeOfWork.length}/ 2000</span>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-[#101C1D] font-semibold">
                    Additional Information
                  </p>
                  <p className="text-[#616A6A] text-sm">Click to Add a Field</p>
                </div>

                <div
                  className="bg-[#B8C9C9]  w-[95px]
                  h-[42px] mt-1 rounded"
                >
                  <p
                    onClick={addDetails}
                    className="pt-2 pl-1 font-bold text-[#101C1D]"
                  >
                    + Add field
                  </p>
                </div>
              </div>
              <div>
                {isOpen && (
                  <div>
                    <div className="bg-[#F5FBFE] mt-3 p-5">
                      <Input
                        label="Label Name"
                        placeholder=""
                        name="additionalDetails.[0].fieldName"
                      />

                      <label
                        htmlFor="Description"
                        className="flex flex-col relative"
                      >
                        <span className="w-full font-bold text-left text-title mb-1">
                          Description
                        </span>
                        {/* <textarea
                        className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                        id="value"
                        cols={30}
                        placeholder="Description"
                        rows={1}
                        {...register(`additionalDetails.${0}.value`, {
                          maxLength: 20,
                        })}
                        {...register("scopeOfWork", { maxLength: 20 })}
                        onChange={(e) => {
                          handleScopeOfWork1Change(e);
                        }}
                      /> */}
                        <textarea
                          className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                          id="additionalDetails"
                          name="additionalDetails.0.value"
                          cols={30}
                          placeholder="Additional Details"
                          rows={1}
                          onChange={(e) => handleTextChange(e, 2000, setValue)}
                          value={getValues("additionalDetails.0.value")}
                        />
                      </label>
                      <div className="flex justify-between text-dark-100">
                        <span>Maximum 2000 characters</span>
                        <span>
                          {details.additionalDetails[0].value.length}/ 2000
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#F5FBFE] mt-3 p-5">
                      <h5 className="font-epilogue capitalize font-semibold text-[20px] text-dark-900 mb-4">
                        Upload Document
                      </h5>

                      <Input
                        label="Description"
                        placeholder="Description"
                        name="additionalDetails.[1].fieldName"
                        rules={["required"]}
                      />

                      <div className="mt-3">
                        <Input onChange={onFileChange}  name="additionalDetails.[1].value"  showFilePreview type="file"  />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </WhiteWrapper>
          </form>
        </FormProvider>
        <div className="flex items-center justify-between">
          <Button theme="outline">Discard</Button>
          <Button
            type="submit"
            disabled={!isValid}
            onClick={() => handleStep()}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default RfpDeatails;
