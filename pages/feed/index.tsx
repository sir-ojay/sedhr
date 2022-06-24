import PostStatus from "@/components/feed/PostStatus";
import RecentEvents from "@/components/feed/RecentEvent";
import RecentGroups from "@/components/feed/RecentGroups";
import YouMightKnow from "@/components/feed/YouMightKnow";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";

const feed = () => {
	return (
		<DefaultLayout title='Feed'>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4'>
					<PostStatus />
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
