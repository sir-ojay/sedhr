import {
	CreateH2HRequest,
	CreateH2HResponse,
	GetRFPSRequest,
	GetRFPSResponse,
} from "@/types/collaboration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any, token?: string) => ({
	url,
	method: "POST",
	headers: {
		Authorization: `Bearer ${token}`,
	},
	body: details,
});

const putRequest = (url: string, details: any, token?: string) => ({
	url,
	method: "PUT",
	headers: {
		Authorization: `Bearer ${token}`,
	},
	body: details,
});

const getRequest = (url: string, token: string) => ({
	url,
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

const deleteRequest = (url: string, token: string) => ({
	url,
	method: "DELETE",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const collaboration = createApi({
	reducerPath: "collaboration",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		getRFPs: builder.query<GetRFPSResponse, GetRFPSRequest>({
			query: (credentials) => getRequest("/rfps", credentials.token),
		}),
		createH2H: builder.mutation<CreateH2HResponse, CreateH2HRequest>({
			query: (credentials) =>
				postRequest(`/h2hs`, credentials.body, credentials.token),
		}),
	}),
});

export const { useGetRFPsQuery, useCreateH2HMutation } = collaboration;
