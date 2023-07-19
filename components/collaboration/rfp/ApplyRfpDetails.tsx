import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useUploadDocumentMutation } from "@/services/upload";
import { toast } from "react-toastify";
import { useCreateRFPApplicationMutation } from "@/services/collaborations";

const ApplyRfpDetails = () => {
  const router = useRouter();

  const [uploadDocument] = useUploadDocumentMutation();

  const token = Cookies.get("sedherToken");

  const [file, setFile] = useState<any>("");

  // Uploading document

  const methods = useForm({
    defaultValues: {
      applicantId: router.query.id?.toString()!,
      details: [
        {
          fieldName: " ",
          value: " ",
        },
      ],
      images:[],
      documentLinks: [
        {
          fieldName: " ",
          value: " ",
        },
      ],
    },
    mode: "onChange",
  });

  const {
    formState: { errors },
    watch,
    register,
    setValue,
  } = methods;

  const detailsRFP = watch();
  // console.log(detailsRFP);

  // Text change/add  using useForm

  const handleScopeOfWorkChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputText = e.target.value;
    const maxLength = 2000;
    if (inputText.length > maxLength) {
      e.target.value = inputText.substring(0, maxLength);
    }
    setValue("details.0.value", e.target.value);
  };

  // uploading data

  const [completeRFP, { isLoading }] = useCreateRFPApplicationMutation();

  const handleCompleteRFP = async () => {
    try {
      // console.log(detailsRFP);

      const result = (await uploadDocument({
        file: detailsRFP.images as any,
        token: token as string,
      }).unwrap()) as any;

      let documentLinks: { value: string; fieldName: string | undefined }[] =
        result.data[0].map((img: string, i: number) => {
          return {
            value: img,
            fieldName: detailsRFP.images?.[i]?.name,
          };
        });
      // console.log(documentLinks);

      const rfpFinalData = {
        id: router.query.id?.toString()!,
        token: token as string,
        body: {
          applicantId: router.query.id?.toString()!,
          details: [
            {
              fieldName: detailsRFP.details[0].fieldName,
              value: detailsRFP.details[0].value,
            },
          ],
          documentLinks,
        } as any,
      };
      // console.log("rfp data", rfpFinalData);
      const resultRFP = await completeRFP(rfpFinalData).unwrap();
      toast.success("RFP completed successfully");
      // console.log("result", resultRFP);
      //   To route to start
      router.push("/collaboration/rfp");
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.data?.message || err.data.error);
    }
  };
  useEffect(() => {}, [errors]);

  return (
    <>
      <div className="space-y-6">
        <FormProvider {...methods}>
          <form className="space-y-6">
            <WhiteWrapper title="Product Details">
              <Input
                label="Field "
                placeholder="Field "
                name="details.0.fieldName"
                rules={["required"]}
              />

              <label htmlFor="Scope of Work" className="flex flex-col relative">
                <span className="w-full font-bold text-left text-title mb-1">
                  Field
                </span>
                <textarea
                  className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                  id="details.0.value"
                  cols={30}
                  placeholder="Write out your Selection Criteria below"
                  rows={1}
                  {...register("details.0.value", { maxLength: 500 })}
                  onChange={(e) => {
                    handleScopeOfWorkChange(e);
                  }}
                />
              </label>
              <div className="flex justify-between text-dark-100">
                <span>Maximum 500 characters</span>
                <span>{detailsRFP.details[0].value.length} / 500</span>
              </div>

              <Input
                label="Field"
                placeholder="Field"
                name="documentLinks.[0].fieldName"
                rules={["required"]}
              />

              <div className=" mt-3 p-5">
                <div className="mt-3 flex justify-between">
                  <div>
                    <h5 className="font-epilogue capitalize font-semibold text-[20px] text-dark-900 mb-4">
                      Upload Document
                    </h5>
                    <p className="text-[#4C4475] text-sm w-4/5 pb-3">
                      Lorem ipsum dolor sit amet, consectetur. Turpis lectus
                      aenean urna, at eget nibh. Arcu gravida vel.
                    </p>
                  </div>
                  <Input name="images" type="file" multiple />
                </div>

                <hr className="pt-3" />

                <p className="text-[#3772FF] text-sm">
                  NOTE : minimum upload is 2 images
                </p>
              </div>
            </WhiteWrapper>
          </form>
        </FormProvider>
        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>
          <Button onClick={() => handleCompleteRFP()}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default ApplyRfpDetails;
