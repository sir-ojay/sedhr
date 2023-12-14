import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import SelectInput from "@/components/global/SelectInput";

export type BusinessInformationDetails = {
  phoneNumber: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessWebsite: string;
  businessAddress: string;
  businessLga: string;
  businessState: string;
  annualRevenue: string;
  businessCountry: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
};

type BusinessInformationFormProps = {
  businessInformationForm: (detailsValue: BusinessInformationDetails) => void;
};

const BusinessInformationForm = ({
  businessInformationForm,
}: BusinessInformationFormProps) => {
  const router = useRouter();
  const { type } = router.query;


    // Load data from sessionStorage on component mount
    useEffect(() => {
      const storedData = JSON.parse(sessionStorage.getItem('businessInformationData')) || {};
      methods.reset(storedData);
    }, []);

  const methods = useForm({
    defaultValues: {
      phoneNumber: "",
      businessName: "",
      businessEmail: "",
      businessPhone: "",
      businessWebsite: "",
      businessAddress: "",
      businessLga: "",
      businessState: "",
      currency: "",
      annualRevenue: "",
      businessCountry: "",
      accountName: "",
      accountNumber: "",
      bankName: " ",
      platformManagerName: "",
      platformManagerEmail: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    getValues,
  } = methods;

  const {
    phoneNumber,
    businessName,
    businessEmail,
    businessPhone,
    businessWebsite,
    businessAddress,
    businessLga,
    businessState,
    currency,
    annualRevenue,
    accountName,
    accountNumber,
    bankName,
    businessCountry,
    platformManagerName,
    platformManagerEmail,
  } = watch();

  const newCurrency = currency + annualRevenue;
  // console.log(newCurrency);

  const handleStep = (step: number) => {
    const body = {
      phoneNumber,
      businessName,
      businessEmail,
      businessPhone,
      businessWebsite,
      businessAddress,
      businessLga,
      businessState,
      annualRevenue: newCurrency,
      businessCountry,
      accountName,
      accountNumber,
      bankName,
      platformManager: [
        {
          name: platformManagerName,
          email: platformManagerEmail,
        },
      ],
    };
    businessInformationForm(body);
        // Save data to sessionStorage
        sessionStorage.setItem('businessInformationData', JSON.stringify(body));
    router.push({
      pathname: "/onboarding/verification",
      query: {
        ...router.query,
        step,
      },
    });
  };

  
  useEffect(() => {}, [errors]);
  return (
    <>
      <section className="w-full bg-white p-5 md:p-8">
        <FormProvider {...methods}>
          <form>
            <h4 className=" text-dark-900 font-epilogue font-[20px] mb-10">
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
              <Input
                name="businessCountry"
                label="Country"
                placeholder="Business Country"
              />
              <Input
                name="businessAddress"
                label="Registered Business Address"
                placeholder="Registered Business Address"
                rules={["required"]}
              />
              <Input
                name="businessState"
                label="State"
                placeholder="State"
                rules={["required"]}
              />
              <Input
                name="businessLga"
                label="LGA"
                placeholder="LGA"
                rules={["required"]}
              />
             
              <div className="flex">
                <SelectInput
                  name="currency"
                  label="Currency"
                  id="currency"
                  option=""
                  options={["NGN", "AED", "CAD", "GBP", "USD", "ZAR"]}
                />
                <Input
                  name="annualRevenue"
                  label="Annual Revenue"
                  placeholder="Annual Revenue"
                  rules={["required"]}
                />
              </div>

              <Input
                name="accountName"
                label="Account Name"
                placeholder="accountName"
                rules={["required"]}
              />
              <Input
                name="accountNumber"
                label="Account Number"
                placeholder="accountNumber"
                rules={["required"]}
              />
              <Input
                name="bankName"
                label="Bank Name"
                placeholder="bank Name"
                rules={["required"]}
              />
            </div>

            <h4 className=" text-dark-900 font-epilogue font-[20px] my-10">
              Plaform manager
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Input
                name="platformManagerName"
                label="Full Name"
                placeholder="Full Name"
                rules={["required"]}
              />
              <Input
                name="platformManagerEmail"
                type="email"
                label="Email"
                rules={["required"]}
                placeholder="Email"
              />
              <Input
                name="phoneNumber"
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                rules={["required"]}
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
