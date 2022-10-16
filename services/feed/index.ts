import { PostRequest, PostResponse } from "@/types/feed";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any, token?: string) => ({
	url,
	method: "POST",
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

export const feed = createApi({
	reducerPath: "feed",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		post: builder.mutation<PostResponse, PostRequest>({
			query: (credentials) =>
				postRequest("/posts", credentials.body, credentials.token),
		}),
		// getCountries: builder.mutation<GetCountriesResponse, GetCountriesRequest>({
		// 	query: (credentials) => getRequest("/misc/countries", credentials.token),
		// }),
	}),
});

export const { usePostMutation } = feed;
