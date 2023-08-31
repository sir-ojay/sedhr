import DefaultLayout from "@/layouts/DefaultLayout";
import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProfilePage = () => {
	const router = useRouter();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			router.replace(`/profile/${user?.username}`);
		} catch (error) {
			// console.log(error);
		}
	}, []);

	return <DefaultLayout title='Sedher | Profile'></DefaultLayout>;
};

export default ProfilePage;
