import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getRequest = (url: string, token: string) => ({
	url,
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const notifications = createApi({
	reducerPath: "notifications",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		getUserNotification: builder.mutation({
			query: (credentials) => getRequest("/users/notifications", credentials),
		}),
	}),
});

export const { useGetUserNotificationMutation } = notifications;
