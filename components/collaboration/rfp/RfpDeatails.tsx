import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ControllerRenderProps, FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useUploadDocumentMutation } from "@/services/upload";
import { toast } from "react-toastify";
import SelectInput from "@/components/global/SelectInput";

export type RfpDetails = {
  productName: string;
  category: string;
  scopeOfWork: string;
  communications: {
    channels: string[];
    responseToEmail: string;
    responseToFeedback: string;
    note: string;
  };
  additionalDetails?: {
    fieldName: string;
    value: any | undefined;
  }[];
};

type RfpDetailsFormProps = {
  rfpDetailsForm: (details: RfpDetails) => void;
};

const RfpDeatails = ({ rfpDetailsForm }: RfpDetailsFormProps) => {
  const [uploadDocument, { isLoading: isLoadingUpload }] =
    useUploadDocumentMutation();

  const token = Cookies.get("sedherToken");
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      productName: "",
      category: "",
      scopeOfWork: "",
      additionalDetails: [
        {
          fieldName: "",
          value: "",
        },
        {
          fieldName: "",
          value: "",
        },
      ],
      communications: {
        channels: ["slack"],
        responseToEmail: "2 days",
        responseToFeedback: "1 day",
        note: "This responses can vary",
      },
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    getValues,
    setValue,
  }: any = methods;
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
  // console.log(details);

  const handleStep = async () => {
    const url = (await uploadDocument({
      file: details.additionalDetails[2].value as any,
      token: token as string,
    }).unwrap()) as any;
    const body = {
      productName: details.productName,
      category: details.category,
      scopeOfWork: details.scopeOfWork,
      additionalDetails: [
        {
          fieldName: details.additionalDetails[0].fieldName,
          value: details.additionalDetails[0].value,
        },
        {
          fieldName: details.additionalDetails[1].fieldName,
          value: details.additionalDetails[1].value,
        },
        {
          fieldName: details.additionalDetails[2].fieldName,
          value: url.data[0],
        },
      ],
      communications: {
        channels: ["slack"],
        responseToEmail: "2 days",
        responseToFeedback: "1 day",
        note: "This responses can vary",
      },
    };
    rfpDetailsForm(body);
    router.push({
      pathname: "/collaboration/rfp/create",
      query: {
        step: "2",
      },
    });
    // console.log(body);
  };

  const [isOpen, setIsOpen] = useState(false);
  const addDetails = () => setIsOpen(!isOpen);
  useEffect(() => {}, [errors]);
  return (
    <>
      <div className="space-y-6">
        <FormProvider {...methods}>
          <form className="space-y-6">
            <WhiteWrapper title="RFP Details">
              <Input
                label="Project Name"
                placeholder="Project Name"
                name="productName"
                rules={["required"]}
              />
              <SelectInput
                name="category"
                label="Project Category"
                id="category"
                option="Project Category"
                required
                options={["Services", "Product"]}
              />

              <label htmlFor="Scope of Work" className="flex flex-col relative">
                <span className="w-full font-bold text-left text-title mb-1">
                  Scope of Work
                </span>

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
                        label="Dimensions(length,width and height)"
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
                      <Input
                        label="Label Name"
                        placeholder=""
                        name="additionalDetails.[1].fieldName"
                      />

                      <label
                        htmlFor="Description"
                        className="flex flex-col relative"
                      >
                        <span className="w-full font-bold text-left text-title mb-1">
                          Description
                        </span>

                        <textarea
                          className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                          id="additionalDetails1"
                          name="additionalDetails.1.value"
                          cols={30}
                          placeholder="Additional Details"
                          rows={1}
                          onChange={(e) => handleTextChange(e, 2000, setValue)}
                          value={getValues("additionalDetails.1.value")}
                        />
                      </label>
                      <div className="flex justify-between text-dark-100">
                        <span>Maximum 2000 characters</span>
                        <span>
                          {details.additionalDetails[1].value.length}/ 2000
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
                        name="additionalDetails.[2].fieldName"
                        rules={["required"]}
                      />

                      <div className="mt-3">
                        <Input
                          name="additionalDetails.[2].value"
                          showFilePreview
                          type="file"
                        />
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
