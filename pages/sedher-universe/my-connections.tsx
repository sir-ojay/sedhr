import EventsForYou from "@/components/sedher-universe/EventsForYou";
import GroupsForYou from "@/components/sedher-universe/GroupsForYou";
import PeopleYouMayKnow from "@/components/sedher-universe/PeopleYouMayKnow";
import RecommendedPagesForYou from "@/components/sedher-universe/RecommendedPagesForYou";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";

const MyConnections = () => {
	return (
		<DefaultLayout title='Sedher | Sedher universe | My Connections'>
			<SedherUniverseWrapper>
				<section className='space-y-6'>
					<PeopleYouMayKnow />
					<RecommendedPagesForYou />
					<EventsForYou />
					<GroupsForYou />
				</section>
			</SedherUniverseWrapper>
		</DefaultLayout>
	);
};

export default MyConnections;
