import FeedPost from "@/components/feed/FeedPost";
import PostStatus from "@/components/feed/PostStatus";
import RecentEvents from "@/components/feed/RecentEvent";
import RecentGroups from "@/components/feed/RecentGroups";
import YouMightKnow from "@/components/feed/YouMightKnow";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";

const feed = () => {
	return (
		<DefaultLayout title='Sedher | Feed'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4 space-y-6'>
					<PostStatus />

					<section className='space-y-6'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
							<FeedPost key={post} />
						))}
					</section>
				</section>
				<aside className='col-span-2'>
					<div className='sticky top-[164px] overflow-auto h-[calc(100vh-160.76px)] space-y-6 pb-8 transition-all ease-in scrollbar-thin hover:scrollbar-thumb-transparent hover:scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
						<YouMightKnow />
						<RecentEvents />
						<RecentGroups />
					</div>
				</aside>
			</div>
		</DefaultLayout>
	);
};

export default feed;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
