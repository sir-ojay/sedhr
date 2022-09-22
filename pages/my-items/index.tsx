import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push("/my-items/my-products?t=products");
	}, []);
	return <DefaultLayout title='Sedher | My items'></DefaultLayout>;
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
