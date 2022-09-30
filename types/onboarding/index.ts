export type VerifyPaymentResponse = {
	success: boolean;
	message: string;
};

export type VerifyPaymentRequest = {
	reference: string;
	amount: number;
	email: string;
};

export type CompleteOnboardingResponse = {
	success: boolean;
	message: string;
};

export type CompleteOnboardingRequest = {
	token: string;
	body: {
		accountType: "hcp" | "pcc" | "business" | "nonprofit";
		phoneNumber?: string;
		physicalAddress?: string;
		membershipNumber?: string;
		dateOfBirth?: string;
		category: string;
		state: string;
		country: string;
		professionalRegistrationNumber?: string;
		criminalHistory?: string;
		idDetails: {
			idLink: string;
			idType: string;
			publicId?: string;
		}[];
	};
};

export type GetCountriesResponse = {
	countries: {
		data: string[];
	};
};

export type GetCountriesRequest = {
	token: string;
};

export type GetStatesResponse = {
	countries: {
		data: string[];
	};
};

export type GetStatesRequest = {
	token: string;
	country: string;
};
