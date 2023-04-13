import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { RFP } from "@/types/collaboration";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { LoginResponse } from "@/types/auth/auth";
import { VerifyPaymentResponse } from "@/types/onboarding";
import { useVerifyPaymentMutation } from "@/services/onboarding";
import moment from "moment";
import { useGetRFPCodeQuery} from "@/services/collaborations";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/components/global/Input";



export type GenerateCode ={
  data: 
   { code : string}
}



export type CodeValues = {
  code: string;
}

type ReviewDetailsFormProps = {
  reviewDetailsForm: (details: CodeValues) => void;
};
const GetReview = ({rfpDetails, bidSelectionT,selectionCriteria,budgetDetails}:any, {reviewDetailsForm}:ReviewDetailsFormProps) => {
  const router = useRouter();

  const [codeData, getCodeData] = useState<GenerateCode>();

	const token: any = Cookies.get("sedherToken");

	const { data, isSuccess } = useGetRFPCodeQuery({
    token  
	});
  console.log(data?.data.code);
  console.log(codeData);

	useEffect(() => {
		data && getCodeData(data as any);
	}, [isSuccess, data]);


console.log(rfpDetails, bidSelectionT,selectionCriteria,budgetDetails);
  // Payment functions
  const [amount, setAmount] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<LoginResponse>();
  // const [synergi, setSynergi] = useState<any>();
  // console.log(synergi);

  const [rfpData, setRfpData] = useState<RFP>();
  console.log(rfpData);

  // const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };
  // console.log(user?.id);

  useEffect(() => {
    try {
      const userpayer = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUserDetails(userpayer);
    } catch (error) {
      // console.log(error);
    }
  }, []);
  const [verify,{isLoading}] = useVerifyPaymentMutation();

  const verifyPayment = async (ref: any) => {
    try {
      const body = {
        reference: ref.reference as string,
        amount: amount * 100,
        email: userDetails?.email.toLowerCase() as string,
      };
      (await verify(body).unwrap()) as VerifyPaymentResponse;
      toast.success("payment successful");
      router.push({
        pathname: "/collaboration/rfp/successfulPayment",
        query: {
          ...router.query,
          rfpData: JSON.stringify(rfpData),
        },
      });
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };
  // console.log({ user });
  const config = {
    reference: uuid(),
    email: userDetails?.email.toLowerCase() as string,
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK as string,
    userId: user?.id as string,
    paymentItem: "Sedher Subscription",
  };
  const onSuccess = (reference: void) => {
    console.log(reference);
    setTimeout(() => verifyPayment(reference as any), 2500);
  };

  const onClose = () => {
    // console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const makePayment = (_amount: number) => {
    setAmount(_amount);
    setCount(count + 1);
  };

  useEffect(() => {
    if (amount > 0) initializePayment(onSuccess, onClose);
  }, [amount, count]);

 
  const methods = useForm({
    defaultValues: {
      code:"",
    },
    mode: "onChange",
  });

  
  const {
    formState: { errors, isValid },
    watch,
  } = methods;

  const details = watch();
  console.log(details);

  const handleSubmit = async () => {
    const body = {
      ...details,
    };
    reviewDetailsForm(body);
    makePayment(2000);
  
  };

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
                  <Button>CopyRFQCode</Button>
                </div>
                <div>
                  <Input
                    placeholder={codeData?.data.code}
                    name='code'
                    value={codeData?.data.code}
                    // {...register('code')}
                  />
                  {/* <div className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
                  <p>{codeData?.data.code}</p>
                  </div> */}
                 
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
              <div className="text-[#3772FF] font-bold text-base ">Modify</div>
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
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text- font-semibold text-black">
                Project Description
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
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
                {moment(bidSelectionT?.deadline).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Selection of Bidder & Contract Award
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {" "}
                {moment(bidSelectionT?.selectionDate).format("DD, MMMM YYYY")}
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-basefont-semibold text-black">Side Note</div>
              <div className="text-sm font-normal text-[#0C1938]">
                {bidSelectionT?.note}
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
            <div className="flex items-center justify-between py-3.5 ">
              <div className="text-base font-semibold text-black">
                Chanels of communication
              </div>
              <div className="text-sm font-normal text-[#0C1938]">
                {selectionCriteria?.selectionCriteria}
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
              <div className="text-sm font-normal text-[#0C1938]">{`N${budgetDetails?.budgets?.value}`}</div>
            </div>
          </div>
        </WhiteWrapper>

        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>

          <div className="flex items-center justify-between">
            {/* <Button theme="plain" className="text-primary w-[200px]">
                    Skip Step
                  </Button> */}
            <Button  type="submit"  disabled={!isValid}  loading={isLoading}
          onClick={() => handleSubmit()}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReview;
