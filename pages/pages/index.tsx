import DefaultLayout from "@/layouts/DefaultLayout";
import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BusinessPage = () => {
	const router = useRouter();
	const user = JSON.parse(Cookies.get("sedherUser") || "{}");
	console.log(user)

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			router.replace(`/pages/${user?.accountType}/${user?.name}`);
		} catch (error) {
			// console.log(error);
		}
	}, []);

	return <DefaultLayout title='Sedher | Pages'></DefaultLayout>;
};

export default BusinessPage;
