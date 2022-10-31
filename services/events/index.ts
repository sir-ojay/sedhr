import {
	GetMyEventsRequest,
	GetMyEventsResponse,
	GetReceivedEventsRequest,
	GetReceivedEventsResponse,
} from "@/types/events";
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

export const events = createApi({
	reducerPath: "events",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	tagTypes: ["Follow", "Connect", "FriendsRequest", "Friends"],
	endpoints: (builder) => ({
		getReceivedEvents: builder.query<
			GetReceivedEventsResponse,
			GetReceivedEventsRequest
		>({
			query: (credentials) =>
				getRequest(`/events/users/${credentials.username}`, credentials.token),
		}),
		getMyEvents: builder.query<GetMyEventsResponse, GetMyEventsRequest>({
			query: (credentials) => getRequest("/events/users/me", credentials.token),
		}),
	}),
});

export const { useGetReceivedEventsQuery, useGetMyEventsQuery } = events;
