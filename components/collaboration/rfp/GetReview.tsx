import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import moment from "moment";
import { useGetRFPCodeQuery } from "@/services/collaborations";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/components/global/Input";

type GenerateCode = {
  data: { code: string };
};

export type CodeValues = {
  code: string;
};

// type PreDetailsFormProps = {
//   preDetailForm: (details: CodeValues) => void;
// };

const GetReview = ({
  rfpDetails,
  bidSelectionT,
  selectionCritria,
  budgetDetails,
  handleRFPSubmit,
  preDetailForm,
}: any) => {
  const router = useRouter();
  console.log(preDetailForm);

  const [triggerPage, setTriggerPage] = useState<boolean>();
  const isTriggerred = () => setTriggerPage(!triggerPage);

  const [codeData, getCodeData] = useState<GenerateCode>();

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetRFPCodeQuery({
    token,
  });
  console.log(data?.data.code);
  console.log(codeData);

  useEffect(() => {
    if (data) {
      getCodeData(data as any);
      setValue("code", data.data.code as string);
    }
  }, [isSuccess, data]);

  console.log(rfpDetails, bidSelectionT, selectionCritria, budgetDetails);

  const methods = useForm({
    defaultValues: {
      code: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    setValue,
  } = methods;

  const details = watch();
  console.log(details);

  const handleSubmit = () => {
    const body = { ...details };
    preDetailForm(body);
    handleRFPSubmit();
  };
  console.log(preDetailForm);
  console.log(handleRFPSubmit);

  return (
    <div>
      <div className="space-y-6">
        <WhiteWrapper title="RFPCode">
          <FormProvider {...methods}>
            <div className="flex justify-between">
              <div>
                <div className="text-sm text-dark-100 mb-3">
                  Copy Reference Code for this project
                </div>
                <Button className="bg-[#DFDFDF] text-[#808080]">
                  CopyRFQCode
                </Button>
              </div>
              <div>
                <Input placeholder={codeData?.data.code} name="code" />
              </div>
            </div>
          </FormProvider>
        </WhiteWrapper>
        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                RFP Summary
              </div>
              <div
                onClickCapture={isTriggerred}
                className="text-[#3772FF] font-bold text-base  "
              >
                Modify
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5">
              <div className="text- font-semibold text-black">Project Name</div>
              <div className="text-sm font-normal text-[#0C1938]">
                {rfpDetails?.productName}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text- font-semibold text-black">
                Project Category
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {rfpDetails?.category}
              </div>
            </div>
            <hr />
            <div className="flex  justify-between py-3.5 ">
              <div className="text- font-semibold text-black w-1/2">
                Project Description
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {rfpDetails?.scopeOfWork}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              {" "}
              <div className="text-base font-semibold text-black">
                Bid Selection & Timeline
              </div>
              <div className="text-[#3772FF] font-bold text-base ">Modify</div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                {" "}
                Deadline for Bids
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {" "}
                {moment(bidSelectionT?.bids.deadline).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Selection of Bidder & Contract Award
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {" "}
                {moment(bidSelectionT?.bids.selectionDate).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex  justify-between py-3.5">
              <div className="text-base font-semibold text-black w-1/2">
                Side Note
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {bidSelectionT?.bids.note}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Selection Criteria
              </div>
              <div className="text-[#3772FF] font-bold text-base ">Modifiy</div>
            </div>
            <hr />
            <div className="flex  justify-between py-3.5 ">
              <div className="text-base font-semibold text-black w-1/2">
                Chanels of communication
              </div>
              <div className="text-sm font-normal text-[#0C1938] w-5/6">
                {selectionCritria?.selectionCriteria}
              </div>
            </div>
          </div>
        </WhiteWrapper>

        <WhiteWrapper>
          <div>
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                RFP Budget
              </div>
              <div className="text-[#3772FF] font-bold text-base ">Modifiy</div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Chanels of communication
              </div>
              <div className="text-sm font-normal text-[#0C1938]">{`N${budgetDetails?.budgets?.[0].value}`}</div>
            </div>
          </div>
        </WhiteWrapper>

        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>

          <div className="flex items-center justify-between">
            <Button
              type="submit"
              disabled={!isValid}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReview;
