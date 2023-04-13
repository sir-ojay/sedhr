import ApplyRfpDetails from "@/components/collaboration/rfp/ApplyRfpDetails";
import ApplyRFPView from "@/components/collaboration/rfp/ApplyRFPView";
import ApplyRFPWrapper from "@/components/collaboration/rfp/ApplyRFPWrapper ";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React from "react";

const ApplyForRFP = () => {
  const router = useRouter();

  const { step } = router.query;
  return (
    <DefaultLayout>
      <>
        <ApplyRFPWrapper step={step}>
          {(step === "1" || step === undefined) && <ApplyRFPView />}
          {step === "2" && <ApplyRfpDetails />}
        </ApplyRFPWrapper>
      </>
    </DefaultLayout>
  );
};

export default ApplyForRFP;
