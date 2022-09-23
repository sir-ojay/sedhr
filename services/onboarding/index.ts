import {
	VerifyPaymentRequest,
	VerifyPaymentResponse,
} from "@/types/onboarding";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any) => ({
	url,
	method: "POST",
	body: details,
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
	}),
});

export const { useVerifyPaymebtMutation } = onboarding;
