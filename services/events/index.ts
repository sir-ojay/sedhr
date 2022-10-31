import {
	CreateEventRequest,
	CreateEventResponse,
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
	tagTypes: ["Event"],
	endpoints: (builder) => ({
		getReceivedEvents: builder.query<
			GetReceivedEventsResponse,
			GetReceivedEventsRequest
		>({
			query: (credentials) =>
				getRequest(`/events/users/${credentials.username}`, credentials.token),
			providesTags: ["Event"],
		}),
		getMyEvents: builder.query<GetMyEventsResponse, GetMyEventsRequest>({
			query: (credentials) => getRequest("/events/users/me", credentials.token),
			providesTags: ["Event"],
		}),
		createEvent: builder.mutation<CreateEventResponse, CreateEventRequest>({
			query: (credentials) =>
				postRequest("/events", credentials.body, credentials.token),
			invalidatesTags: ["Event"],
		}),
	}),
});

export const {
	useGetReceivedEventsQuery,
	useGetMyEventsQuery,
	useCreateEventMutation,
} = events;
