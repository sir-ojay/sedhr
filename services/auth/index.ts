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
	ResetPasswordResponse,
	ResetPasswordRequest,
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
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => postRequest("/login-by-email", credentials),
		}),
		register: builder.mutation<RegisterResponse, RegisterRequest>({
			query: (credentials) => postRequest("/register", credentials),
		}),
		verifyEmail: builder.mutation<VerifyEmailResponse, VerifyEmailRequest>({
			query: (credentials) => postRequest("/send-otp", credentials),
		}),
		validateEmail: builder.mutation<
			ValidateEmailResponse,
			ValidateEmailRequest
		>({
			query: (credentials) => postRequest("/validate-otp", credentials),
		}),
		forgotPassword: builder.mutation<
			ForgotPasswordResponse,
			ForgotPasswordRequest
		>({
			query: (credentials) => postRequest("/forgot", credentials),
		}),
		resetPassword: builder.mutation<
			ResetPasswordResponse,
			ResetPasswordRequest
		>({
			query: (credentials) =>
				postRequest(`/change-password/${credentials.token}`, credentials.body),
		}),
	}),
});

export const {
	useLoginMutation,
	useVerifyEmailMutation,
	useValidateEmailMutation,
	useRegisterMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
} = auth;
