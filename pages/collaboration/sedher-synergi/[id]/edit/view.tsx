import ServiceCard from "@/components/collaboration/sedher-synergi/ServiceCard";
import GoBackButton from "@/components/global/GoBackButton";
import LabelValue from "@/components/global/LabelValue";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Button from "@/components/global/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { Booking } from "@/types/collaboration";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { LoginResponse } from "@/types/auth/auth";
import { VerifyPaymentResponse } from "@/types/onboarding";
import { useVerifyPaymentMutation } from "@/services/onboarding";
import moment, { min } from "moment";
import { useGetBookingQuery } from "@/services/collaborations";

const Detail = () => {
  const router = useRouter();

  // Payment functions

  const [amount, setAmount] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<LoginResponse>();
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
        pathname: "/collaboration/sedher-synergi/successfulPayment",
        query: {
          ...router.query,
        },
      });
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  const config = {
    reference: uuid(),
    email: "prince.ibrahim76@gmail.com",
    amount: amount * 100,
    publicKey: "pk_live_ebab2cc4eaf68834bc414ba3c3c08e4147657e22",
    // userId: user?._id as string,
    paymentItem: "Sedher Subscription",
  };
  const onSuccess = (reference: void) => {
    setTimeout(() => verifyPayment(reference as any), 1500);
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
  const moment = require("moment");

  //   const dateTime = moment.utc("2023-02-22:10:30:00Z");
  //   const newDateTime = dateTime.local().add(30, "minutes");
  //   const time = newDateTime.format("HH:mm");

  // Get booking functions
  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };
  // console.log(user?.id);
  const [synergi, setSynergi] = useState<any>();

  const [bookingData, setBookingData] = useState<Booking>();
  console.log(bookingData);

  useEffect(() => {
    if (bookingData) {
      const userSynergi = [...(bookingData as Array<any>)].pop()
        // .reverse()
        // .find((data: any) => {
        //   console.log(data.synergy.owner, user.id);
        //   return data.synergy.owner == user.id;
          
        // });
      
      setSynergi(userSynergi);
      // setSynergi(bookingData);
      console.log(userSynergi);
    }
  }, [bookingData]);

  const { data, isSuccess } = useGetBookingQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    data && setBookingData(data?.data);
  }, [isSuccess, data]);

  return (
    <DefaultLayout>
      <div className="space-y-8">
        <GoBackButton
          label="Sedher Synergi"
          desc="Ensectetur adipiscing elit. Odio ullamcorper sed urna"
        />
      </div>

      <div className="grid grid-cols-6 gap-8 mt-5">
        <section className="col-span-4 space-y-6">
          <WhiteWrapper>
            <div className="flex justify-between space-x-3">
              <div className=" w-[182px]">
                <div className="rounded-xl mb-5">
                  <Image
                    width={165}
                    height={132}
                    // layout='responsive'
                    src={
                      "/assets/images/productCard.jpg" ||
                      `${synergi?.synergy?.equipments?.imageUrl}`
                    }
                    alt="post"
                  />
                </div>
                <div>
                  <Button
                    theme="plain"
                    size="sm"
                    className=" w-[90%] text-primary border  border-[#DDE4F6]"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <div className=" flex justify-between bg-[#F5FBFE] p-[12px]">
                  <div className="flex-1  pl-2">
                    <div className="flex space-x-4">
                      {/* <div>
												<Image
													width={24}
													height={24}
													// layout='responsive'
													src='/assets/icons/notify.svg'
													alt='notify'
												/>
											</div> */}
                      <div>
                        <div>
                          <Image
                            width={22}
                            height={22}
                            // layout='responsive'
                            src="/assets/icons/notify.svg"
                            alt="notify"
                          />
                        </div>
                        <div className="mb-3">
                          <h6 className="text-[#7C8493] font-archivo text-sm font-normal ">
                            Appointment Date
                          </h6>
                          <p className="text-[#2A2069] font-medium font-epilogue text-sm">
                            {moment(synergi?.appointment.dateSlot).format(
                              "DD, MMMM YYYY"
                            )} <br />
                            {moment(synergi?.appointment.selectedSlots[0]).format(
                             "HH:mm"
                            )}
                         -  {moment(synergi?.appointment.selectedSlots[0]).add(30, 'minutes').format("HH:mm")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div>
                      <Image
                            width={22}
                            height={22}
                            // layout='responsive'
                            src="/assets/icons/notify.svg"
                            alt="notify"
                          />
                      </div>
                      <div>
                        <div className="mb-3">
                          <h6 className="text-[#7C8493] text-sm  font-archivo font-normal ">
                            Created on
                          </h6>
                          <p className="text-[#2A2069] font-medium font-epilogue text-sm">
                            {moment(synergi?.createdAt).format("Do, MMMM YYYY")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div>
                      <Image
                            width={22}
                            height={22}
                            // layout='responsive'
                            src="/assets/icons/notify.svg"
                            alt="notify"
                          />
                      </div>
                      <div>
                        <div className="mb-3">
                          <h6 className="text-[#7C8493] text-sm  font-archivo font-normal ">
                            Address
                          </h6>
                          <h3 className="text-[#2A2069] font-medium font-epilogue text-sm">
                            {synergi?.synergy.locationDetails?.street}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1px] h-50 bg-[#B8C9C9]" />
                  <div className="flex-1  pl-2 pr-2">
                    <div className="flex space-x-2">
                      <div>
                        <Image
                          width={10}
                          height={10}
                          // layout='responsive'
                          src="/assets/icons/star.svg"
                          alt="star"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <h6 className="text-[#7C8493] font-archivo font-normal ">
                            Rate
                          </h6>
                          <p className="text-[#2A2069] font-medium font-epilogue text-sm">
                            <span className="text-[#FFCF14]">5.0</span> (67
                            reviews)
                          </p>
                        </div>
                        <div className="mb-3">
                          <Button
                            theme="plain"
                            size="sm"
                            className=" w text-primary border  border-[#DDE4F6]"
                          >
                            Edit Appointment
                          </Button>
                        </div>
                        <div className="mb-3">
                          <Button
                            onClick={() =>
                              makePayment(
                                synergi?.synergy.paymentDetails?.total
                              )
                            }
                            className="w-full"
                          >
                            Pay Now ({synergi?.synergy.paymentDetails?.total})
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-[#2A2069]">
                Description
              </h4>
              <p className="text-dark-100 leading-8">{synergi?.description}</p>
            </div>
          </WhiteWrapper>
          <WhiteWrapper>
            <div className="space-y-4">
              <h4 className="font-semibold text-xl font-archivo text-black">
                Patient Details
              </h4>
              <div className="space-y-4">
                <LabelValue
                  label="Patient name"
                  value={`${synergi?.patients[0]?.firstName} ${synergi?.patients[0]?.lastName}`}
                />
                <LabelValue
                  label="condition"
                  value={synergi?.patients[0]?.condition}
                />
                <LabelValue
                  label="gender"
                  value={synergi?.patients[0]?.gender}
                />
                <LabelValue label="age " value={synergi?.patients[0]?.age} />
                <LabelValue
                  label="Image "
                  value={synergi?.patients[0]?.attachment[0]}
                  isLink
                />
              </div>
            </div>
          </WhiteWrapper>
        </section>
        <section className="col-span-2 space-y-6">
          <WhiteWrapper>
            <ServiceCard  />
          </WhiteWrapper>

          <Button
            theme="plain"
            size="sm"
            // textColor='#FF3956'
            className=" w-full  border text-[#FF3956] border-[#DDE4F6] "
          >
            Cancel
          </Button>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Detail;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
