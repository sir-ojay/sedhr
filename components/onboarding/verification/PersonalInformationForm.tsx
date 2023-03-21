import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import {
  useGetCountriesMutation,
  useGetStatesMutation,
} from "@/services/onboarding";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateEffect } from "react-use";

export type PersonalInformationDetails = {
  country: string;
  criminalHistory: string;
  phoneNumber: string;
  physicalAddress: string;
  professionalRegistrationNumber?: string;
  state: string;
  dateOfBirth: string;
  lga: string;
  stateOfOrigin: string;
};

type PersonalInformationFormProps = {
  category: string;
  personalInformationForm: (details: PersonalInformationDetails) => void;
};

const PersonalInformationForm = ({
  category,
  personalInformationForm,
}: PersonalInformationFormProps) => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const { type } = router.query;

  const methods = useForm({
    defaultValues: {
      phoneNumber: "",
      physicalAddress: "",
      country: "",
      state: "",
      stateOfOrigin: "",
      lga: "",
      criminalHistory: "None",
      idType: "",
      dateOfBirth: "",
      idName: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    getValues,
  } = methods;

  const country = watch("country");

  const idType = watch("idType");

  const token = Cookies.get("sedherToken");

  const details = watch();

  const handleStep = (step: number) => {
    const body = {
      ...details,
      idType: undefined,
      idName: undefined,
    };
    personalInformationForm(body);
    router.push({
      pathname: "/onboarding/verification",
      query: {
        ...router.query,
        step,
        idType: getValues("idName") || getValues("idType"),
      },
    });
  };

  const [getCountries, { isLoading }] = useGetCountriesMutation();

  const [getStates, { isLoading: isLoadingState }] = useGetStatesMutation();

  useUpdateEffect(() => {
    const handleGetStates = async () => {
      try {
        const body = {
          token,
          country,
        };
        const data = (await getStates(body as any).unwrap()) as any;
        setStates(data.data as any);
      } catch (err: any) {
        toast.error(err?.data?.message);
      }
    };
    handleGetStates();
  }, [country]);

  useEffect(() => {
    const handleGetCountries = async () => {
      try {
        const body = {
          token,
        };
        const data = (await getCountries(body as any).unwrap()) as any;
        setCountries(data.data as any);
      } catch (err: any) {
        toast.error(err?.data?.message);
      }
    };
    handleGetCountries();
  }, []);

  useEffect(() => {
    if (idType !== "Others (please specify)") {
      router.replace({
        pathname: "/onboarding/verification",
        query: {
          ...router.query,
          idType,
        },
      });
    } else {
      router.replace({
        pathname: "/onboarding/verification",
        query: {
          ...router.query,
          idType: undefined,
        },
      });
    }
  }, [idType]);

  useEffect(() => {}, [errors]);
  return (
    <>
      <section className="w-full bg-white p-5 md:p-8">
        <FormProvider {...methods}>
          <form>
            <h4 className="font-semibold text-dark-900 font-epilogue font-[20px] mb-10">
              Personal Information
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Input
                name="phoneNumber"
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                rules={["required"]}
              />
              <Input
                name="physicalAddress"
                label="Physical Address"
                placeholder="Physical Address"
                rules={["required"]}
              />
              <SelectInput
                options={countries}
                option="Select Country"
                name="country"
                label="Country"
                id="country"
                loading={isLoading}
                required
              />
              <SelectInput
                name="state"
                label="State/Region"
                id="state"
                option="Select State/Region"
                loading={isLoadingState}
                required
                options={states}
              />
              <Input
                name="stateOfOrigin"
                label="State of origin"
                placeholder="State of origin"
                rules={["required"]}
              />
              <Input
                name="lga"
                label="LGA"
                placeholder="LGA"
                rules={["required"]}
              />
              {/* <Input
								name='criminalHistory'
								label='Criminal History'
								placeholder='Criminal History'
								rules={["required"]}
							/> */}

              {router.query.type === "hcp's" && (
                <Input
                  name="professionalRegistrationNumber"
                  label="Professional Registration Number"
                  placeholder="Professional Registration Num.."
                  rules={["required"]}
                />
              )}
              <SelectInput
                name="idType"
                label="Select ID"
                id="idType"
                option="Select ID Type"
                required
                options={[
                  "National ID",
                  "International Passport",
                  "Driver's License",
                  "Others (please specify)",
                ]}
              />
              <Input
                name="dateOfBirth"
                type="date"
                id="dateOfBirth"
                label="Date of birth"
                placeholder="Date of birth"
                rules={["required"]}
              />
              {idType === "Others (please specify)" && (
                <Input
                  name="idName"
                  label="Others (please specify)"
                  placeholder="Others (please specify)"
                  rules={["required"]}
                />
              )}
            </div>
          </form>
        </FormProvider>
      </section>
      <div className="flex justify-end my-10">
        <Button
          disabled={category === "" || !isValid}
          onClick={async () => {
            handleStep(type?.toString() === "hcp's" ? 4 : 2);
          }}
          size="sm"
          className="w-full md:w-[311px]"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default PersonalInformationForm;
