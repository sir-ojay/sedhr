import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import PostStatus from "@/components/feed/PostStatus";
import FeedPost from "@/components/feed/FeedPost";
import YouMightKnow from "@/components/feed/YouMightKnow";
import RecentEvents from "@/components/feed/RecentEvent";
import RecentGroups from "@/components/feed/RecentGroups";

const Marketplace = ({ Options }: any) => {
	return (
		<DefaultLayout title='Sedher | Marketplace'>
			<div>
				<div>
					{Options.map((option: string) => (
						<select
							className='border-[1px] rounded py-3 px-4 font-archivo font-normal mr-3  text-[#898E9A] bg-white outline-none'
							name=''
							id=''>
							<option>{option}</option>
						</select>
					))}
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Marketplace;
Marketplace.defaultProps = {
	Options: ["Date Posted", "Company", "Location"],
};
