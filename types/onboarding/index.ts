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
	body:{
		accountType: "hcp" | "pcc" | "business" | "non-profit";
		category: string;
		phoneNumber: string;
		physicalAddress: string;
		lga: string;
		state: string;
		stateOfOrigin: string;
		country: string;
		businessName: string;
		businessEmail: string;
		businessPhone: string;
		businessWebsite: string;
		businessAddress: string;
		businessLga: string;
		businessState: string;
		annualRevenue: string;
		businessCountry: string;
		accountName: 'None';
		accountNumber: 'None';
		bankName?: 'None';
		idDetails: [
			{
				idType: string;
				idLink: string;
			}
			
		],
		dateOfBirth: string;
		criminalHistory?: 'None';
		numberOfBeds?: string;
		averagePatientTurnover: string;
		numberOfTheaters?: string;
		numberOfXrayMachines?: string;
		numberOfUltrasoundMachines?: string;
		numberOfIcu: string;
		numberOfMriMachines?: string;
		numberOfAnaestheticMachines: string;
		numberOfEcgMachines: string;
		numberOfEmergencyRooms?: string;
		numberOfLaboratories?: string;
		numberOfPharmacies?: string;
		numberOfMonitors: string;
		numberOfCTScanners: string;
		platformManager: [
			{
				name: string;
				email: string;
			}
		]
	}
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
