import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";


export type BudgetValues = {
  budgets: 
        {
            fieldName: string,
            value: number | any,
        },
}

type BudgetDetailsFormProps = {
  budgetDetailsForm: (details: BudgetValues) => void;
};

const Budget = ({budgetDetailsForm}:BudgetDetailsFormProps) => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      budgets: 
        {
            fieldName: "",
            value:""
        }
    },
    mode: "onChange",
  });

  
  const {
    formState: { errors },
    watch,
    getValues,
  
  } = methods;

  const details = watch();
  console.log(details);

  const handleStep = () => {
    const body = {
      ...details,
    };
    budgetDetailsForm(body);
    router.push({
      pathname: "/collaboration/rfp/create",
      query: {
        step: "5",
      },
    });
    console.log(body);
  };
  return (
    <>
      <div className="space-y-6">
        <FormProvider {...methods}>
          <form className="space-y-6">
      
            <WhiteWrapper title="Budget">
              <div className="text-sm text-dark-100">
                Contractors need to know what budget you’re working with in
                order to determine if they are wasting their time by submitting
                a proposal for a contract that doesn’t have the financial
                backing they require.
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm text-dark-100">
                <Input
                    name="budgets.fieldName"
                    placeholder="Desricption"
                    rules={["required"]}
                  />
                </div>
                <div className="text-sm text-dark-100">
                  <Input
                    name="budgets.value"
                    placeholder="$ 5000" 
                    rules={["required"]}
                  />
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
              //       step: "5",
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

export default Budget;
