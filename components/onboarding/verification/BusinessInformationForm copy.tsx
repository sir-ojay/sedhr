import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export type BusinessInformationDetails = {
  lga?: string;
  category: string;
  phoneNumber: string;
  physicalAddress: string;
  state?: string;
  stateOfOrigin: string;
  country: string;
  businessName?: string;
  businessEmail: string;
  businessPhone: string;
  businessWebsite: string;
  businessAddress: string;
  businessLga: string;
  businessState: string;
  annualRevenue: string;
  businessCountry: string;
};

type BusinessInformationFormProps = {
  // category: string;
  businessInformationForm: (details: BusinessInformationDetails) => void;
};

const BusinessInformationForm = ({

  businessInformationForm,
}: BusinessInformationFormProps) => {
  const router = useRouter();
  const { type } = router.query;

  const methods = useForm({
    defaultValues: {
      category: "",
      phoneNumber: "",
      physicalAddress: "",
      lga: "",
      state: "",
      stateOfOrigin: "",
      country: "",
      businessName: "",
      businessEmail: "",
      businessPhone: "",
      businessWebsite: "",
      businessAddress: "",
      businessLga: "",
      businessState: "",
      annualRevenue: "",
      businessCountry: "",
      idName: "",
      idType: "",
      platformManager: [
        {
          name: "",
          email: "",
        },
      ],
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    getValues,
  } = methods;

  const details = watch();
  const idType = watch("idType");

  const handleStep = (step: number) => {
    const body = {
      ...details,
      idType: undefined,
      idName: undefined,
    };
    businessInformationForm(body);
    router.push({
      pathname: "/onboarding/verification",
      query: {
        ...router.query,
        step,
        idType: getValues("idName") || getValues("idType"),
      },
    });
  };
  
  useEffect(() => {}, [errors]);
  return (
    <>
      <section className="w-full bg-white p-5 md:p-8">
        <FormProvider {...methods}>
          <form>
            <h4 className="font-semibold text-dark-900 font-epilogue font-[20px] mb-10">
              Business Information
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Input
                name="businessName"
                label="Business name"
                placeholder="Business name"
                rules={["required"]}
              />

              <Input
                name="businessEmail"
                type="email"
                label="Business Email"
                placeholder="Business Email"
                rules={["required"]}
              />
              <Input
                name="businessPhone"
                type="tel"
                label="Business Number"
                placeholder="Business Number"
                rules={["required"]}
              />
              <Input
                name="businessWebsite"
                label="Business Website"
                type="url"
                placeholder="Business Website"
                rules={["required"]}
              />
              <Input name="physicalAddress" label="Physical Address" placeholder="Physical Address" />
              <Input
                name="businessAddress"
                label="Registered Business Address"
                placeholder="Registered Business Address"
                rules={["required"]}
              />
              <Input name="state" label="State" placeholder="State"   rules={["required"]}/>
              <Input name="lga" label="LGA" placeholder="LGA"   rules={["required"]}/>
              <Input name='annualRevenue' label="Annual Revenue" placeholder="Annual Revenue"   rules={["required"]}/>
             
             
            </div>

            <h4 className="font-semibold text-dark-900 font-epilogue font-[20px] my-10">
              Plaform manager
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Input name='platformManager[0].name' label="Full Name" placeholder="Full Name" />
              <Input name="platformManager[0].email" type="email" label="Email" placeholder="Email" />
              <Input
			  name="phoneNumber"
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
              />
            </div>
          </form>
        </FormProvider>
      </section>
      <div className="flex flex-col-reverse md:flex-row gap-3 justify-between my-10">
        <Button
          onClick={() => handleStep(1)}
          size="sm"
          theme="outline"
          className="w-full md:w-[311px]"
        >
          Previous Step
        </Button>
        <Button
          onClick={() =>
            handleStep(type?.toString() === "patient care centres" ? 3 : 4)
          }
          size="sm"
          className="w-full md:w-[311px]"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default BusinessInformationForm;
