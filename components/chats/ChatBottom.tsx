import Image from "next/image";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../global/Button";
import Input from "../global/Input";
import { useCreateMessageMutation } from "@/services/collaborations";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import JWT from "jsonwebtoken";

const ChatBottom = ({ chatController, userIds , displayFile, setDisplayFile}: any) => {
  const [file, setFile] =useState<any>("");

  const methods = useForm({
    defaultValues: {
      message: "",
    },
    mode: "onChange",
  
  });


const onFileChange = (e) => {
  setFile(e?.target?.files?.[0])
}


  const [value, setValue] = useState("");

  const token = Cookies.get("sedherToken") as string;

  let { id } = JWT.decode(token) as { id: string };

  const [chat] = useCreateMessageMutation();
  const router = useRouter();
  const sendChat = async () => {
    if(!(!!value || !!file)){
      alert("please add a message or upload a file")
      return 
    }

   
    const  receiverId =
    id == userIds.senderId ? userIds.receiverId : userIds.senderId;

  const formData = new FormData(); 
  {
    file &&   formData.append('data', file, file.name)
  }
;
  formData.append('contentType',  file ? "image":"text" );
  formData.append('receiverId', receiverId);
  formData.append('content', value || "uploaded file");
   

   

      
    const result = chat({
      token,
      body: formData, 
    }).unwrap().then(async (res)=>{
      let messageTextObj = { type: 1, message: value };
      let config = {
        priority: 1, // Set priority for the message. 1: Low (by default). 2: Medium. 3: High.
      };
      // console.log(res.data.content         )
      // console.log(res.getData.attachment        )
      // console.log(res.getData.attechment)
      setValue("");
      setFile(null)
  
      // await chatController
      // .sendMessage(messageTextObj, receiverId, 0, config)
      // .then(function ({ message }: any) {});
      
   
    });

  };

  return (
    <div>
      <div className="flex items-center mt-28 w-full gap-4 py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px]">
        <div>
          <label htmlFor="file">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005"
                stroke="#25324B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          </label>
         
          <input type="file" id="file"  onChange={
            onFileChange
            
            
            }  style={{display:'none'}} accept=".jpeg, .jpeg, .png, .mp3, .mp4"/>

        </div>
        <div className="flex-1">
          <FormProvider {...methods}>
            <Input
              type="text"
              className=" focus:border-primary outline-none w-full"
              placeholder="Reply message"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </FormProvider>
        </div>

        <div className="flex">
          <img src="/assets/icons/emoji.svg" alt="emoji" title="emoji" />
          <Button
            icon="Icon"
            className="ml-4 rounded-none"
            onClick={sendChat}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBottom;
