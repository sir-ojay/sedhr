
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Button from "@/components/global/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetRFPsQuery } from "@/services/collaborations";
import { RFP } from "@/types/collaboration";
// import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
// import { GetServerSideProps } from "next";
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
          {/* <section className='col-span-2 space-y-6'>
						<CollaborationNav
							title='My request for proposal'
							navigations={navigations}
						/>
					</section> */}
          <section className="col-span-6  grid grid-cols-2 gap-1 max-[650px]:grid-cols-1">
            {/* <WhiteWrapper className=" items-center ">
              <div
                title="Request for Proposal"
                className="font-semibold text-lg text-dark-900 bg-red h-4"
              >
                Create an RFP
              </div>
              <p>
                You need to send an RFI or RFP to potential vendors and evaluate
                their proposals.
              </p>
              <Button
                icon="plus"
                onClick={() => router.push("/collaboration/rfp/create?step=1")}
                size="sm"
                className="w-[234px]"
              >
                Create RFP
              </Button>
            </WhiteWrapper> */}
            {proposalOptions.map((proposalOption) => (
              <div key={proposalOption.id}>
                <div className="bg-white w-4/5 h-[90%] ">
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
            {/* <div className='flex items-center gap-3'>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
								All
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Product RFP
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Service RFP
							</Button>
						</div> */}
            {/* 
						<WhiteWrapper>
							<FormProvider {...methods}>
								<form action=''>
									<div
										title='Request for Proposal'
										className='font-semibold text-lg text-dark-900'>
										Request for Proposal
									</div>
									<Input type='search' placeholder='This is placeholder' />
									<p className='text-sm text-dark-100 mt-2'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
									</p>
								</form>
							</FormProvider>
						</WhiteWrapper> */}

            {/* {isLoading && (
							<GridContainer grid={grid}>
								{[1, 2, 3, 4, 5, 6].map((card) => (
									<WhiteWrapper key={card} className='h-[400px] w-full' />
								))}
							</GridContainer>
						)} */}

            {/* <GridContainer grid={grid}>
							{rfpData?.map((card) => (
								<RFPCard key={card._id} {...card} />
							))}
						</GridContainer> */}
          </section>
        </div>
      </CollaborationWrapper>
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
