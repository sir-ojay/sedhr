import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import LabelValue from "@/components/global/LabelValue";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
  useGetH2HQuery,
  useCreateMessageMutation,
} from "@/services/collaborations";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import JWT from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { LoginResponse } from "@/types/auth/auth";
import { useVerifyPaymentMutation } from "@/services/onboarding";
import { VerifyPaymentResponse } from "@/types/onboarding";

const Details = () => {

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
   const [verify] = useVerifyPaymentMutation();
 
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
    //  console.log(reference);
     setTimeout(() => verifyPayment(reference as any), 2500);
   };
 
   const onClose = () => {
     // console.log("closed");
   };
 
   const initializePayment = usePaystackPayment(config);
 
   const makePayment = (_amount: number | string | any) => {
     setAmount(_amount);
     setCount(count + 1);
   };
 
   useEffect(() => {
     if (amount > 0) initializePayment(onSuccess, onClose);
   }, [amount, count]);
  const router = useRouter();

  // const token: any = Cookies.get("sedherToken");

  const { data, isLoading } = useGetH2HQuery({
    token,
    id: router.query.id?.toString()!,
  });
  // console.log(data?.data._id);

  const [chat, messageMutationData] = useCreateMessageMutation();
  const startChat = async () => {
    try {
      const result = await chat({
        token,
        body: {
          content: "Hello ",
          receiverId: data?.data?._id,
          contentType: "text",
        },
      }).unwrap();
      router.push("/collaboration/sedher-h2h-commerce/chats");
    } catch (error: any) {
      alert(error?.data?.error);
      console.log(error?.data?.error);
      // console.log(err );
    }
  };
  return (
    <DefaultLayout title="Sedher | Collaboration | RFP">
      <div className="grid grid-cols-6 gap-8">
        <section className="col-span-4 space-y-6">
          <WhiteWrapper>
            <div className="rounded-xl overflow-hidden flex ">
              {data?.data.images.map((img: any) => (
                <Image
                  className="w-full h-[300px] object-cover"
                  src={
                    img === "cloudinary-link-here"
                      ? "/assets/images/collabo.jpg"
                      : img || ""
                  }
                  width={5}
                  height={9}
                  layout="responsive"
                  alt=""
                />
              ))}
            </div>
          </WhiteWrapper>

          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-[#2A2069]">
                {data?.data.productDetails.name}
              </h4>
              <p className="text-dark-100 leading-8">
                {data?.data.productDetails.description}
              </p>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-black">
                cost and benefits
              </h4>
              <div className="space-y-4">
                {/* <LabelValue
									label='Amount to be pay upfront'
									value='18%'
									info='icon'
								/> */}
                {/* <LabelValue
									label='Dismantling & loading costs (binding)'
									value='NGN 300,000'
									info='icon'
								/> */}
                <LabelValue
                  label={"Price"}
                  value={` NGN ${
                    data?.data?.paymentDetails?.prices[0]?.value || "N/A"
                  }`}
                />
                {/* <LabelValue label=Plus VAT' value='NGN 30,000' />
								<LabelValue label='Shipping Cost' value='NGN 30,000' />
								<LabelValue
									label='payment terms'
									value='100% payment prior to collection'
								/> */}
              </div>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-black">
                Techincal Details
              </h4>
              <div className="space-y-4">
                <LabelValue
                  label="Weight Approx"
                  value={data?.data.technicalDetails.weight!}
                />
                <LabelValue
                  label="Dimensions(length,width and height)"
                  value={data?.data.technicalDetails.dimensions!}
                />
              </div>
            </div>
          </WhiteWrapper>

          <div className="flex justify-between !mt-[47px]">
            <Button onClick={() => router.back()} theme="outline">
              Back
            </Button>
            {/* <Button
							onClick={() =>
								router.push(
									"/collaboration/sedher-h2h-commerce/thomas-clinics/order-items"
								)
							}>
							Place Order
						</Button> */}
          </div>
        </section>
        <section className="col-span-2 space-y-6">
          <WhiteWrapper>
            <div>
              <div className="flex w-full gap-5">
                <div>
                  <Avatar
                    href="/connection/1"
                    shape="square"
                    size={54}
                    name={data?.data.owner?.name!}
                    image={data?.data.owner?.profilePicture!}
                  />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-l font-semibold text-dark-900">
                      {data?.data.owner.name}
                    </h3>
                    <StatusPill
                      text="Service"
                      bg="#FF39561A"
                      textColor="#FF3956"
                    />
                  </div>
                  <div className="text-lg space-x-3">
                    {/* <span className="text-dark-100">Dental clinics</span> */}
                    <span className="text-[#F47D5B]">
                      {data?.data.owner.accountType}
                    </span>
                  </div>
                  <div className="text-base text-dark-100">
                    {moment(data?.data.createdAt).format("DD, MMMM yy")}
                  </div>
                </div>
              </div>
              <Button
                theme="outline"
                className="w-full mt-5"
                onClick={() => router.push("/connection/1")}
              >
                view profile
              </Button>
            </div>
          </WhiteWrapper>

          <WhiteWrapper>
            <div className="sticky  ">
              <div className="space-y-4">
                <h4 className="font-semibold text-xl font-archivo text-black">
                  Item details
                </h4>
                <div className="space-y-4">
                  <LabelValue
                    label="Name"
                    value={data?.data.productDetails.name!}
                    orientation="vertical"
                  />
                  <LabelValue
                    label="Item Description"
                    value={data?.data.itemDetails.description!}
                    orientation="vertical"
                  />
                  <LabelValue
                    label="Model / type"
                    value={data?.data.itemDetails.modelOrType!}
                    orientation="vertical"
                  />
                  {/* <LabelValue
                    label="Year of manufacture"
                    value={"N/A"}
                    orientation="vertical"
                  /> */}
                  {/* <LabelValue
										label='Item available from'
										value='Immediately'
										orientation='vertical'
									/>
									<LabelValue
										label='Item condition'
										value='unchecked'
										orientation='vertical'
									/> */}
                  <LabelValue
                    label="Pickup location"
                    orientation="vertical"
                    value={`${data?.data.pickupLocation.address}, ${data?.data.pickupLocation.lga}, ${data?.data.pickupLocation.state}, ${data?.data.pickupLocation.country}.`}
                  />
                </div>
              </div>
            </div>
            <Button theme="outline" className="w-full mt-5" onClick={() => makePayment(data?.data?.paymentDetails?.prices[0]?.value)}>
         Make payment
          </Button>
          </WhiteWrapper>
       



          <Button theme="outline" className="w-full mt-5" onClick={startChat}>
            Start Chat
          </Button>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Details;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
