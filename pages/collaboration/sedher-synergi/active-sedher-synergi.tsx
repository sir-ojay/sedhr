import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ListNav from "@/components/global/ListNav";
import GoBackButton from "@/components/global/GoBackButton";
import SynergiCard from "@/components/collaboration/sedher-synergi/SynergiCard";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";
import { useGetSnergisQuery } from "@/services/collaborations";


type ActiveH2hProps = {
	navigations: {
		name: string;
		href: string;
		query: string;
		count: number;
	}[];
};
const ActiveSedherSynergi = ({ navigations }: ActiveH2hProps) => {
  const { data, error, isLoading, isSuccess, isFetching } = useGetSnergisQuery({
    token: "token",
  });
//   console.log(data)
	return (
    <DefaultLayout>
      <div className="space-y-8">
        <GoBackButton label="My Sedher Synergi" />

        <ListNav type="slug" navs={navigations} />
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {data?.data?.map((card) => (
            <SynergiCard
				  type="active"
				  owner={card.owner}
				  key={card.id}
				  bookings={card.bookings}
				  equipments={card.equipments}
				  event={card.event}
				  locationDetails={card.locationDetails}
				  code={""}
				  createdAt={""}
				  updatedAt={card.updatedAt}
				  id={card.id} connectedCalendars={[]} enableReminders={false} communicationChannels={[]}            />
          ))}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ActiveSedherSynergi;
ActiveSedherSynergi.defaultProps = {
	navigations: [
		{
			name: "Active Sedher Synergi",
			href: "/collaboration/sedher-synergi/active-sedher-synergi",
		},
		{
			name: "Previous Sedher Synergi",
			href: "/collaboration/sedher-synergi/previous-sedher-synergi",
		},
		{
			name: "Cancel Sedher Synergi",
			href: "/collaboration/sedher-synergi/cancel-sedher-synergi",
		},
		{
			name: "Create sedher synergi",
			href: "/collaboration/sedher-synergi/create-sedher-synergi",
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
