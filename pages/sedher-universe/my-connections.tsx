import PeopleYouMayKnow from "@/components/sedher-universe/PeopleYouMayKnow";
import RecommendedPagesForYou from "@/components/sedher-universe/RecommendedPagesForYou";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";

const MyConnections = () => {
	return (
		<DefaultLayout title='Sedher | Sedher universe | My connections'>
			<SedherUniverseWrapper>
				<section className='space-y-6'>
					<PeopleYouMayKnow />
					<RecommendedPagesForYou />
				</section>
			</SedherUniverseWrapper>
		</DefaultLayout>
	);
};

export default MyConnections;
