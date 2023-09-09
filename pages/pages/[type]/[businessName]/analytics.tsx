import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import ListNav from "@/components/global/ListNav";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/auth/auth";
import { useBusinessNameDetailsQuery } from "@/services/pages";
import LargeDetailsBusinessCard from "@/components/global/LargeDetailsBusinessCard";
import { useUploadDocumentMutation } from "@/services/upload";
import { useUpdateCoverPhotoMutation } from "@/services/pages";
import { toast } from "react-toastify";
import AnalyticsBusinessCard from "@/components/pages/AnalyticsBusinessCard";

const BusinessAnalytics = () => {
    const router = useRouter();
	
	const [user, setUser] = useState<LoginResponse>();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

    const [showEditCoverPicture, setShowEditCoverPicture] = useState(false);
    const editCoverPicture = () => {
      setShowEditCoverPicture(!showEditCoverPicture);
    };

	
	const navs = [
		{
			name: "Home",
			href: `/pages/${user?.accountType}/${user?.name}`,
		},
		{
			name: "Activity",
			href: `/pages/${user?.accountType}/${user?.name}/activity`,
		},
		{
			name: "Events",
			href: `/pages/${user?.accountType}/${user?.name}/event`,
		},
		{
			name: "Group",
			href: `/pages/${user?.accountType}/${user?.name}/group`,
		},
		{
			name: "Marketplace",
			href: `/pages/${user?.accountType}/${user?.name}/Marketplace`,
		},
		{
			name: "Analytics",
			href: `/pages/${user?.accountType}/${user?.name}/Analytics`,
		},
		{
			name: "Edit Page",
			href: `/pages/${user?.accountType}/${user?.name}/Edit Page`,
		},
	];

	const token: any = Cookies.get("sedherToken");
	
	const username = router.query.businessName?.toString() as string;
	const businessType = router.query.type?.toString() as string;
    const { data, isLoading, isSuccess } = useBusinessNameDetailsQuery({
        token,
        id: businessType || "",
        businessName: username,
      });

      const editable = user?.username === username;
  const [updateCoverPhoto, { isLoading: isLoadingUpload }] =
    useUpdateCoverPhotoMutation();

  const [upload, { isLoading: isLoadingUploadDocument }] =
    useUploadDocumentMutation();

  const editCoverPhoto = async (data: any) => {
    let details = {};
    try {
      if (data.media) {
        const url = (await upload({
          file: data.media as any,
          token: token as string,
        }).unwrap()) as any;

        details = {
          token: token as string,
          body: {
            body: {
              pictureLink: url.data[0],
              pageId: data._id,
              type: "business",
            },
          },
        };
      }
      const response = await updateCoverPhoto(details).unwrap();
      // console.log(response);
      toast.success(response.message);
      setShowEditCoverPicture(false);
    } catch (err: any) {
      toast.error(err?.data?.error);
    }
  };


	return (
		<DefaultLayout title='Sedher | Pages | Analytics'>
		   {!isLoading && (
        <div className="flex flex-col lg:grid lg:grid-cols-9 gap-8">
          <div className="col-span-6 space-y-5">
            <LargeDetailsBusinessCard
              type="profile"
              editCoverPicture={editCoverPicture}
              editable={editable}
              dataForBusiness={data && data.data}
              loading={isLoadingUpload || isLoadingUploadDocument}
            />
            <ListNav navs={navs} type="slug" />

          
            <AnalyticsBusinessCard
							title='Visitor Highlights'
							totalViews={6}
							totalImpressions={1}
							totalAppearances={0}
						/>

          </div>
          <AdditionalDetailsCard
            email={data && data.data.businessEmail}
            username={data && data.data.businessName}
            type="profile"
            business="business"
            createdAt={data && data.data.createdAt}
          />
        </div>
      )}
           
		</DefaultLayout>
	);
};

export default BusinessAnalytics;
