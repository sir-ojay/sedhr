import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ListNav from "@/components/global/ListNav";
import H2HCard from "@/components/collaboration/sedher-h2h-commerce/H2HCard";
import GoBackButton from "@/components/global/GoBackButton";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";
import { profile } from "console";

type CompleteH2hProps = {
  navigations: {
    name: string;
    href: string;
    query: string;
    count: number;
  }[];
};
const CompleteH2h = ({ navigations }: CompleteH2hProps) => {
  return (
    <DefaultLayout>
      <div className="space-y-8">
        <GoBackButton label="My request for proposal" />

        <ListNav type="slug" navs={navigations} />
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
            <H2HCard
              key={card}
              type="complete"
              productDetails={{
                name: "",
                category: "",
                description: "",
                quantity: 0,
              }}
              owner={{ name: "", accountType: "", profilePicture: "" }}
              itemDetails={{
                modelOrType: "",
                description: "",
              }}
              technicalDetails={{
                dimensions: "",
                weight: "",
              }}
              pickupLocation={{
                address: "",
                lga: "",
                state: "",
                country: "",
              }}
              paymentDetails={{
                paymentType: "FIXED",
                prices: [
                  {
                    value: 4000,
                  },
                ],
              }}
              _id={""}
              userId={""}
              code={""}
              images={[]}
              shipmentDetails={""}
              createdAt={""}
              updatedAt={""}
            />
          ))}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default CompleteH2h;
CompleteH2h.defaultProps = {
  navigations: [
    {
      name: "Active H2H",
      href: "/collaboration/sedher-h2h-commerce/active-h2h",
    },
    {
      name: "Saved H2H",
      href: "/collaboration/sedher-h2h-commerce/saved-h2h",
    },
    {
      name: "Cancel H2H",
      href: "/collaboration/sedher-h2h-commerce/cancel-h2h",
    },
    {
      name: "Complete H2H",
      href: "/collaboration/sedher-h2h-commerce/complete-h2h",
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
