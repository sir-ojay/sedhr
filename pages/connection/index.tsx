import DefaultLayout from "@/layouts/DefaultLayout";
import Router from "next/router";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    Router.push("/connection/all?t=all");
  }, []);
  return <DefaultLayout title="Sedher | Connection"></DefaultLayout>;
};

export default index;
