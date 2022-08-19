import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push("/collaboration/communication/my-groups");
	}, []);
	return (
		<DefaultLayout title='Sedher | Collaboration | Communication'></DefaultLayout>
	);
};

export default index;
