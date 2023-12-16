import CreateH2HWrapper from "@/components/collaboration/sedher-h2h-commerce/CreateH2HWrapper";
import Button from "@/components/global/Button";
// import GoBackButton from "@/components/global/GoBackButton";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useCreateH2HMutation } from "@/services/collaborations";
import { useUploadDocumentMutation } from "@/services/upload";
import { CreateH2HRequest, CreateH2HResponse } from "@/types/collaboration";
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
      name: "",
      description: "",
      category: "",
      quantity: "",
      modelOrType: "",
      itemDescription: "",
      dimensions: "",
      weight: "",
      address: "",
      lga: "",
      state: "",
      country: "",
      shipmentDetails: "",
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

  const [upload, { isLoading: isLoadingUpload }] = useUploadDocumentMutation();

  const [create, { isLoading }] = useCreateH2HMutation();

  const token = Cookies.get("sedherToken");

  const onSubmit: SubmitHandler<CreateH2HRequest | any> = async (data) => {
    const {
      name,
      category,
      description,
      quantity,
      modelOrType,
      itemDescription,
      dimensions,
      weight,
      address,
      lga,
      state,
      country,
      shipmentDetails,
      images,
    } = data;
    try {
      const url = (await upload({
        file: images as any,
        token: token as string,
      }).unwrap()) as any;
      let documentLinks = url.data[0];
      const details = {
        body: {
          code: "6756655",
          productDetails: {
            name,
            category,
            description,
            quantity,
          },
          images: documentLinks,
          itemDetails: {
            modelOrType,
            description: itemDescription,
          },
          technicalDetails: {
            dimensions,
            weight,
          },
          pickupLocation: {
            address,
            lga,
            state,
            country,
          },
          shipmentDetails,
          paymentDetails: {
            paymentType: "FIXED",
            price: 200,
            prices: [
              {
                fieldValue: "Price description breakdown",
                value: 4000,
              },
            ],
          },
        },
        token,
      };
      // console.log(details);
      const result = (await create(
        details as any
      ).unwrap()) as CreateH2HResponse;
      // console.log(result);
      toast.success("H2H created successfully");
      router.push("/collaboration/sedher-h2h-commerce");
    } catch (err: any) {
      toast.error(err?.data?.message);
      toast.error(err?.data?.error);
      console.log(err?.data?.message);
      console.log(err?.data?.error);
    }
  };
  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateH2HWrapper step={step}>
            {(step === "1" || step === undefined) && (
              <div className="space-y-6">
                {/* <WhiteWrapper title='H2HCode'>
								<div className='flex justify-between'>
								<div>
								<div className='text-sm text-dark-100 mb-3'>
								Ensectetur adipiscing elit. Odio ullamcorper sed urna
								</div>
								<Button>Generate H2HCode</Button>
								</div>
								<div>
								<Input placeholder='23455' />
								</div>
								</div>
							</WhiteWrapper> */}
                <WhiteWrapper title="Upload Image">
                  <Input name="images" showFilePreview type="file" multiple />

                  <p className="text-[#3772FF] text-sm pt-3">
                    NOTE : minimum upload is 2 image
                  </p>
                </WhiteWrapper>
                <WhiteWrapper title="Product Details">
                  <div className="space-y-6">
                    <Input
                      name="name"
                      label="Product Name"
                      placeholder="Product Name"
                    />
                    <Input
                      name="category"
                      label="Categories"
                      placeholder="Categories"
                    />
                    <Input
                      name="description"
                      label="Product Description"
                      placeholder="Product Description"
                    />
                    <Input
                      name="quantity"
                      label="Quantity"
                      type="number"
                      placeholder="quantity"
                    />
                  </div>
                </WhiteWrapper>
                <WhiteWrapper title="Item Details">
                  <div className="space-y-6">
                    <Input
                      name="modelOrType"
                      label="Model or Type"
                      placeholder="Model or Type"
                    />
                    <Input
                      name="itemDescription"
                      label="Item Description"
                      placeholder="Item Description"
                    />
                  </div>
                </WhiteWrapper>
                <WhiteWrapper title="Technical Details">
                  <div className="space-y-6">
                    <Input
                      name="dimensions"
                      label="Product Dimensions"
                      placeholder="Product Dimensions"
                    />
                    <Input
                      name="weight"
                      label="Product Weight"
                      placeholder="Product Weight"
                    />
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button theme="outline" onClick={() => router.back()}>
                    Discard
                  </Button>
                  <Button
                    onClick={() => {
                      router.push({
                        pathname: "/collaboration/sedher-h2h-commerce/create",
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
                <WhiteWrapper title="Pick up Location">
                  <div className="space-y-6 pt-5">
                    <Input
                      name="country"
                      label="Country"
                      placeholder="Country"
                    />
                    <Input name="state" label="State" placeholder="State" />
                    <Input name="lga" label="LGA" placeholder="LGA" />
                    <Input
                      name="address"
                      label="Address"
                      placeholder="Address"
                    />
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button
                    theme="outline"
                    onClick={() => {
                      router.push({
                        pathname: "/collaboration/sedher-h2h-commerce",
                      });
                    }}
                  >
                    Discard
                  </Button>
                  <div className="flex items-center justify-between">
                    <Button
                      theme="plain"
                      className="text-primary w-[200px]"
                      onClick={() => {
                        router.push({
                          pathname: "/collaboration/sedher-h2h-commerce/create",
                          query: {
                            step: "3",
                          },
                        });
                      }}
                    >
                      Skip Step
                    </Button>
                    <Button
                      onClick={() => {
                        router.push({
                          pathname: "/collaboration/sedher-h2h-commerce/create",
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
                <WhiteWrapper title="Shippment Detail">
                  <div className="p-5 mt-5 rounded-xl bg-accents-light-blue">
                    <Input
                      name="shipmentDetails"
                      label="Shipment Details"
                      placeholder="Shipment Details"
                    />
                  </div>
                </WhiteWrapper>
                <div className="flex items-center justify-between">
                  <Button
                    theme="outline"
                    onClick={() => {
                      router.push({
                        pathname: "/collaboration/sedher-h2h-commerce",
                      });
                    }}
                  >
                    Discard
                  </Button>
                  <div className="flex items-center justify-between">
                    <Button
                      theme="plain"
                      className="text-primary w-[200px]"
                      onClick={() => {
                        router.push({
                          pathname: "/collaboration/sedher-h2h-commerce/create",
                          query: {
                            step: "4",
                          },
                        });
                      }}
                    >
                      Skip Step
                    </Button>
                    <Button
                      onClick={() => {
                        router.push({
                          pathname: "/collaboration/sedher-h2h-commerce/create",
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
                <WhiteWrapper title="Payment Detail">
                  <div className="text-sm text-dark-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque.
                  </div>
                </WhiteWrapper>

                <div className="flex items-center justify-between">
                  <Button
                    theme="outline"
                    onClick={() => {
                      router.push({
                        pathname: "/collaboration/sedher-h2h-commerce",
                      });
                    }}
                  >
                    Discard
                  </Button>
                  <div className="flex items-center justify-between">
                    <Button loading={isLoading} type="submit">
                      Create H2H
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CreateH2HWrapper>
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
