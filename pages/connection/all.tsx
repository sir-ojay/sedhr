import ConnectionCard from "@/components/connection/ConnectionCard";
import GridContainer from "@/components/global/GridContainer";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import ProductCard from "@/components/global/ProductCard";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

type AllProps = {
  defaultGrid: number;
  navs: {
    name: string;
    href: string;
  }[];
};
const All = ({ navs, defaultGrid }: AllProps) => {
  const [grid, setGrid] = useState(defaultGrid);
  const {
    query: { t },
  } = useRouter();

  return (
    <DefaultLayout title="Sedher | All Connection">
      <section className="space-y-6">
        <ListSortHeader
          title="Connection"
          results={73}
          setGrid={setGrid}
          defaultGrid={defaultGrid}
          connect
        />
        <ListNav navs={navs} />
        <WhiteWrapper>
          <h1 className="text-dark-600 font-semibold text-base">
            People you may know{" "}
          </h1>
        </WhiteWrapper>
        {t === "all" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="all" />
            ))}
          </GridContainer>
        )}
        {t === "patient" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="patient" />
            ))}
          </GridContainer>
        )}
        {t === "business" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="business" star />
            ))}
          </GridContainer>
        )}
        {t === "hcp" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="hcp" />
            ))}
          </GridContainer>
        )}
        {t === "sedher" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="sedher" />
            ))}
          </GridContainer>
        )}
        {t === "not-for-profits" && (
          <GridContainer grid={grid}>
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <ConnectionCard key={card} type="not-for-profits" />
            ))}
          </GridContainer>
        )}
      </section>
    </DefaultLayout>
  );
};

export default All;

All.defaultProps = {
  defaultGrid: 3,
  navs: [
    {
      name: "All",
      href: "/connection/all?t=all",
    },
    {
      name: "Patient care centres",
      href: "/connection/all?t=patient",
    },
    {
      name: "Business",
      href: "/connection/all?t=business",
    },
    {
      name: "HCP’s",
      href: "/connection/all?t=hcp",
    },
    {
      name: "Sedher Luminaries ",
      href: "/connection/all?t=sedher",
    },
    {
      name: "Not for profits ",
      href: "/connection/all?t=not-for-profits",
    },
  ],
};
