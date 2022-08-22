import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push(
			"/collaboration/sedher-h2h-commerce/thomas-clinics/checkout/payment/card"
		);
	}, []);
	return <DefaultLayout title='Sedher | Sedher-h2h-commerce'></DefaultLayout>;
};

export default index;
