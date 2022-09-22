import { useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import Head from "next/head";
import { requireAuthentication } from "hoc/requireAuthentication";

const Home: NextPage = () => {
	useEffect(() => {
		Router.push("/feed");
	}, []);
	return (
		<div className=''>
			<Head>
				<title>Sedher</title>
			</Head>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
