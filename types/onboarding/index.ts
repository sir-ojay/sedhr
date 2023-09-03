export type Onboarding = {
  amount: number;
  description: string[];
  interval: string;
  subscriptionName: string;
  planId: string;
};

export type VerifyPaymentResponse = {
  success: boolean;
  message: string;
  error:string;
};

export type VerifyPaymentRequest = {
  reference: string;
  amount: number;
  email: string;
};

export type GetSubscriptionResponse = {
  success: boolean;
  message: string;
  error:string;
  data: Onboarding[];
};

export type GetSubscriptionRequest = {
  token: string;
};

export type CompleteOnboardingResponse = {
  success: boolean;
  error:string;
  message: string;
};

export type CompleteOnboardingRequest = {
  token: string;
  body: {
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
    accountName: " ";
    accountNumber: " ";
    bankName?: " ";
    idDetails: [
      {
        idType: string;
        idLink: string;
      }
    ];
    dateOfBirth: string;
    gender: string;
    criminalHistory?: "None";
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
    ];
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
