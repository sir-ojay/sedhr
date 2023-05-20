import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import GridContainer from "@/components/global/GridContainer";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
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

const RFPapply = ({ navigations }: RFPProps) => {
  const [grid, setGrid] = useState(2);
  const [rfpData, setRFPData] = useState<RFP[]>([]);

  const getGrid = (grid: number) => {
    setGrid(grid);
  };

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      searchTerm: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
    getValues,
    setValue,
  }: any = methods;

  const searchValue = watch();
  console.log(searchValue);

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
      <>
        <div className="grid grid-cols-3">
          <section className="col-span-4 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center mb-8">
                <GoBackButton />
                <div>
                  <div className="font-epilogue capitalize font-semibold text-[20px] text-dark-900">
                    Apply for RFP
                  </div>
                  <div className="text-dark-900">
                    List of RFPS. Apply for a RFP
                  </div>
                </div>
              </div>
              <Button
                icon="plus"
                onClick={() => router.push("/collaboration/rfp/create?step=1")}
                size="sm"
                className="w-[234px]"
              >
                Create RFP
              </Button>
            </div>
            <WhiteWrapper>
              <FormProvider {...methods}>
                <form action="">
                  <div
                    title="Search for RFPs"
                    className="font-semibold text-lg text-dark-900"
                  >
                    Search for RFPs
                  </div>
                  <Input
                    type="text"
                    name="searchTerm"
                    placeholder="Search for RFPs"
                  />
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
              {rfpData
                .filter((obj) => {
                  if (searchValue.searchTerm) {
                    return obj?.productName
                      ?.toLowerCase()
                      .includes(searchValue.searchTerm?.toLowerCase());
                  }
                  return true;
                })
                ?.map((card) => (
                  <RFPCard key={card._id} {...card} />
                ))}
            </GridContainer>
          </section>
        </div>
      </>
    </DefaultLayout>
  );
};

export default RFPapply;
