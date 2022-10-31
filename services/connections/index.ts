import {
	GetFriendsRequest,
	GetFriendsResponse,
	SendFriendsRequest,
	SendFriendsResponse,
} from "@/types/connections";
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

const deleteRequest = (url: string, token: string) => ({
	url,
	method: "DELETE",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const connections = createApi({
	reducerPath: "connections",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		getFriends: builder.query<GetFriendsResponse, GetFriendsRequest>({
			query: (credentials) =>
				getRequest("/connections/findfriends", credentials.token),
		}),
		getFollows: builder.query<GetFriendsResponse, GetFriendsRequest>({
			query: (credentials) =>
				getRequest("/connections/findfollows", credentials.token),
		}),
		sendFriendRequest: builder.mutation<
			SendFriendsResponse,
			SendFriendsRequest
		>({
			query: (credentials) =>
				postRequest(
					`/connections/${credentials.username}/friendship`,
					"",
					credentials.token
				),
		}),
	}),
});

export const {
	useGetFriendsQuery,
	useSendFriendRequestMutation,
	useGetFollowsQuery,
} = connections;
