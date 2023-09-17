import LargeDetailsCard from "@/components/global/LargeDetailsCard";
import ListNav from "@/components/global/ListNav";
import AdditionalDetailsCard from "@/components/sedher-universe/AdditionalDetailsCard";
import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { LoginResponse } from "@/types/auth/auth";
import { useBusinessNameDetailsQuery, useUpdatePageMutation } from "@/services/pages";
import LargeDetailsBusinessCard from "@/components/global/LargeDetailsBusinessCard";
import { useUploadDocumentMutation } from "@/services/upload";
import { useUpdateCoverPhotoMutation } from "@/services/pages";
import { toast } from "react-toastify";
import AnalyticsBusinessCard from "@/components/pages/AnalyticsBusinessCard";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Modal from "@/components/global/Modal";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import WhiteWrapper from "@/components/global/WhiteWrapper";

const EditBusinessPage = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
		TagLine:"",
      businessName: "",
      link: "",
	  profilePicture:null
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const editDetails = watch();

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

	const EditBusinessPage = async (data: any) => {
		let details = {};
		try {
		  if (data.image) {
			const url = (await upload({
			  file: data.image as any,
			  token: token as string,
			}).unwrap()) as any;
	
			details = {
			  token: token as string,
			  body: {
				body: {
				  pageId: data._id,
				  type: "business",
				 ...editDetails,
				profilePicture:url.data[0]
				},
			  },
			};
		  }
		  // const response = await useUpdatePageMutation(details).unwrap();
		  // console.log(response);
		  // toast.success(response.message);
		  setShowEditCoverPicture(false);
		} catch (err: any) {
		  toast.error(err?.data?.error);
		}
	  };

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

  const [showEdit, setShowEdit] = useState(false);
  const editPage = () => {
    setShowEdit(!showEdit);
  };

  return (
    <DefaultLayout title="Sedher | Pages | Analytics">
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

            <WhiteWrapper>
              <ListNav navs={navs} type="slug" />
             
            </WhiteWrapper>

            <div>
              <Modal show={showEdit} onRequestClose={() => editPage()}>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(editPage)} className="space-y-5">
                    <div className="flex justify-between border-bottom">
                      <div className="text-base xl:text-lg font-semibold text-[#25324B]">
                        Edit
                      </div>
                      <button
                        onClick={() => setShowEdit(false)}
                        aria-label="close"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.15213 5.1515C5.37716 4.92654 5.68233 4.80016 6.00052 4.80016C6.31872 4.80016 6.62389 4.92654 6.84892 5.1515L12.0005 10.3031L17.1521 5.1515C17.2628 5.03689 17.3952 4.94547 17.5416 4.88258C17.688 4.81969 17.8455 4.78659 18.0048 4.7852C18.1642 4.78382 18.3222 4.81418 18.4697 4.87452C18.6171 4.93485 18.7511 5.02396 18.8638 5.13663C18.9765 5.2493 19.0656 5.38328 19.1259 5.53076C19.1862 5.67823 19.2166 5.83625 19.2152 5.99558C19.2138 6.15492 19.1807 6.31238 19.1178 6.45879C19.055 6.60519 18.9635 6.73761 18.8489 6.8483L13.6973 11.9999L18.8489 17.1515C19.0675 17.3778 19.1885 17.6809 19.1857 17.9956C19.183 18.3102 19.0568 18.6112 18.8343 18.8337C18.6118 19.0562 18.3108 19.1824 17.9962 19.1851C17.6816 19.1878 17.3784 19.0669 17.1521 18.8483L12.0005 13.6967L6.84892 18.8483C6.6226 19.0669 6.31948 19.1878 6.00484 19.1851C5.69021 19.1824 5.38923 19.0562 5.16674 18.8337C4.94425 18.6112 4.81805 18.3102 4.81532 17.9956C4.81258 17.6809 4.93354 17.3778 5.15213 17.1515L10.3037 11.9999L5.15213 6.8483C4.92716 6.62327 4.80078 6.3181 4.80078 5.9999C4.80078 5.68171 4.92716 5.37654 5.15213 5.1515Z"
                            fill="#515B6F"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center ">
						
                      <div className="mt-6 ">
					  <h4 className="mb-3 font-semibold">Update basic information to increase page Discovery.</h4>
                        <div>
                          <Input
                            required
                            type="file"
                            name="image"
                            showFilePreview
                          />
                        </div>
                        <div className="mt-6">
                          <Input
                            label="Name"
                            type="text"
                            name="businessName"
                            required
                          />
                        </div>
                        <div>
                          <div className="w-full mt-6">
                            <Input
                              label="Public URL/Company"
                              type="text"
                              name="link"
                              required
                            />
                          </div>
                        </div>

                        <div className="w-full mt-6">
                          <label
                            htmlFor="TagLine"
                            className="w-full font-bold text-left text-title mb-1"
                          >
                            Tagline
                          </label>
                          <textarea
                            id="TagLine"
                            className="w-full resize-none p-3 text-sm xl:text-base xl:p-6 bg-accents-light-blue rounded-[10px]  border-[#B8C9C9] border-[2px] outline-none"
                            cols={30}
                            rows={1}
                            {...register("TagLine", { required: true })}
                          />
                        </div>

						<div className="mt-6">
                    <div className="">
                      <Button
                        // loading={loading}
                        type="submit"
                        size="sm"
                        className="text-sm xl:text-base font-normal w-full"
						onClick={()=>EditBusinessPage(data)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                      </div>
                    </div>
                  </form>
                
                </FormProvider>
              </Modal>
            </div>
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
export default EditBusinessPage;
