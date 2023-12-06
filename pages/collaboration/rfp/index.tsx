import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Button from "@/components/global/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetRFPsQuery } from "@/services/collaborations";
import { RFP } from "@/types/collaboration";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type RFPProps = {
  navigations: {
    name: string;
    href: string;
    query: string;
    count: number;
  }[];
  grid: number;
  RFPs: RFP[];
};

type proposalOptions = {
  id: number;
  proposalName: string;
  proposalDesc: string;
  proposalLink: string;
  proposalTitle: string;
};

const proposalOptions: proposalOptions[] = [
  {
    id: 1,
    proposalName: "Create an RFP",
    proposalDesc:
      "You need to send an RFI or RFP to potential vendors and evaluate their proposals",
    proposalLink: "/collaboration/rfp/create?step=1",
    proposalTitle: "Create",
  },
  {
    id: 2,
    proposalName: "Respond to an RFP",
    proposalDesc:
      "A client sent you an RFP and you need to respond with a proposal.",
    proposalLink: "/collaboration/rfp/respond",
    proposalTitle: "Respond",
  },
  {
    id: 3,
    proposalName: "Apply for RFP",
    proposalDesc:
      "See list of all RFPs on the Network. Claim the opportunities today",
    proposalLink: "/collaboration/rfp/apply",
    proposalTitle: "See List",
  },
];

const RFPPage = ({ navigations }: RFPProps) => {
  const [grid, setGrid] = useState(1);
  const [rfpData, setRFPData] = useState<RFP[]>([]);

  const getGrid = (grid: number) => {
    setGrid(grid);
  };

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      term: "",
    },
    mode: "onChange",
  });

  const token: any = Cookies.get("sedherToken");

  const { data, error, isLoading, isSuccess, isFetching } = useGetRFPsQuery({
    token,
  });

  useEffect(() => {
    console.log(data);
    data && setRFPData(data.data as RFP[]);
  }, [isSuccess, data]);

  return (
    <DefaultLayout title="Sedher | Collaboration | RFP">
      <CollaborationWrapper getGrid={getGrid}>
        <div className="grid grid-cols-6 gap-2">
          <section className="col-span-6  grid grid-cols-2 gap-1 max-[650px]:grid-cols-1">
            {proposalOptions.map((proposalOption) => (
              <div key={proposalOption.id}>
                <div className="bg-white w-4/5 h-[90%] max-[650px]:w-[100%] ">
                  <div className="bg-[#2A2069]">
                    <h3 className="text-white p-3 font-semibold">
                      {proposalOption.proposalName}
                    </h3>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-center pt-[23px] w-[90%] ">
                      {proposalOption.proposalDesc}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => router.push(proposalOption.proposalLink)}
                      size="sm"
                      className="w-[175px]  mt-[5%] mb-[10%]"
                    >
                      {proposalOption.proposalTitle}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </CollaborationWrapper>x
    </DefaultLayout>
  );
};

export default RFPPage;

// RFPPage.defaultProps = {
//   navigations: [
//     {
//       name: "Active RFP",
//       href: "/collaboration/rfp/active-rfp",
//       count: "",
//     },
//     {
//       name: "Complete RFP",
//       href: "/collaboration/rfp/complete-rfp",
//       count: "",
//     },
//     {
//       name: "Saved RFP",
//       href: "/collaboration/rfp/saved-rfp",
//       count: "",
//     },
//   ],
// };

// export const getServerSideProps: GetServerSideProps = requireAuthentication(
//   async (context) => {
//     return {
//       props: {
//         customers: [],
//       },
//     };
//   }
// );
