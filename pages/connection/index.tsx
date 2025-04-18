import ConnectionCard from "@/components/connection/ConnectionCard";
import GridContainer from "@/components/global/GridContainer";
import ListNav from "@/components/global/ListNav";
import ListSortHeader from "@/components/global/ListSortHeader";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

type ConnectionProps = {
	defaultGrid: number;
	navs: {
		name: string;
		href: string;
	}[];
};
const Connection = ({ navs, defaultGrid }: ConnectionProps) => {
	const [grid, setGrid] = useState(defaultGrid);
	const {
		query: { t },
	} = useRouter();

	return (
		<DefaultLayout title='Sedher | Connection'>
			<section className='space-y-6'>
				<ListSortHeader
					title='Connection'
					setGrid={setGrid}
					defaultGrid={defaultGrid}
					description='Connect with people you know'
				/>
				<ListNav navs={navs} />
				<WhiteWrapper>
					<h1 className='text-dark-600 font-semibold text-base'>
						People you may know{" "}
					</h1>
				</WhiteWrapper>
				{(t === "all" || t === undefined) && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='all' />
						))}
					</GridContainer>
				)}
				{t === "patient" && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='patient' />
						))}
					</GridContainer>
				)}
				{t === "business" && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='business' star />
						))}
					</GridContainer>
				)}
				{t === "hcp" && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='hcp' />
						))}
					</GridContainer>
				)}
				{t === "sedher" && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='sedher' />
						))}
					</GridContainer>
				)}
				{t === "not-for-profits" && (
					<GridContainer grid={grid}>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((card) => (
							<ConnectionCard key={card} type='not-for-profits' />
						))}
					</GridContainer>
				)}
			</section>
		</DefaultLayout>
	);
};

export default Connection;

Connection.defaultProps = {
	defaultGrid: 4,
	navs: [
		{
			name: "All",
			href: "/connection?t=all",
		},
		{
			name: "Patient care centres",
			href: "/connection?t=patient",
		},
		{
			name: "Business",
			href: "/connection?t=business",
		},
		{
			name: "HCP’s",
			href: "/connection?t=hcp",
		},
		{
			name: "Sedher Luminaries ",
			href: "/connection?t=sedher",
		},
		{
			name: "Not for profits ",
			href: "/connection?t=not-for-profits",
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
