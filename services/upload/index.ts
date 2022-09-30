import { UploadDocumentRequest, UploadDocumentResponse } from "@/types/upload";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any, token: string) => ({
	url,
	method: "POST",
	body: details,
});

export const upload = createApi({
	reducerPath: "upload",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		uploadDocument: builder.mutation<
			UploadDocumentResponse,
			UploadDocumentRequest
		>({
			query: (credentials) => {
				const formData = new FormData();
				formData.append("data", credentials.file[0]);
				return postRequest("/uploads", formData, credentials.token);
			},
		}),
	}),
});

export const { useUploadDocumentMutation } = upload;
