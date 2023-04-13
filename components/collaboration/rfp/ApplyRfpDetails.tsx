import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ControllerRenderProps, FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useUploadDocumentMutation } from "@/services/upload";
import { toast } from "react-toastify";

const ApplyRfpDetails = () => {
  const handleScopeOfWorkChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputText = e.target.value;
    const maxLength = 2000;
    if (inputText.length > maxLength) {
      e.target.value = inputText.substring(0, maxLength);
    }
    setValue("selectionCriteria", e.target.value);
  };

  const [uploadDocument, { isLoading }] = useUploadDocumentMutation();

  const token = Cookies.get("sedherToken");

  const [file, setFile] = useState<any>("");

  const onFileChange = async (e: any) => {
    console.log("knjk");
    const photoId = e?.target?.files?.[0];
    try {
      let data: any = [];
      const result = (await uploadDocument({
        file: photoId as any,
        token: token as string,
      }).unwrap()) as any;
      data.push({
        idType: "rfp",
        idLink: result.data[0],
        // publicId: result.data.publicId,
      });
      console.log(data);
      // documentsInfo(data);
    } catch (err: any) {
      toast.error(err?.data?.message || err.data.error);
    }
  };

  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      selectionCriteria: " ",
    },
    mode: "onChange",
  });

  const {
    formState: { errors },
    watch,
    getValues,
    register,
    setValue,
  } = methods;

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
    // rfpDetailsForm(body);
    router.push({
      pathname: "/collaboration/rfp",
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
      console.log(data);
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
        <WhiteWrapper title="RFPCode">
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-dark-100 mb-3">
                Copy Reference Code for this project
              </div>
              <Button>CopyRFQCode</Button>
            </div>
            {/* <div>
                  <Input
                    placeholder={codeData?.data.code}
                    name={codeData?.data.code}
                  />
                  <div className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
                  <p>{codeData?.data.code}</p>
                  </div>
                 
                </div> */}
          </div>
        </WhiteWrapper>
        <FormProvider {...methods}>
          <form className="space-y-6">
            <WhiteWrapper title="Product Details">
              <Input
                label="Field "
                placeholder="Field "
                name="productName"
                rules={["required"]}
              />

              <label htmlFor="Scope of Work" className="flex flex-col relative">
                <span className="w-full font-bold text-left text-title mb-1">
                  Field
                </span>
                <textarea
                  className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                  id="selectionCriteria"
                  cols={30}
                  placeholder="Write out your Selection Criteria below"
                  rows={1}
                  {...register("selectionCriteria", { maxLength: 2000 })}
                  onChange={(e) => {
                    handleScopeOfWorkChange(e);
                  }}
                  // {...register("post", { required: true })}
                />
              </label>
              <div className="flex justify-between text-dark-100">
                <span>Maximum 2000 characters</span>
                <span>{details.selectionCriteria.length} / 2000</span>
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
                  <Input
                    onChange={onFileChange}
                    name="additionalDetails.[1].value"
                    showFilePreview
                    type="file"
                  />
                </div>
              </div>
            </WhiteWrapper>
          </form>
        </FormProvider>
        <div className="flex items-center justify-between">
          <Button theme="outline">Discard</Button>
          <Button onClick={() => handleStep()}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default ApplyRfpDetails;
