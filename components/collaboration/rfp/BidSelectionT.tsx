import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


 export type Bids = {
  deadline:string;
  selectionDate: string;
  note : string;
}

type BidSelectionTFormProps = {
  bidSelectionTForm: (details: Bids) => void;
};

const BidSelectionT = ({bidSelectionTForm}: BidSelectionTFormProps) => {


   const handleScopeOfWorkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const maxLength = 2000;
    if (inputText.length > maxLength) {
      e.target.value = inputText.substring(0, maxLength);
    }
    setValue("note", e.target.value);
  };

  // const [value, setValue] = useState("");
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      deadline:"",
      selectionDate: "",
      note : ""
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
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
    bidSelectionTForm(body);
    router.push({
      pathname: "/collaboration/rfp/create",
      query: {
        step: "3",
      },
    });
    console.log(body);
  };
  return (
    <>
      <div className="space-y-8">
        <FormProvider {...methods}>
          <form className="space-y-6">

            <WhiteWrapper title="Bid Selection Timeline ">
              <p>
                If you have a strict deadline, make sure to highlight that in
                your request for proposal. If you have any additional submission
                dates that bidding contractors should be aware of, this is the
                place to mention that.
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-dark-100">Deadline for Bids</div>
                <div>
                  <Input
                    name="deadline"
                    type="date"
                    id="deadline"
                    placeholder="deadline"
                    rules={["required"]}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-dark-100">
                  Selection of Bidder & Contract Award
                </div>
                <div>
                  <Input
                    name="selectionDate"
                    type="date"
                    id="selectionDate"
                    placeholder="selectionDate"
                    rules={["required"]}
                  />
                </div>
              </div>

              <label htmlFor="Any SideNote?" className="flex flex-col relative">
                <span className="w-full font-bold text-left text-title mb-1">
                  Any SideNote?
                </span>
                <textarea
                  className="w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none"
                  id="note"
                  cols={30}
                  placeholder="Any SideNote?"
                  rows={1}
                  {...register("note", { maxLength: 2000 })}
                  onChange={(e) => {
                    handleScopeOfWorkChange(e);
                  }}
          
                  // {...register("post", { required: true })}
                />
              </label>
              <div className="flex justify-between text-dark-100">
                <span>Maximum 2000 characters</span>
                <span>{details.note.length} / 2000</span>
              </div>
            </WhiteWrapper>
          </form>
        </FormProvider>
        <div className="flex items-center justify-between">
          <Button theme="outline" onClick={() => router.back()}>
            Back
          </Button>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              disabled={!isValid}
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

export default BidSelectionT;
