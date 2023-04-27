export type GetRFPSResponse = {
  message: string;
  data: RFP[];
};

export type GetRFPSRequest = {
  token: string;
};

export type GetRFPResponse = {
  message: string;
  data: RFP;
};

export type GetRFPRequest = {
  token: string;
  userId: string;
};

export type GetRFPApplicationResponse = {
  message: string;
  data: RFP;
};

export type GetRFPApplicationRequest = {
  token: string;
  id: string;
};

export type CreateRFPRequest = {
  token: string;
  body: {};
};

export type CreateRFPResponse = {
  message: string;
};

export type GetRFPCodeResponse = {
  data: {
    code: string;
  };
};

export type GetRFPCodeRequest = {
  token: string;
};

export type CreateRFPApplicationResponse = {
  message: string;
  data: RFP;
  id: string;
};

export type CreateRFPApplicationRequest = {
  token: string;
  body: {};
  id: string;
};

export type RFP = {
  _id: string;
  userId: string;
  createdAt: string;
  productName: string;
  category: string;
  scopeOfWork: string;
  communications: {
    channels: string[];
    responseToEmail: string;
    responseToFeedback: string;
    note: string;
  };
  selectionCriteria: string;
  additionalDetails?: string[];
  budgets: {
    fieldName?: string;
    value: number;
  }[];
  bids: {
    deadline: string;
    selectionDate: string;
    note: string;
  };
  code: string;
  applicantId: string;
  details: string[];
  documentLinks: string[];
};

export type CreateH2HRequest = {
  token: string;
  body: {};
};

export type CreateH2HResponse = {
  message: string;
};

export type H2H = {
  productDetails: {
    name: string;
    category: string;
    description: string;
    quantity: number;
  };
  itemDetails: {
    modelOrType: string;
    description: string;
  };
  technicalDetails: {
    dimensions: string;
    weight: string;
  };
  pickupLocation: {
    address: string;
    lga: string;
    state: string;
    country: string;
  };
  paymentDetails: {
    paymentType: "FIXED";
    prices: [
      {
        value: number;
      }
    ];
  };
  _id: string;
  userId: string;
  code: string;
  images: string[];
  shipmentDetails: string;
  createdAt: string;
  updatedAt: string;
  owner: {
    accountType: string;
    name: string;
    profilePicture: string;
  };
};

export type GetH2HSResponse = {
  message: string;
  data: H2H[];
};

export type GetH2HSRequest = {
  token: string;
};

export type GetH2HResponse = {
  message: string;
  data: H2H;
};

export type GetH2HRequest = {
  token: string;
  id: string;
};

export type Chat = {
  lastMessage: string;
  senderId: {
    _id: string;
    profilePicture: string;
    username: string;
  };
  sender: {
    _id: string;
    profilePicture: string;
    username: string;
  };
  conversationPartner: {
    _id: string;
    name: string;
    accountType: string;
    profilePicture: string;
  };
  recipientId: string;
  content: string;
  _id: string;
  timestamp: string;
};

export type CreateChatResponse = {
  message: string;
  getData: Chat;
};

export type CreateChatRequest = {
  token: string;
  body: {};
};
export type GetChatResponse = {
  message: any;
  data: {
    messages: [];
  };
};

export type GetChatRequest = {
  token: string;
  senderId: string;
  receiverId: string;
};
export type GetConvoResponse = {
  message: string;
  data: Chat[];
};

export type GetConvoRequest = {
  token: string;
};

export type Snergi = {
  bookings?: {
    title: string;
    category: string;
    bookingPageLink: string;
    description: string;
  };
  equipments?: {
    imageUrl: string;
    buildYear: string;
    condition: string;
    availability: string;
    status: string;
    weight: string;
    dimension: string;
    serialNumber: string;
    documents: string[];
  };
  event?: {
    date: {
      range: [];
    };
    availabilties: [];
    availabilities: [];
  };
  locationDetails?: {
    street: string;
    lga: string;
    state: string;
    country: string;
  };
  paymentDetails?: {
    prices: [
      {
        value: number;
        _id: string;
      }
    ];
    total: 500000;
  };
  owner?: {
    accountType: string;
    name: string;
    profilePicture: string;
  };
  code?: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
};

export type GetSnergisResponse = {
  message: string;
  data: Snergi[];
};

export type GetSnergisRequest = {
  token: string;
};

export type GetSnergiResponse = {
  message: string;
  data: Snergi;
};

export type GetSnergiRequest = {
  token: string;
  id: string;
};

export type CreateSnergiRequest = {
  token: string;
  body: {};
};

export type CreateSnergiResponse = {
  message: string;
};

export type Booking = {
  description?: string;
  patients?: [
    {
      firstName: string;
      lastName: string;
      age: string;
      gender: string;
      condition: string;
      attachments: [];
    }
  ];
  appointment?: {
    dateSlot: string;
    selectedSlots?: string[];
    communicationChannels?: string[];
  };
};

export type CreateBookingResponse = {
  message: string;
  data: Booking[];
  id: string;
};

export type CreateBookingRequest = {
  token: string;
  body: {};
  id: string;
};

export type GetBookingResponse = {
  message: string;
  data: Booking;
  id: string;
};

export type GetBookingRequest = {
  token: string;
  id: string;
};

export type Available = {
  spots?: [
    {
      startTime?: string;
      status?: string;
    }
  ];
  date?: string;
};

export type GetAvailabilityResponse = {
  message: string;
  data: Booking;
  id: string;
};

export type GetAvailabilityRequest = {
  token: string;
  id: string;
  time: string;
};
