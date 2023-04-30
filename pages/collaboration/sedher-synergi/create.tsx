import CreateSnergiWrapper from "@/components/collaboration/sedher-synergi/CreateSynergiWrapper";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useCreateSnergiMutation } from "@/services/collaborations";
import { useUploadDocumentMutation } from "@/services/upload";
import {
  CreateSnergiRequest,
  CreateSnergiResponse,
} from "@/types/collaboration";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const create = () => {
  const router = useRouter();

  const { step } = router.query;
  const methods = useForm({
    defaultValues: {
      image: null,
      title: "",
      description: "",
      category: "",
      dimension: "",
      weight: "",
      street: "",
      lga: "",
      state: "",
      country: "",
      buildYear: "",
      condition: "",
      availability: "",
      serialNumber: "",
      duration: "",
      rangeTo: "",
      rangeFrom: "",
      status: "",
    },
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const {
    title,
    category,
    description,
    weight,
    street,
    lga,
    state,
    country,
    image,
    buildYear,
    condition,
    availability,
    dimension,
    serialNumber,
    duration,
    rangeFrom,
    rangeTo,
    status,
  } = watch();

  const [upload, { isLoading: isLoadingUpload }] = useUploadDocumentMutation();

  const [create, { isLoading }] = useCreateSnergiMutation();

  const token = Cookies.get("sedherToken");

  const onSubmit: SubmitHandler<CreateSnergiRequest | any> = async (data) => {
    const {
      title,
      category,
      description,
      weight,
      street,
      lga,
      state,
      country,
      image,
      buildYear,
      condition,
      availability,
      dimension,
      serialNumber,
      duration,
      rangeFrom,
      rangeTo,
      status,
    } = data;
    try {
      const url = (await upload({
        file: image as any,
        token: token as string,
      }).unwrap()) as any;

      const details = {
        token,
        body: {
          code: "234343AUTO",
          bookings: {
            title,
            category,
            bookingPageLink: "http://user-profile0link.com/synergy/book",
            description,
          },
          equipments: {
            imageUrl: url.data[0],
            buildYear: buildYear,
            condition,
            availability,
            status,
            weight,
            dimension,
            serialNumber,
            documents: ["document link 1", "document link 2"],
          },
          event: {
            duration,
            date: {
              range: [rangeFrom, rangeTo],
            },
            availabilities: [
              {
                day: "Mon",
                timeRange: ["08:00am", "06:00pm"],
              },
              {
                day: "Wednesday",
                timeRange: ["08:00am", "06:00pm"],
              },
              {
                day: "Friday",
                timeRange: ["08:00am", "06:00pm"],
              },
            ],
            maximumBookings: 5,
          },
          connectedCalendars: ["https://ical.com/calendar-link"],
          enableReminders: true,
          communicationChannels: ["Slack", "Google Meet"],
          locationDetails: {
            street,
            lga,
            state,
            country,
          },
          paymentDetails: {
            price: 300,
            prices: [
              {
                field: "Project KickStart Fee",
                value: 500000,
              },
            ],
            total: 500000,
          },
        },
      };
      const result = (await create(
        details as any
      ).unwrap()) as CreateSnergiResponse;
      console.log(result);
      toast.success("Snergi created successfully");
      router.push("/collaboration/sedher-synergi");
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };
  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateSnergiWrapper step={step}>
            {(step === "1" || step === undefined) && (
              <div className="space-y-6">
                <WhiteWrapper title="Product Details">
                  <div className="space-y-6">
                    <Input
                      name="title"
                      label="Title"
                      placeholder="Title"
                      rules={["required"]}
                    />
                    <Input
                      name="category"
                      label="Categories"
                      placeholder="Categories"
                      rules={["required"]}
                    />
                    <Input
                      name="description"
                      label="Description"
                      placeholder="Description"
                      rules={["required"]}
                    />
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button theme="outline">Discard</Button>
                  <Button
                    disabled={!title || !category || !description}
                    onClick={() => {
                      router.push({
                        pathname: router.pathname,
                        query: {
                          step: "2",
                        },
                      });
                    }}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            {step === "2" && (
              <div className="space-y-8">
                <WhiteWrapper title="Upload Image">
                  <Input name="image" showFilePreview type="file" required />
                </WhiteWrapper>
                <WhiteWrapper title="Item Details">
                  <div className="space-y-6">
                    <Input
                      name="buildYear"
                      label="Build Year"
                      placeholder="Build Year"
                    />
                    <Input
                      name="condition"
                      label="Condition"
                      placeholder="Condition"
                      rules={["required"]}
                    />
                    <Input
                      name="availability"
                      label="Availability"
                      placeholder="Availability"
                      rules={["required"]}
                    />
                    <Input name="weight" label="Weight" placeholder="Weight" />
                    <Input
                      name="dimension"
                      label="Dimension"
                      placeholder="Dimension"
                    />
                    <Input
                      name="serialNumber"
                      label="Serial Number"
                      placeholder="Serial Number"
                    />
                    <Input
                      name="status"
                      label="Status"
                      placeholder="Status"
                      rules={["required"]}
                    />
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button theme="outline">Discard</Button>
                  <div className="flex items-center justify-between">
                    <Button theme="plain" className="text-primary w-[200px]">
                      Skip Step
                    </Button>
                    <Button
                      disabled={
                        !condition || !availability || !status || !image
                      }
                      onClick={() => {
                        router.push({
                          pathname: router.pathname,
                          query: {
                            step: "3",
                          },
                        });
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {step === "3" && (
              <div className="space-y-6">
                <WhiteWrapper title="Events Duration">
                  <div className="space-y-6">
                    <Input
                      name="duration"
                      label="Duration"
                      placeholder="Duration"
                      rules={["required"]}
                    />
                    <div className="flex items-center space-x-6 justify-between">
                      <div className="flex-1">
                        <Input
                          name="rangeFrom"
                          label="From"
                          type={"date"}
                          placeholder="Duration"
                          rules={["required"]}
                        />
                      </div>
                      <div className="flex-1">
                        <Input
                          name="rangeTo"
                          label="To"
                          type={"date"}
                          placeholder="Duration"
                          rules={["required"]}
                        />
                      </div>
                    </div>
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button theme="outline">Discard</Button>
                  <div className="flex items-center justify-between">
                    {/* <Button theme='plain' className='text-primary w-[200px]'>
											Skip Step
										</Button> */}
                    <Button
                      disabled={!duration || !rangeFrom || !rangeTo}
                      onClick={() => {
                        router.push({
                          pathname: router.pathname,
                          query: {
                            step: "4",
                          },
                        });
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === "4" && (
              <div className="space-y-6">
                <WhiteWrapper title="Location Detail">
                  <div className="space-y-6">
                    <Input
                      name="country"
                      label="Country"
                      placeholder="Country"
                      rules={["required"]}
                    />
                    <Input
                      name="state"
                      label="State"
                      placeholder="State"
                      rules={["required"]}
                    />
                    <Input name="lga" label="LGA" placeholder="LGA" />
                    <Input
                      name="street"
                      label="Street"
                      placeholder="Street"
                      rules={["required"]}
                    />
                  </div>
                </WhiteWrapper>

                <div className="flex items-center justify-between">
                  {/* <Button theme="outline">Discard</Button> */}
                  <div className="flex items-center justify-between">
                    <Button
                      disabled={!country || !state || !street}
                      onClick={() => {
                        router.push({
                          pathname: router.pathname,
                          query: {
                            step: "5",
                          },
                        });
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {step === "5" && (
              <div className="space-y-6">
                <WhiteWrapper title="Payment Detail">
                  <div className="text-sm text-dark-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque.
                  </div>
                </WhiteWrapper>

                <div className="flex items-center justify-between">
                  {/* <Button theme="outline">Discard</Button> */}
                  <div className="flex items-center justify-between">
                    <Button
                      loading={isLoading || isLoadingUpload}
                      type="submit"
                    >
                      Create Synergi
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CreateSnergiWrapper>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
};

export default create;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
