import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";

type MyFollowsProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};

const MyFollows = ({ navs, defaultGrid }: MyFollowsProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	return (
		<DefaultLayout title='Sedher | Sedher universe | My Follows'>
			<SedherUniverseWrapper>
				<ListSortHeader
					title='My Follows'
					results={73000}
					setGrid={setGrid}
					defaultGrid={defaultGrid}
				/>
				<ListNav navs={navs} />

				<div className='flex items-center gap-3'>
					<Button
						theme='plain'
						className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
						Received(2)
					</Button>
					<Button
						theme='plain'
						className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
						Sent(12)
					</Button>
				</div>

				{t === "product" ? (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<AdjustableProfileCard
									key={card}
									name='Ajayi Damilola'
									description='Doctor'
									accountType='HCP'
									// image={account.image}
									cardType='page'
									grid={grid}
								/>
							)
						)}
					</GridContainer>
				) : t === "pending" ? (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<AdjustableProfileCard
									key={card}
									name='Ajayi Damilola'
									description='Doctor'
									accountType='HCP'
									// image={account.image}
									cardType='page'
									grid={grid}
								/>
							)
						)}
					</GridContainer>
				) : (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
							(card) => (
								<AdjustableProfileCard
									connected={true}
									key={card}
									name='Ajayi Damilola'
									description='Doctor'
									accountType='HCP'
									// image={account.image}
									cardType='page'
									grid={grid}
								/>
							)
						)}
					</GridContainer>
				)}
			</SedherUniverseWrapper>
		</DefaultLayout>
	);
};

export default MyFollows;

MyFollows.defaultProps = {
	defaultGrid: 2,
	navs: [
		{
			name: "Patient care centres",
			href: "/sedher-universe/my-follows?t=patientcarecenters",
		},
		{
			name: "Business",
			href: "/sedher-universe/my-follows?t=business",
		},
		{
			name: "HCP’s",
			href: "/sedher-universe/my-follows?t=hcps",
		},
		{
			name: "Sedher Luminaries",
			href: "/sedher-universe/my-follows?t=sedherluminaries",
		},
		{
			name: "Not for profit",
			href: "/sedher-universe/my-follows?t=notforprofit",
		},
	],
};
