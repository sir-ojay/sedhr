import React, { useState , useEffect} from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import Input from "@/components/global/Input";
import GoBackButton from "@/components/global/GoBackButton";
import Button from "@/components/global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useGetSnergiQuery } from "@/services/collaborations";
import { Snergi } from "@/types/collaboration";

import { useCreateBookingMutation } from "@/services/collaborations";

const PatientDetail = () => {
  const router = useRouter();
  const [snergiData, setSnergiData] = useState<Snergi>();
//   console.log(snergiData);

  const token: any = Cookies.get("sedherToken");

  const { data, isSuccess } = useGetSnergiQuery({
    token,
    id: router.query.id?.toString()!,
  });

  useEffect(() => {
    // console.log(data);
    // @ts-ignore: Unreachable code error
    data && setSnergiData(data?.data);
  }, [isSuccess, data]);

  const [file, setFile] = useState<any>("");

  const [value, setValue] = useState({
      title:"",
      firstName:"",
      lastName:"",
      condition:"",
      gender:"",
      age:""
  });

  // const token = Cookies.get("sedherToken") as string;
  console.log(token)



  const [Booking] = useCreateBookingMutation();
  // const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const onFileChange = (e) => {
    setFile(e?.target?.files?.[0]);
  };

  const methods = useForm({
    defaultValues: {
      message: "",
    },
    mode: "onChange",
  });

  const handleSubmit =  (e) => {
    e.preventDefault()

// console.log(router.query)
    const result = Booking({
      token,
      id:router.query.id?.toString()!,
      body:
      {    "description": value.title,
        "patients": [
            {
                "firstName": value.firstName,
                "lastName": value.lastName,
                "age": value.age,
                "gender": value.gender,
                "condition": value.condition,
                "attachments": []
            }
        ],
        "appointment": JSON.parse(localStorage.getItem("appointment") as string)
    }
    })
      .unwrap()
      .then(async (res) => {
        // console.log({res})
    
        setFile(null);

        router.push(
          `/collaboration/sedher-synergi/${snergiData?.id}/edit/view`
        )
      });

  };
  return (
    <DefaultLayout>
      <GoBackButton label="1600 W Universal Machine Centre" />

      <WhiteWrapper className="flex justify-between mt-5">
        <div>
          <b>Patient Information</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Button type="submit">Add Patient Details</Button>
      </WhiteWrapper>

      <FormProvider {...methods}>
        <form   onSubmit={handleSubmit}>
          <WhiteWrapper className="mt-5">
            <div className="space-y-6">
              <b>Summary</b>
              <Input
                name="title"
                label="Description"
                placeholder="description..."
                value={value.title}
                onChange={(e) => setValue(prev=>{
                  return {...prev,title:e.target.value}
                })}
                rules={["required"]}
              />
            </div>
          </WhiteWrapper>

          <WhiteWrapper className="mt-5">
            <div className="my-5">
              <b>Patient Details</b>
            </div>

            <div className=" grid grid-cols-2 gap-4 max-[650px]:grid-cols-1">
              <Input
                name="First name"
                label="First name"
                placeholder="first name"
                value={value.firstName}
                onChange={(e) => setValue(prev=>{
                  return {...prev,firstName:e.target.value}
                })}                rules={["required"]}
              />
              <Input
                name="Last name"
                label="Last name"
                placeholder="last name"
                value={value.lastName}
                onChange={(e) => setValue(prev=>{
                  return {...prev,lastName:e.target.value}
                })}  
                rules={["required"]}
              />

              <Input
                name="Gender"
                label="Gender"
                placeholder="gender"
                value={value.gender}
                onChange={(e) => setValue(prev=>{
                  return {...prev,gender:e.target.value}
                })}  
                rules={["required"]}
              />
              <Input
                name="Age"
                label="Age"
                placeholder="age"
                rules={["required"]}
                value={value.age}
                onChange={(e) => setValue(prev=>{
                  return {...prev,age:e.target.value}
                })}  
              />
              <Input
                name="Condition"
                label="Condition"
                placeholder="condition"
                rules={["required"]}
                value={value.condition}
                onChange={(e) => setValue(prev=>{
                  return {...prev,condition:e.target.value}
                })}  
              />

              <Input
                name="image"
                type="file"
                label="Attach image"
                onChange={onFileChange}
              />
            </div>
          </WhiteWrapper>
          <div className="flex justify-between mt-5">
            <Button theme="outline" onClick={handleClick}>
              Back
            </Button>
            <Button
            type="submit"
            >
              Submit Booking
            </Button>
          </div>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
};

export default PatientDetail;
