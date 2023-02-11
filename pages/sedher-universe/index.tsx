import EventsForYou from "@/components/sedher-universe/EventsForYou";
import GroupsForYou from "@/components/sedher-universe/GroupsForYou";
import PeopleYouMayKnow from "@/components/sedher-universe/PeopleYouMayKnow";
import RecommendedPagesForYou from "@/components/sedher-universe/RecommendedPagesForYou";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";

const index = () => {
	return (
		<DefaultLayout title='Sedher | Sedher Universe'>
			<SedherUniverseWrapper>
				<section className='space-y-6'>
					<PeopleYouMayKnow />
					<RecommendedPagesForYou />
					{/* <EventsForYou /> */}
					{/* <GroupsForYou /> */}
				</section>
			</SedherUniverseWrapper>
		</DefaultLayout>
	);
};

export default index;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
