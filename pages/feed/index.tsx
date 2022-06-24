import FeedPost from "@/components/feed/FeedPost";
import PostStatus from "@/components/feed/PostStatus";
import RecentEvents from "@/components/feed/RecentEvent";
import RecentGroups from "@/components/feed/RecentGroups";
import YouMightKnow from "@/components/feed/YouMightKnow";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";

const feed = () => {
	return (
		<DefaultLayout title='Sedher | Feed'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4 space-y-6'>
					<PostStatus />

					<section className='space-y-6'>
						{[1, 2, 3, 4, 5, 6].map((post) => (
							<FeedPost key={post} />
						))}
					</section>
				</section>
				<aside className='col-span-2 space-y-6'>
					<YouMightKnow />
					<RecentEvents />
					<RecentGroups />
				</aside>
			</div>
		</DefaultLayout>
	);
};

export default feed;
