import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push("/sedher-universe/my-connections");
	}, []);
	return <DefaultLayout title='Sedher | Sedher Universe'></DefaultLayout>;
};

export default index;
