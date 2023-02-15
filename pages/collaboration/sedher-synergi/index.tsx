import CollaborationNav from "@/components/collaboration/CollaborationNav";
import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import SynergiCard from "@/components/collaboration/sedher-synergi/SynergiCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetSnergisQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type SedherSynergiProps = {
  navigations: {
    name: string;
    href: string;
    query: string;
    count: number;
  }[];
  grid: number;
};

const SedherSynergi = ({ navigations }: SedherSynergiProps) => {
  const [grid, setGrid] = useState(2);
  const [snergiData, setSnergiData] = useState<Snergi[]>([]);
  console.log(snergiData);

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

  const { data, error, isLoading, isSuccess, isFetching } = useGetSnergisQuery({
    token,
  });

  useEffect(() => {
    console.log(data);
    data && setSnergiData(data.data as Snergi[]);
  }, [isSuccess, data]);

  return (
    <DefaultLayout title="Sedher | Collaboration | Sedher Synergi">
      <CollaborationWrapper getGrid={getGrid}>
        <div className="grid grid-cols-6 gap-8">
          <section className="col-span-2 space-y-6">
            <CollaborationNav
              title="My Sedher Synergi"
              navigations={navigations}
            />
          </section>
          <section className="col-span-4 space-y-6">
            <WhiteWrapper className="flex items-center justify-between">
              <div
                title="Request for Proposal"
                className="font-semibold text-lg text-dark-900"
              >
                Sedher Synergi
              </div>
              <Button
                icon="plus"
                size="sm"
                className="w-[234px]"
                onClick={() =>
                  router.push("/collaboration/sedher-synergi/create?step=1")
                }
              >
                Create
              </Button>
            </WhiteWrapper>

            <WhiteWrapper>
              <FormProvider {...methods}>
                <form action="">
                  <div
                    title="Request for Proposal"
                    className="font-semibold text-lg text-dark-900"
                  >
                    Search for Sedher Synergi
                  </div>
                  <Input type="search" placeholder="This is placeholder" />
                  <p className="text-sm text-dark-100 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </form>
              </FormProvider>
            </WhiteWrapper>
            {isLoading && (
              <GridContainer grid={grid}>
                {[1, 2, 3, 4, 5, 6].map((card) => (
                  <WhiteWrapper key={card} className="h-[400px] w-full" />
                ))}
              </GridContainer>
            )}

            <GridContainer grid={grid}>
              {snergiData.map((card) => (
                <SynergiCard key={card.id} type="all" {...card} />
              ))}
            </GridContainer>
          </section>
        </div>
      </CollaborationWrapper>
    </DefaultLayout>
  );
};

export default SedherSynergi;

SedherSynergi.defaultProps = {
  navigations: [
    {
      name: "Active Sedher Synergi",
      href: "/collaboration/sedher-synergi/active-sedher-synergi",
      count: "",
      // query: "?t=product",
    },
    {
      name: "Previous Sedher Synergi",
      href: "/collaboration/sedher-synergi/previous-sedher-synergi",
      count: "",
    },
    {
      name: "Cancel Sedher Synergi",
      href: "/collaboration/sedher-synergi/cancel-sedher-synergi",
      count: "",
    },
    {
      name: "Created Sedher Synergi",
      href: "/collaboration/sedher-synergi/create-sedher-synergi",
      count: "",
    },
  ],
};
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {
        customers: [],
      },
    };
  }
);
