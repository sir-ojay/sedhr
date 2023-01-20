import {
	CloseAccountRequest,
	CloseAccountResponse,
	GetSettingsRequest,
	GetSettingsResponse,
	HibernateAccountRequest,
	HibernateAccountResponse,
	UpdateSettingsRequest,
	UpdateSettingsResponse,
} from "@/types/settings";
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

export const settings = createApi({
	reducerPath: "settings",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	tagTypes: ["Settings"],
	endpoints: (builder) => ({
		getSettings: builder.query<GetSettingsResponse, GetSettingsRequest>({
			query: (credentials) => getRequest(`/users/settings`, credentials.token),
			providesTags: ["Settings"],
		}),
		updateSettings: builder.mutation<
			UpdateSettingsResponse,
			UpdateSettingsRequest
		>({
			query: (credentials) =>
				postRequest("/users/settings", credentials.body, credentials.token),
			invalidatesTags: ["Settings"],
		}),
		hibernateAccount: builder.mutation<
			HibernateAccountResponse,
			HibernateAccountRequest
		>({
			query: (credentials) =>
				postRequest(
					"/users/hibernate-account",
					credentials.reason,
					credentials.token
				),
		}),
		closeAccount: builder.mutation<CloseAccountResponse, CloseAccountRequest>({
			query: (credentials) =>
				postRequest(
					"/users/close-account",
					credentials.reason,
					credentials.token
				),
		}),
	}),
});

export const {
	useGetSettingsQuery,
	useUpdateSettingsMutation,
	useHibernateAccountMutation,
	useCloseAccountMutation,
} = settings;
