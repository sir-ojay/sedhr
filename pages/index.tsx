import { useEffect } from "react";
import type { NextPage } from "next";
import Router from "next/router";

const Home: NextPage = () => {
	useEffect(() => {
		Router.push("/auth/signin");
	}, []);
	return <div className=''></div>;
};

export default Home;
