import {
	CreateH2HRequest,
	CreateH2HResponse,
	CreateSnergiRequest,
	CreateSnergiResponse,
	GetH2HRequest,
	GetH2HResponse,
	GetH2HSRequest,
	GetH2HSResponse,
	GetRFPSRequest,
	GetRFPSResponse,
	GetSnergiRequest,
	GetSnergiResponse,
	GetSnergisRequest,
	GetSnergisResponse,
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
	tagTypes: ["Synergi", "H2H", "RFP"],
	endpoints: (builder) => ({
		getRFPs: builder.query<GetRFPSResponse, GetRFPSRequest>({
			query: (credentials) => getRequest("/rfps", credentials.token),
		}),
		getH2Hs: builder.query<GetH2HSResponse, GetH2HSRequest>({
			query: (credentials) => getRequest("/h2hs", credentials.token),
			providesTags: ["H2H"],
		}),
		getH2H: builder.query<GetH2HResponse, GetH2HRequest>({
			query: (credentials) =>
				getRequest(`/h2hs/${credentials.id}`, credentials.token),
		}),
		createH2H: builder.mutation<CreateH2HResponse, CreateH2HRequest>({
			query: (credentials) =>
				postRequest(`/h2hs`, credentials.body, credentials.token),
			invalidatesTags: ["H2H"],
		}),
		getSnergis: builder.query<GetSnergisResponse, GetSnergisRequest>({
			query: (credentials) =>
				getRequest("/synergies/public", credentials.token),
			providesTags: ["Synergi"],
		}),
		getSnergi: builder.query<GetSnergiResponse, GetSnergiRequest>({
			query: (credentials) =>
				getRequest(`/synergies/${credentials.id}`, credentials.token),
		}),
		createSnergi: builder.mutation<CreateSnergiResponse, CreateSnergiRequest>({
			query: (credentials) =>
				postRequest(`/synergies`, credentials.body, credentials.token),
			invalidatesTags: ["Synergi"],
		}),
	}),
});

export const {
	useGetRFPsQuery,
	useCreateH2HMutation,
	useGetH2HsQuery,
	useGetH2HQuery,
	useGetSnergisQuery,
	useGetSnergiQuery,
	useCreateSnergiMutation,
} = collaboration;
