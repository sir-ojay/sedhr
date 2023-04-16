import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import JWT from "jsonwebtoken";
// import { RFP } from "@/types/collaboration";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { LoginResponse } from "@/types/auth/auth";
import { useVerifyPaymentMutation } from "@/services/onboarding";
import { VerifyPaymentResponse } from "@/types/onboarding";

const MakePayment = () => {
  const router = useRouter();

  // Payment functions
  const [amount, setAmount] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<LoginResponse>();
  // const [rfpData, setRfpData] = useState<RFP>();
  // console.log(rfpData);
  const token: any = Cookies.get("sedherToken");

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
  const [verify, { isLoading }] = useVerifyPaymentMutation();

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
        pathname: "/collaboration/rfp/create",
        query: {
          step: "6",
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

  return (
    <>
      <div className="space-y-6">
        <>
          <form className="space-y-6">
            <WhiteWrapper title="RFP Submission Fee">
              <div className="text-sm text-dark-100">
                Fee for the RFP
                <div className="flex items-center justify-between">
                  <div className="text-sm text-dark-100">Description</div>
                  <div className="w py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none">
                    <p>N2000</p>
                  </div>
                </div>
              </div>
            </WhiteWrapper>
          </form>
        </>

        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>

          <div className="flex items-center justify-between">
            <Button onClick={() => makePayment(2000)}>Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
