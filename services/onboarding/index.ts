import {
	GetCountriesRequest,
	GetCountriesResponse,
	GetStatesRequest,
	GetStatesResponse,
	VerifyPaymentRequest,
	VerifyPaymentResponse,
} from "@/types/onboarding";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any) => ({
	url,
	method: "POST",
	body: details,
});

const getRequest = (url: string, token: string) => ({
	url,
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const onboarding = createApi({
	reducerPath: "onboarding",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		verifyPaymebt: builder.mutation<
			VerifyPaymentResponse,
			VerifyPaymentRequest
		>({
			query: (credentials) => postRequest("/payments/verify", credentials),
		}),
		getCountries: builder.mutation<GetCountriesResponse, GetCountriesRequest>({
			query: (credentials) => getRequest("/misc/countries", credentials.token),
		}),
		getStates: builder.mutation<GetStatesResponse, GetStatesRequest>({
			query: (credentials) =>
				getRequest(
					`/misc/countries/states/${credentials.country}`,
					credentials.token
				),
		}),
	}),
});

export const {
	useVerifyPaymebtMutation,
	useGetCountriesMutation,
	useGetStatesMutation,
} = onboarding;
