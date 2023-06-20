import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import GoBackButton from "@/components/global/GoBackButton";
import DefaultLayout from "@/layouts/DefaultLayout";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";
import { Booking } from "@/types/collaboration";
import moment from "moment";
import LabelValue from "@/components/global/LabelValue";
import Input from "@/components/global/Input";
import { useGetBookingQuery } from "@/services/collaborations";
import GridContainer from "@/components/global/GridContainer";
import { FormProvider, useForm } from "react-hook-form";

const Viewdetails = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<Booking[]>();
  const token = Cookies.get("sedherToken") as string;
  let user = JWT.decode(token) as { id: string };
  // console.log(user?.id);
  const { data, isSuccess } = useGetBookingQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    data && setBookingData(data?.data);
  }, [isSuccess, data]);

  console.log(bookingData);
  const methods = useForm({
    defaultValues: {
      searchTerm: "",
    },
    mode: "onChange",
  });

  const { watch }: any = methods;
  const [grid, setGrid] = useState(3);

  const searchValue = watch();
  const getGrid = (grid: number) => {
    setGrid(grid);
  };


  return (
    <DefaultLayout>
      <div className="space-y-8">
        <GoBackButton
          label="Sedher Synergi"
          desc="Ensectetur adipiscing elit. Odio ullamcorper sed urna"
        />

<WhiteWrapper>
              <FormProvider {...methods}>
                <form action="">
                  <div
                    title="Search for Responses"
                    className="font-semibold text-lg text-dark-900"
                  >
                    Search for Responses
                  </div>
                  <Input
                    type="text"
                    name="searchTerm"
                    placeholder="Search for Responses"
                  />
                  {/* <p className='text-sm text-dark-100 mt-2'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
									</p> */}
                </form>
              </FormProvider>
            </WhiteWrapper>

            <GridContainer grid={grid}>
              {bookingData
                ?.filter((obj) => {
                  if (searchValue.searchTerm) {
                    return obj?.patients[0].firstName
                      ?.toLowerCase()
                      .includes(searchValue.searchTerm?.toLowerCase());
                  }
                  return true;
                })
                ?.map((eachBooking) => (
                    <WhiteWrapper>
                    <h6 className="text-[#7C8493] font-archivo text-xl font-normal pl-5 ">
                      Appointment Date
                    </h6>
                    <>
                      <p className="text-[#2A2069] font-medium font-epilogue text-sm pl-5 ">
                        Date :{" "}
                        {moment(eachBooking?.appointment?.dateSlot).format(
                          "DD, MMMM YYYY"
                        )}{" "}
                      </p>
                    </>
                    <div>
                      <p className="text-[#2A2069] font-medium font-epilogue text-sm pl-5 ">
                        Time :{" "}
                        {moment(eachBooking?.appointment?.selectedSlots[0]).format(
                          "HH:mm"
                        )}
                        -{" "}
                        {moment(eachBooking?.appointment?.selectedSlots[0])
                          .add(30, "minutes")
                          .format("HH:mm")}{" "}
                      </p>
                    </div>
        
                    <p></p>
        
                    {eachBooking.patients?.map((eachPatient): any => (
                      <>
                        <WhiteWrapper>
                          <div className="space-y-4">
                            <h4 className="font-semibold text-xl font-archivo text-black">
                              Patient Details
                            </h4>
                            <div className="space-y-4">
                              <LabelValue
                                label="Patient name"
                                value={`${eachPatient?.firstName} ${eachPatient?.lastName}`}
                              />
                              <LabelValue
                                label="condition"
                                value={eachPatient?.condition}
                              />
                              <LabelValue label="gender" value={eachPatient?.gender} />
                              <LabelValue label="age " value={eachPatient?.age} />
                              <LabelValue
                                label="Image "
                                value={eachPatient.attachment[0]}
                                isLink
                              />
                            </div>
                          </div>
                        </WhiteWrapper>
                      </>
                    ))}
                  </WhiteWrapper>
                ))}

{/* {bookingData?.map((eachBooking): string | any => (
          <WhiteWrapper>
            <h6 className="text-[#7C8493] font-archivo text-xl font-normal pl-5 ">
              Appointment Date
            </h6>
            <>
              <p className="text-[#2A2069] font-medium font-epilogue text-sm pl-5 ">
                Date :{" "}
                {moment(eachBooking?.appointment?.dateSlot).format(
                  "DD, MMMM YYYY"
                )}{" "}
              </p>
            </>
            <div>
              <p className="text-[#2A2069] font-medium font-epilogue text-sm pl-5 ">
                Time :{" "}
                {moment(eachBooking?.appointment?.selectedSlots[0]).format(
                  "HH:mm"
                )}
                -{" "}
                {moment(eachBooking?.appointment?.selectedSlots[0])
                  .add(30, "minutes")
                  .format("HH:mm")}{" "}
              </p>
            </div>

            <p></p>

            {eachBooking.patients?.map((eachPatient): any => (
              <>
                <WhiteWrapper>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl font-archivo text-black">
                      Patient Details
                    </h4>
                    <div className="space-y-4">
                      <LabelValue
                        label="Patient name"
                        value={`${eachPatient?.firstName} ${eachPatient?.lastName}`}
                      />
                      <LabelValue
                        label="condition"
                        value={eachPatient?.condition}
                      />
                      <LabelValue label="gender" value={eachPatient?.gender} />
                      <LabelValue label="age " value={eachPatient?.age} />
                      <LabelValue
                        label="Image "
                        value={eachPatient.attachment[0]}
                        isLink
                      />
                    </div>
                  </div>
                </WhiteWrapper>
              </>
            ))}
          </WhiteWrapper>
        ))} */}
            </GridContainer>

      
      </div>
    </DefaultLayout>
  );
};

export default Viewdetails;
