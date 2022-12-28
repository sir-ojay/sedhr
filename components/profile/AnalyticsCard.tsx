import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

type AnalyticsCardProps = {
	totalViews: number;
	totalImpressions: number;
	totalAppearances: number;
	title: string;
};

const AnalyticsCard = ({
	totalViews,
	totalImpressions,
	totalAppearances,
	title,
}: AnalyticsCardProps) => {
	return (
		<WhiteWrapper title={title}>
			<div className='flex justify-between  gap-3'>
				<div>
					<h4 className='font-archivo font-semibold text-[#25324B] text-base '>
						{totalViews} profile Views
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
						Discover Who’s Viewed Your Profile
					</p>
				</div>
				<div>
					<h4 className='font-archivo font-semibold text-[#25324B] text-base '>
						{totalImpressions} Post impression
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
						Start a Post to Increase engagement
					</p>
				</div>
				<div>
					<h4 className='font-archivo font-semibold text-[#25324B] text-base '>
						{totalAppearances} Search appearance
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
						See How often you appear in Search results
					</p>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default AnalyticsCard;
