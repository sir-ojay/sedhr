import FeedPost from "@/components/feed/FeedPost";
import PostStatus from "@/components/feed/PostStatus";
import RecentEvents from "@/components/feed/RecentEvent";
import RecentGroups from "@/components/feed/RecentGroups";
import YouMightKnow from "@/components/feed/YouMightKnow";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetTimelineQuery } from "@/services/feed";
import { Post } from "@/types/feed";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

type Posts = {
	previous: string;
	hasPrevious: boolean;
	next: string;
	hasNext: boolean;
	posts: Post[];
};

const feed = () => {
	const [posts, setPosts] = useState<Posts>();

	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } = useGetTimelineQuery(
		{ token }
	);

	useEffect(() => {
		data && setPosts(data?.data);
	}, [isSuccess, data]);

	return (
		<DefaultLayout title='Sedher | Feed'>
			<div className='grid grid-cols-1 xl:grid-cols-6 gap-8'>
				<section className='xl:col-span-4 space-y-6'>
					<PostStatus />

					{isLoading && (
						<div className='flex justify-center items-center pt-10'>
							<ClipLoader color='#3b82f6' loading={isLoading} size={120} />
						</div>
					)}

					{posts && posts?.posts?.length > 0 && (
						<section className='space-y-6'>
							{posts?.posts?.map((post) => (
								<FeedPost key={post.id} {...post} />
							))}
						</section>
					)}

					{!isLoading && posts?.posts?.length === 0 && (
						<div>
							You have no post yet, please post something or connect with people
							or groups so you can see their posts
						</div>
					)}
				</section>
				<aside className='xl:col-span-2 hidden xl:block'>
					<div className='sticky top-[164px] overflow-auto xl:h-[calc(100vh-160.76px)] space-y-6 pb-8 transition-all ease-in scrollbar-thin hover:scrollbar-thumb-transparent hover:scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
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
