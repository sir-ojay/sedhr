import { useUpdateProfilePhotoMutation } from "@/services/pages";
import { useUploadDocumentMutation } from "@/services/upload";
import { LoginResponse } from "@/types/auth/auth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SmallAvatars from "./SmallAvatars";

type LargeDetailsCardProps = {
  type: "event" | "group" | "account" | "profile";
  editCoverPicture?: () => void;
  editable?: boolean;
  dataForBusiness?: any;
  loading?: boolean;
};

const LargeDetailsBusinessCard = ({
  type,
  editable,
  editCoverPicture,
  dataForBusiness,
  loading,
}: LargeDetailsCardProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      school: "",
    },
  });

  console.log(dataForBusiness);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const router = useRouter();
  const [user, setUser] = useState<LoginResponse>();
  const [showProfilePhoto, setShowProfilePhoto] = useState(false);
  const editProfilePhoto = () => {
    setShowProfilePhoto(!showProfilePhoto);
  };
  const token = Cookies.get("sedherToken");

  const [upload, { isLoading: isLoadingUploadDocument }] =
    useUploadDocumentMutation();

  const [updateProfilePhoto, { isLoading: isLoadingUpload }] =
    useUpdateProfilePhotoMutation();

  const editProfilePictureFunc = async (data: any) => {
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
            pictureLink: url.data[0],
            pageId: dataForBusiness._id,
            type: "business",
          },
        };
      }
      const response = await updateProfilePhoto(details).unwrap();
      toast.success(response.message);
      setShowProfilePhoto(false);
    } catch (err: any) {
      toast.error(err?.data?.error);
    }
  };

  useEffect(() => {
    try {
      const user = JSON.parse(Cookies.get("sedherUser") || "{}");
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="rounded-xl bg-white overflow-hidden">
      <div className="relative">
      {editable && (
					<button
						onClick={editCoverPicture}
						className='absolute z-30 right-5 top-5'>
						<svg
							width='40'
							height='40'
							viewBox='0 0 40 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g clip-path='url(#clip0_4215_44230)'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M11.8787 14.8787C12.4413 14.3161 13.2044 14 14 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H14C13.7348 16 13.4804 16.1054 13.2929 16.2929C13.1054 16.4804 13 16.7348 13 17V26C13 26.2652 13.1054 26.5196 13.2929 26.7071C13.4804 26.8946 13.7348 27 14 27H23C23.2652 27 23.5196 26.8946 23.7071 26.7071C23.8946 26.5196 24 26.2652 24 26V23C24 22.4477 24.4477 22 25 22C25.5523 22 26 22.4477 26 23V26C26 26.7957 25.6839 27.5587 25.1213 28.1213C24.5587 28.6839 23.7957 29 23 29H14C13.2043 29 12.4413 28.6839 11.8787 28.1213C11.3161 27.5587 11 26.7956 11 26V17C11 16.2044 11.3161 15.4413 11.8787 14.8787Z'
									fill='#F8F8FD'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M24.7929 10.7931C25.3783 10.2078 26.1722 9.87891 27 9.87891C27.8278 9.87891 28.6217 10.2078 29.2071 10.7931C29.7925 11.3785 30.1213 12.1724 30.1213 13.0002C30.1213 13.8281 29.7925 14.622 29.2071 15.2073L20.7071 23.7073C20.5196 23.8949 20.2652 24.0002 20 24.0002H17C16.4477 24.0002 16 23.5525 16 23.0002V20.0002C16 19.735 16.1054 19.4807 16.2929 19.2931L24.7929 10.7931ZM27 11.8789C26.7026 11.8789 26.4174 11.997 26.2071 12.2073L18 20.4144V22.0002H19.5858L27.7929 13.7931C28.0032 13.5828 28.1213 13.2976 28.1213 13.0002C28.1213 12.7028 28.0032 12.4176 27.7929 12.2073C27.5826 11.997 27.2974 11.8789 27 11.8789Z'
									fill='#F8F8FD'
								/>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M23.2929 12.2929C23.6834 11.9024 24.3166 11.9024 24.7071 12.2929L27.7071 15.2929C28.0976 15.6834 28.0976 16.3166 27.7071 16.7071C27.3166 17.0976 26.6834 17.0976 26.2929 16.7071L23.2929 13.7071C22.9024 13.3166 22.9024 12.6834 23.2929 12.2929Z'
									fill='#F8F8FD'
								/>
							</g>
							<path
								d='M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H30C35.2467 0.5 39.5 4.7533 39.5 10V39.5H0.5V10Z'
								stroke='#A8ADB7'
							/>
							<defs>
								<clipPath id='clip0_4215_44230'>
									<rect
										width='24'
										height='24'
										fill='white'
										transform='translate(8 8)'
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
				)}
        <Image
          className="w-full max-h-[140px] bg-cover object-cover"
          src={dataForBusiness && dataForBusiness?.coverPicture}
          width={2286}
          height={420}
          alt=""
        />

        {(type === "account" || type === "profile") && (
          <div
            className="absolute top-[50%] left-8 border-8 border-white rounded-full"
            onClick={editProfilePhoto}
          >
            <Image
              alt=""
              className="rounded-full border-2 border-[#B8C9C9]  "
              src={dataForBusiness && dataForBusiness?.profilePicture}
              width={140}
              height={140}
            />
          </div>
        )}
      </div>
      {(type === "event" || type === "group") && (
        <div className="p-5 space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold font-clash text-2xl text-dark-900">
              Adagio CME-CPD Training Service
            </h1>
            <Button theme="outline">Share</Button>
          </div>
          <div className="font-epilogue text-lg text-dark-900">
            Event by:{" "}
            <Button
              tag="a"
              underline={false}
              href="/"
              className="text-[#1E5156]"
            >
              Salami tayo
            </Button>
          </div>
          <div className="flex gap-2 items-center py-3 px-6 bg-[#44BE9D1A] w-fit rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5V21"
                stroke="#44BE9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5V14"
                stroke="#44BE9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996"
                stroke="#44BE9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13.9996C5.93464 13.0835 7.19124 12.5703 8.5 12.5703C9.80876 12.5703 11.0654 13.0835 12 13.9996C12.9346 14.9157 14.1912 15.4289 15.5 15.4289C16.8088 15.4289 18.0654 14.9157 19 13.9996"
                stroke="#44BE9D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[#44BE9D] font-semibold">OPEN</span>
          </div>
          <SmallAvatars name="Ibrahim Sannu" label="+300 Attendees" />
        </div>
      )}
      {(type === "account" || type === "profile") && (
        <div className="p-5 space-y-2 ml-56">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="font-semibold font-clash text-2xl text-title">
                {user?.name}
              </h1>
              {/* <div className='text-lg font-epilogue text-dark-100'>
								Medical Doctor at{" "}
								<Button
									underline={false}
									href='/'
									className='text-title'
									tag='a'>
									Eko hospital
								</Button>
							</div> */}
            </div>
            {type === "account" && <Button theme="outline">Unfollow</Button>}
            {/* {type === "profile" && (
							<Link href={`/profile/${router.query.username}/edit`}>
								<Button theme='outline'>Edit Profile</Button>
							</Link>
						)} */}
          </div>
          <Button
            tag="a"
            href="/"
            className="text-[#F47D5B] uppercase"
            underline={false}
          >
            {user?.accountType}
          </Button>
          {/* {type === "account" && (
						<div className='flex gap-2'>
							<Button>Message</Button>
							<Button theme='outline' icon='more' />
							<Button theme='outline' icon='notification' />
						</div>
					)} */}
        </div>
      )}

      <Modal show={showProfilePhoto} onRequestClose={() => editProfilePhoto()}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(editProfilePictureFunc)}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-7">
                <div className="text-base xl:text-lg font-semibold text-[#25324B]">
                  Picture photo
                </div>
              </div>
              <button
                onClick={() => setShowProfilePhoto(false)}
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
            <div>
              <Input required type="file" name="media" showFilePreview />
            </div>
            <div>
              <h4 className="text-center">
                Showcase your business, interests, team moments or notable
                milestones. A good background photo will help you stand out.
              </h4>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-end">
                <Button
                  loading={
                    isLoadingUpload || isLoadingUploadDocument || loading
                  }
                  type="submit"
                  size="sm"
                  className="text-sm xl:text-base font-normal "
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </section>
  );
};

export default LargeDetailsBusinessCard;
