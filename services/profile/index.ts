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
const updateRequest = (url: string, details: any, token?: string) => ({
	url,
	method: "PUT",
	headers: {
		Authorization: `Bearer ${token}`,
	},
	body: details,
});

export const profile = createApi({
	reducerPath: "profile",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	tagTypes: ["Profile"],
	endpoints: (builder) => ({
		updateCoverPhoto: builder.mutation({
			query: (credentials) =>
				postRequest(
					"/users/cover-picture",
					credentials.body,
					credentials.token
				),
		}),
		userProfileDetails: builder.query({
			query: (credentials) =>
				getRequest(`/users/${credentials.id}/profile`, credentials.token),
			providesTags: ["Profile"],
		}),
		updateProfilePhoto: builder.mutation({
			query: (credentials) =>
				updateRequest(
					"/users/profile-picture",
					credentials.body,
					credentials.token
				),
		}),
		addEducation: builder.mutation({
			query: (credentials) =>
				postRequest("/users/education", credentials.body, credentials.token),
		}),
	}),
});

export const {
	useUpdateCoverPhotoMutation,
	useUpdateProfilePhotoMutation,
	useAddEducationMutation,
	useUserProfileDetailsQuery,
} = profile;
