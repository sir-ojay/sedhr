import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


export type CriteriaPath = {
  selectionCriteria: string,
}

type SelectionCriteriaFormProps = {
  selectionCriteriaForm:(details: CriteriaPath) => void;
};

const SelectionCriteria = ({selectionCriteriaForm}:SelectionCriteriaFormProps) => {
  const handleScopeOfWorkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const maxLength = 2000;
    if (inputText.length > maxLength) {
      e.target.value = inputText.substring(0, maxLength);
    }
    setValue("selectionCriteria", e.target.value);
  };



  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      selectionCriteria: " "
    },
    mode: "onChange",
  });

  const {
    formState: { errors },
    watch,
    getValues,
    register,
    setValue,
  } = methods;

  const details = watch();
  console.log(details);

  const handleStep = () => {
    const body = {
      ...details,
    };
    selectionCriteriaForm(body);
    router.push({
      pathname: "/collaboration/rfp/create",
      query: {
        step: "4",
      },
    });
    console.log(body);
  };
  return (
    <>
      <div className="space-y-6">
        <FormProvider {...methods}>
          <form className="space-y-6">
        
            <WhiteWrapper title="Selection Criteria">
              <div className="text-sm text-dark-100">
                This part of the request for proposal can help accomplish two
                things:
                <ul>
                  <li>
                    Make bidders aware of all your written bid requirements—that
                    is the elements they must include in their written proposal
                    in order to be seriously considered.
                  </li>
                  <li>
                    {" "}
                    Make contractors aware of all the business-related criteria
                    you are examining in your selection process.
                  </li>
                </ul>
                If you are planning to combine these two types of criteria, be
                sure to clearly define that in your RFP. Let the bidders know by
                creating subsections devoted to each: proposal criteria and
                business selection criteria.
              </div>

              <div className="p-5 mt-5 rounded-xl bg-accents-light-blue">

                <label
                  htmlFor="Write out your Selection Criteria below"
                  className="flex flex-col relative"
                >
                  <span className="w-full font-bold text-left text-title mb-1">
                    Write out your Selection Criteria below
                  </span>
                  <textarea
                    className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                    id="selectionCriteria"
                    cols={30}
                    placeholder="Write out your Selection Criteria below"
                    rows={1}
                    {...register("selectionCriteria", { maxLength: 2000 })}
                    onChange={(e) => {
                      handleScopeOfWorkChange(e);
                    }}
                    // {...register("post", { required: true })}
                  />
                </label>
                <div className="flex justify-between text-dark-100">
                  <span>Maximum 2000 characters</span>
                  <span>{details.selectionCriteria.length}  / 2000</span>
                </div>
              </div>
            </WhiteWrapper>
          </form>
        </FormProvider>

        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>

          <div className="flex items-center justify-between">
            {/* <Button theme="plain" className="text-primary w-[200px]">
              Skip Step
            </Button> */}
            <Button
              // onClick={() => {
              //   router.push({
              //     pathname: "/collaboration/rfp/create",
              //     query: {
              //       step: "4",
              //     },
              //   });
              // }}

              onClick={() => handleStep()}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionCriteria;
