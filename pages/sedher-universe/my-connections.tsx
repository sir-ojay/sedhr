import AdjustableProfileCard from "@/components/global/AdjustableProfileCard";
import Button from "@/components/global/Button";
import GridContainer from "@/components/global/GridContainer";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SedherUniverseWrapper from "@/components/sedher-universe/SedherUniverseWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useGetFriendRequestsQuery } from "@/services/connections";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type MyConnectionsProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};

type Friends = {
	data: {
		accountType: string;
		name: string;
		profilePicture: string;
		username: string;
		description: string;
		_id: string;
	}[];
};

const MyConnections = ({ navs, defaultGrid }: MyConnectionsProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	const [friendsRequests, setFriendsRequests] = useState<Friends>();

	const token: any = Cookies.get("sedherToken");

	const { data, error, isLoading, isSuccess, isFetching } =
		useGetFriendRequestsQuery({ token });

	useEffect(() => {
		console.log(data);
		data && setFriendsRequests(data);
	}, [isSuccess, data]);
	return (
		<DefaultLayout title='Sedher | Sedher universe | My Connections'>
			<SedherUniverseWrapper>
				<ListSortHeader
					title='My Connections'
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
					{/* <Button
						theme='plain'
						className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
						Sent(12)
					</Button> */}
				</div>

				{t === "patientcarecenters" || t === undefined ? (
					<>
						<GridContainer grid={grid}>
							{friendsRequests?.data.map((account) => (
								<AdjustableProfileCard
									key={account._id}
									name={account.name}
									description={account.description || "No description"}
									accountType={account.accountType}
									username={account.username}
									// image={account.image}
									cardType='connectAccept'
									grid={grid}
								/>
							))}
							{isLoading &&
								[1, 2, 3, 4, 5, 6].map((i) => (
									<WhiteWrapper className='h-[200px]'></WhiteWrapper>
								))}
						</GridContainer>
						{friendsRequests?.data.length === 0 && (
							<div>You currently do not have any pending friend request</div>
						)}
					</>
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
									cardType='connect'
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
									cardType='connect'
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

export default MyConnections;

MyConnections.defaultProps = {
	defaultGrid: 2,
	navs: [
		{
			name: "Patient care centres",
			href: "/sedher-universe/my-connections?t=patientcarecenters",
		},
		{
			name: "Business",
			href: "/sedher-universe/my-connections?t=business",
		},
		{
			name: "HCP’s",
			href: "/sedher-universe/my-connections?t=hcps",
		},
		{
			name: "Sedher Luminaries",
			href: "/sedher-universe/my-connections?t=sedherluminaries",
		},
		{
			name: "Not for profit",
			href: "/sedher-universe/my-connections?t=notforprofit",
		},
	],
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
