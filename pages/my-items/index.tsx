import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push("/my-items/my-products?t=products");
	}, []);
	return <DefaultLayout title='Sedher | My item'></DefaultLayout>;
};

export default index;
