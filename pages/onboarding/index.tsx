import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import React, { useEffect } from "react";

const index: NextPage = () => {
	useEffect(() => {
		Router.push("/onboarding/account");
	}, []);
	return <DefaultLayout></DefaultLayout>;
};

export default index;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
