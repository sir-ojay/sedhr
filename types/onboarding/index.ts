export type VerifyPaymentResponse = {
	success: boolean;
	message: string;
};

export type VerifyPaymentRequest = {
	reference: string;
	amount: number;
	email: string;
};

export type GetCountriesResponse = {
	countries: string[];
};

export type GetCountriesRequest = {
	token: string;
};

export type GetStatesResponse = {
	countries: string[];
};

export type GetStatesRequest = {
	token: string;
	country: string;
};
