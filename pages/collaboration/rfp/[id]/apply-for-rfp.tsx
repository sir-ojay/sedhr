import ApplyPayment from "@/components/collaboration/rfp/ApplyPayment";
import ApplyRfpDetails from "@/components/collaboration/rfp/ApplyRfpDetails";
import ApplyRFPView from "@/components/collaboration/rfp/ApplyRFPView";
import ApplyRFPWrapper from "@/components/collaboration/rfp/ApplyRFPWrapper ";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetRFPsQuery } from "@/services/collaborations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RFP } from "@/types/collaboration";
import Cookies from "js-cookie";

const ApplyForRFP = () => {
  const [rfpData, setRFPData] = useState<RFP[]>([]);
  const [rfpFilter, setRfpFilter] = useState<any>();
  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetRFPsQuery({
    token,
  });

  useEffect(() => {
    // console.log(data);
    data && setRFPData(data.data as RFP[]);
  }, [isSuccess, data]);

  useEffect(() => {
    if (rfpData) {
      const userSynergi = [...(rfpData as unknown as Array<any>)].pop();
      setRfpFilter(userSynergi);
      // console.log(userSynergi);
    }
  }, [rfpData]);
  const router = useRouter();

  const { step } = router.query;
  return (
    <DefaultLayout>
      <>
        <ApplyRFPWrapper step={step}>
          {(step === "1" || step === undefined) && <ApplyRFPView />}
          {/* {step === "2" && <ApplyPayment rfpFilter={rfpFilter} />} */}
          {step === "2" && <ApplyRfpDetails />}
        </ApplyRFPWrapper>
      </>
    </DefaultLayout>
  );
};

export default ApplyForRFP;
