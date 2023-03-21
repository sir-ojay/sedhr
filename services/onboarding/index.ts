import {
	CompleteOnboardingRequest,
	CompleteOnboardingResponse,
	GetCountriesRequest,
	GetCountriesResponse,
	GetStatesRequest,
	GetStatesResponse,
	VerifyPaymentRequest,
	VerifyPaymentResponse,
} from "@/types/onboarding";
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

export const onboarding = createApi({
	reducerPath: "onboarding",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	endpoints: (builder) => ({
		verifyPayment: builder.mutation<
			VerifyPaymentResponse,
			VerifyPaymentRequest
		>({
			query: (credentials) => postRequest("/payments/verify", credentials),
		}),
		completeOnboarding: builder.mutation<CompleteOnboardingResponse,CompleteOnboardingRequest>({
			query: (credentials) =>
				postRequest("/onboard/account", credentials.body, credentials.token),
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
	useVerifyPaymentMutation,
	useGetCountriesMutation,
	useGetStatesMutation,
	useCompleteOnboardingMutation,
} = onboarding;
