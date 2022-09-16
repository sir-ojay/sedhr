import {
	ExchangeRateRequest,
	ExchangeRateResponse,
} from "@/types/transactions/transactions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const postRequest = (url: string, details: any) => ({
	url,
	method: "POST",
	body: details,
});

export const transactions = createApi({
	reducerPath: "transactions",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_KADAVRA_PAYMENT_URL,
		// prepareHeaders: (headers, { getState }) => {
		// 	// By default, if we have a token in the store, let's use that for authenticated requests
		// 	const token = (getState() as RootState).auth.token;
		// 	if (token) {
		// 		headers.set("authorization", `Bearer ${token}`);
		// 	}
		// 	return headers;
		// },
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getExchangeRate: builder.mutation<
			ExchangeRateResponse,
			ExchangeRateRequest
		>({
			query: (credentials) => postRequest("/api/v1/rates/latest", credentials),
		}),
	}),
});

export const {
	useGetExchangeRateMutation,
	util: { getRunningOperationPromises },
} = transactions;

export const { getExchangeRate } = transactions.endpoints;
