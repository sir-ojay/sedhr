import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { useEffect } from "react";

const Collaboration = () => {
	useEffect(() => {
		Router.push("/collaboration/rfp");
	}, []);
	return <DefaultLayout title='Sedher | Collaboration'></DefaultLayout>;
};

export default Collaboration;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
