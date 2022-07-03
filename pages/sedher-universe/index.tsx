import Router from "next/router";
import { useEffect } from "react";

const index = () => {
	useEffect(() => {
		Router.push("/sedher-universe/my-connections");
	}, []);
	return <div>index</div>;
};

export default index;
