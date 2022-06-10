import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";
import Router from "next/router";
import React, { useEffect } from "react";

const index: NextPage = () => {
	useEffect(() => {
		Router.push("/onboarding/account");
	}, []);
	return <DefaultLayout></DefaultLayout>;
};

export default index;
