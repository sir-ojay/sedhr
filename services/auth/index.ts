import {
	LoginRequest,
	LoginResponse,
	RegisterRequest,
	RegisterResponse,
	ValidateEmailRequest,
	ValidateEmailResponse,
	ForgotPasswordRequest,
	ForgotPasswordResponse,
	VerifyEmailRequest,
	VerifyEmailResponse,
} from "@/types/auth/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any) => ({
	url,
	method: "POST",
	body: details,
});

export const auth = createApi({
	reducerPath: "auth",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api/auth",
		// prepareHeaders: (headers, { getState }) => {
		// 	// By default, if we have a token in the store, let's use that for authenticated requests
		// 	const token = (getState() as RootState).auth.token;
		// 	if (token) {
		// 		headers.set("authorization", `Bearer ${token}`);
		// 	}
		// 	return headers;
		// },
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => postRequest("/loginbyemail", credentials),
		}),
		register: builder.mutation<RegisterResponse, RegisterRequest>({
			query: (credentials) => postRequest("/register", credentials),
		}),
		verifyEmail: builder.mutation<VerifyEmailResponse, VerifyEmailRequest>({
			query: (credentials) => postRequest("/sendotp", credentials),
		}),
		validateEmail: builder.mutation<
			ValidateEmailResponse,
			ValidateEmailRequest
		>({
			query: (credentials) => postRequest("/validateotp", credentials),
		}),
		forgotPassword: builder.mutation<
			ForgotPasswordResponse,
			ForgotPasswordRequest
		>({
			query: (credentials) =>
				postRequest("https://sedher.herokuapp.com/api/forgot", credentials),
		}),
	}),
});

export const {
	useLoginMutation,
	useVerifyEmailMutation,
	useValidateEmailMutation,
	useRegisterMutation,
	useForgotPasswordMutation,
} = auth;
