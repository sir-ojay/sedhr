import FeedPost from "@/components/feed/FeedPost";
import AboutCard from "@/components/global/AboutCard";
import Button from "@/components/global/Button";
import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import ListNav from "@/components/global/ListNav";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetTimelineQuery } from "@/services/feed";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Post } from "@/types/feed";

type Posts = {
	previous: string;
	hasPrevious: boolean;
	next: string;
	hasNext: boolean;
	posts: Post[];
};

const Activity = () => {
	const router = useRouter();
	const userId = router?.query.username?.toString() as string;
	const navs = [
		{
			name: "Home",
			href: `/profile/${userId}`,
		},
		{
			name: "Activity",
			href: `/profile/${userId}/activity`,
		},
		{
			name: "Events",
			href: `/profile/${userId}/event`,
		},
		{
			name: "Group",
			href: `/profile/${userId}/group`,
		},
	];
	const [posts, setPosts] = useState<Posts>();
	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } = useGetTimelineQuery(
		{ token }
	);

	useEffect(() => {
		data && setPosts(data?.data);
	}, [isSuccess, data]);

	return (
		<DefaultLayout>
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
				<div className='col-span-6 space-y-5'>
					<LargeDetailsCard type='profile' />
					<ListNav navs={navs} type='slug' />
					<div>
						<div className='flex items-center gap-3'>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								All Activity
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
								Post
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Document
							</Button>
						</div>
					</div>
					<div>
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
								You have no post yet, please post something or connect with
								people or groups so you can see their posts
							</div>
						)}
					</div>
				</div>

				<AdditionalDetailsCard type='profile' />
			</div>
		</DefaultLayout>
	);
};

export default Activity;
