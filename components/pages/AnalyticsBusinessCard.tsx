import React from "react";
import WhiteWrapper from "../global/WhiteWrapper";

type AnalyticsCardProps = {
	totalViews: number;
	totalImpressions: number;
	totalAppearances: number;
	title: string;
};

const AnalyticsBusinessCard = ({
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
						{totalViews} 
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
                    Pages Views
					</p>
				</div>
				<div>
					<h4 className='font-archivo font-semibold text-[#25324B] text-base '>
						{totalImpressions}
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
                   Unique visitors
					</p>
				</div>
				<div>
					<h4 className='font-archivo font-semibold text-[#25324B] text-base '>
						{totalAppearances} 
					</h4>
					<p className='text-[#515B6F] text-sm font-archivo font-normal '>
                   custom button clicks
					</p>
				</div>
			</div>
		</WhiteWrapper>
	);
};

export default AnalyticsBusinessCard;
