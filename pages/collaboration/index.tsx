import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const Collaboration = () => {
	useEffect(() => {
		Router.push("/collaboration/rfp");
	}, []);
	return <DefaultLayout title='Sedher | Collaboration'></DefaultLayout>;
};

export default Collaboration;
