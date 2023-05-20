import CreateRFPWrapper from "@/components/collaboration/rfp/CreateRFPWrapper";
import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import RfpDeatails, {
  RfpDetails,
} from "@/components/collaboration/rfp/RfpDeatails";
import BidSelectionT, {
  Bids,
} from "@/components/collaboration/rfp/BidSelectionT";
import SelectionCriteria, {
  CriteriaPath,
} from "@/components/collaboration/rfp/SelectionCriteria";
import Budget, { BudgetValues } from "@/components/collaboration/rfp/Budget";
import MakePayment from "@/components/collaboration/rfp/MakePayment";
import GetReview, {
  CodeValues,
} from "@/components/collaboration/rfp/GetReview";
import { useCreateRFPMutation } from "@/services/collaborations";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const create = () => {
  const [rfpDetails, setRfpDetails] = useState<RfpDetails>();
  const [bidSelectionT, setBidSelectionT] = useState<Bids>();
  const [selectionCritria, setSelectionCriteria] = useState<CriteriaPath>();
  const [budgetDetails, setBudgetDetails] = useState<BudgetValues>();
  const [reviewDetails, setReviewDetails] = useState<CodeValues>();

  const rfpDetailsForm = (details: RfpDetails) => {
    console.log("details", details);
    setRfpDetails(details);
  };
  const bidSelectionTForm = (details: Bids) => {
    console.log("details", details);
    setBidSelectionT(details);
  };
  const selectionCriteriaForm = (details: CriteriaPath) => {
    console.log("details", details);
    setSelectionCriteria(details);
  };
  const budgetDetailsForm = (details: BudgetValues) => {
    console.log("details", details);
    setBudgetDetails(details);
  };
  const preDetailForm = (details: CodeValues) => {
    console.log("details", details);
    setReviewDetails(details);
  };

  const handleRFPSubmit = () => {
    handleCompleteRFP();
  };

  const router = useRouter();

  const { step } = router.query;

  const token: any = Cookies.get("sedherToken");

  const [completeRFP, { isLoading }] = useCreateRFPMutation();

  const handleCompleteRFP = async () => {
    try {
      const data = {
        token: token as string,
        body: {
          ...rfpDetails,
          ...bidSelectionT,
          ...selectionCritria,
          ...budgetDetails,
          ...reviewDetails,
        } as any,
      };
      console.log("rfp data", data);
      const result = await completeRFP(data).unwrap();
      toast.success("RFP completed successfully");
      console.log("result", result);
      //   To route to start
      router.push("/collaboration/rfp");
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.data?.message || err.data.error);
    }
  };

  return (
    <DefaultLayout>
      <>
        <CreateRFPWrapper step={step}>
          {(step === "1" || step === undefined) && (
            <RfpDeatails rfpDetailsForm={rfpDetailsForm} />
          )}
          {step === "2" && (
            <BidSelectionT bidSelectionTForm={bidSelectionTForm} />
          )}
          {step === "3" && (
            <SelectionCriteria selectionCriteriaForm={selectionCriteriaForm} />
          )}
          {step === "4" && <Budget budgetDetailsForm={budgetDetailsForm} />}
          {/* {step === "5" && <MakePayment />} */}
          {step === "5" && (
            <GetReview
              preDetailForm={preDetailForm}
              rfpDetails={rfpDetails}
              bidSelectionT={bidSelectionT}
              selectionCritria={selectionCritria}
              budgetDetails={budgetDetails}
              handleRFPSubmit={handleRFPSubmit}
            />
          )}
        </CreateRFPWrapper>
      </>
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
