import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import RadioInputGroup from "@/components/global/RadioInputGroup";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export type CompanyInformationDetails = {
  numberOfBeds: string;
  averagePatientTurnover: string;
  numberOfTheaters: string;
  numberOfXrayMachines: string;
  numberOfUltrasoundMachines: string;
  numberOfIcu: string;
  numberOfMriMachines: string;
  numberOfAnaestheticMachines: string;
  numberOfEmergencyRooms: string;
  numberOfEcgMachines: string;
  numberOfLaboratories: string;
  numberOfPharmacies: string;
  numberOfMonitors: string;
  numberOfCTScanners: string;
};

type CompanyInformationFormProps = {
  companyInformationForm: (details: CompanyInformationDetails) => void;
};

const CompanyDetailsForm = ({
  companyInformationForm,
}: CompanyInformationFormProps) => {
  const router = useRouter();
  const { type } = router.query;

  //   conditional functions
  const [theater, setTheater] = useState("");
  const [xrays, setXrays] = useState("");
  const [icu, setIcu] = useState("");
  const [ultrasound, setUltrasound] = useState("");
  const [emergency, setEmergency] = useState("");
  const [ctscan, setCtScan] = useState("");
  const [anethesiaSystems, setAnethesiaSystems] = useState("");
  const [monitors, setMonitors] = useState("");
  const [mri, setMri] = useState("");
  const [ecg, setEcg] = useState("");
  const [lab, setLab] = useState("");
  const [pharmacy, setPharmacy] = useState("");

  const methods = useForm({
    defaultValues: {
      numberOfBeds: "",
      averagePatientTurnover: "",
      numberOfTheaters: "",
      numberOfXrayMachines: "",
      numberOfUltrasoundMachines: "",
      numberOfIcu: "",
      numberOfMriMachines: "",
      numberOfAnaestheticMachines: "",
      numberOfEmergencyRooms: "",
      numberOfEcgMachines: "",
      numberOfLaboratories: "",
      numberOfPharmacies: "",
      numberOfMonitors: "",
      numberOfCTScanners: "",
    },
    mode: "onChange",
  });
  const {
    formState: { errors, isValid },
    watch,
    register,
    getValues,
  } = methods;

  const details = watch();
  const options = ["1-10", "11-20", "21-30", "31-40"];

  const handleStep = (step: number) => {
    const body = {
      ...details,
    };
    companyInformationForm(body);
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
        <h4 className="font-semibold text-dark-900 font-epilogue font-[20px] mb-10">
          Company Detail
        </h4>
        <FormProvider {...methods}>
          <form className="space-y-10">
            <div className="flex flex-col md:flex-row gap-8">
              <fieldset className={`font-epilogue space-y-1`}>
                <legend className="font-semibold text-title">
                  Number of beds
                </legend>
                <div className="flex items-center flex-wrap gap-2 px-2 py-[6px] border-2 border-[#B8C9C9] w-fit rounded-[5px]">
                  {options?.map((option) => {
                    const id = uuidv4();
                    return (
                      <label className="form-check flex items-center gap-2 bg-[#F8F8FD] py-[4px] px-3">
                        <input
                          className="form-check-input appearance-none rounded-full h-5 w-5 border-gray-300 bg-transaparent border-2 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
                          {...register("numberOfBeds", { required: true })}
                          type="radio"
                          value={option}
                        />
                        <span className="mt-1 text-primary">{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="w-full md:w-[400px]">
                <Input
                  label="Average patient turnover per year"
                  placeholder="Average patient turnover per year"
                  name="averagePatientTurnover"
                  rules={["required"]}
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-col w-full md:flex-row justify-between flex-wrap gap-10">
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Theater"
                  options={["Yes", "No"]}
                  onChange={(e) => setTheater(e.target.value)}
                  className="w-full md:w-auto"
                  name="Theater"
                  value={theater}
                />

                {theater === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfTheaters" />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="X-rays"
                  options={["Yes", "No"]}
                  onChange={(e) => setXrays(e.target.value)}
                  className="w-full md:w-auto"
                  name="xrays"
                  value={xrays}
                />
                {xrays === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfXrayMachines"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="ICU"
                  options={["Yes", "No"]}
                  onChange={(e) => setIcu(e.target.value)}
                  className="w-full md:w-auto"
                  name="icu"
                  value={icu}
                />
                {icu === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfIcu" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row justify-between flex-wrap gap-10">
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Ultrasound"
                  options={["Yes", "No"]}
                  onChange={(e) => setUltrasound(e.target.value)}
                  name="ultrasound"
                  value={ultrasound}
                  className="w-full md:w-auto"
                />
                {ultrasound === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfUltrasoundMachines"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Emergency"
                  options={["Yes", "No"]}
                  onChange={(e) => setEmergency(e.target.value)}
                  name="emergency"
                  className="w-full md:w-auto"
                  value={emergency}
                />
                {emergency === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfEmergencyRooms"
                      rules={["required"]}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="CT Scan"
                  options={["Yes", "No"]}
                  onChange={(e) => setCtScan(e.target.value)}
                  name="ctScan"
                  value={ctscan}
                  className="w-full md:w-auto"
                />
                {ctscan === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfCTScanners" />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row justify-between flex-wrap gap-10">
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Monitors"
                  options={["Yes", "No"]}
                  onChange={(e) => setMonitors(e.target.value)}
                  name="monitors"
                  className="w-full md:w-auto"
                  value={monitors}
                />
                {monitors === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfMonitors" />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="MRI"
                  options={["Yes", "No"]}
                  onChange={(e) => setMri(e.target.value)}
                  name="mri"
                  value={mri}
                  className="w-full md:w-auto"
                />
                {mri === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfMriMachines" />{" "}
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Anethesia Systems"
                  options={["Yes", "No"]}
                  onChange={(e) => setAnethesiaSystems(e.target.value)}
                  name="anethesiaSystems"
                  className="w-full md:w-auto"
                  value={anethesiaSystems}
                />
                {anethesiaSystems === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfAnaestheticMachines"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row justify-between flex-wrap gap-10">
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="ECG"
                  options={["Yes", "No"]}
                  onChange={(e) => setEcg(e.target.value)}
                  name="ecg"
                  value={ecg}
                  className="w-full md:w-auto"
                />
                {ecg === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfEcgMachines"
                      rules={["required"]}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Lab"
                  options={["Yes", "No"]}
                  onChange={(e) => setLab(e.target.value)}
                  name="lab"
                  value={lab}
                  className="w-full md:w-auto"
                />
                {lab === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input
                      placeholder="how many?"
                      name="numberOfLaboratories"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-[1px] items-end">
                <RadioInputGroup
                  label="Pharmacy"
                  options={["Yes", "No"]}
                  onChange={(e) => setPharmacy(e.target.value)}
                  name="pharmacy"
                  value={pharmacy}
                  className="w-full md:w-auto"
                />
                {pharmacy === "Yes" && (
                  <div className="w-full md:w-[125px]">
                    <Input placeholder="how many?" name="numberOfPharmacies" />
                  </div>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </section>
      <div className="flex flex-col-reverse md:flex-row gap-3 justify-between my-10">
        <Button
          onClick={() => handleStep(2)}
          size="sm"
          theme="outline"
          className="w-full md:w-[311px]"
        >
          Previous Step
        </Button>
        <Button
          onClick={() => handleStep(4)}
          size="sm"
          className="w-full md:w-[311px]"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default CompanyDetailsForm;
