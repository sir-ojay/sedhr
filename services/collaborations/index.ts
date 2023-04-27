import {
  CreateChatResponse,
  CreateChatRequest,
  CreateH2HRequest,
  CreateH2HResponse,
  CreateSnergiRequest,
  CreateSnergiResponse,
  CreateBookingResponse,
  CreateBookingRequest,
  GetH2HRequest,
  GetH2HResponse,
  GetH2HSRequest,
  GetH2HSResponse,
  GetRFPSRequest,
  GetRFPSResponse,
  GetRFPRequest,
  GetRFPResponse,
  GetRFPCodeResponse,
  GetRFPCodeRequest,
  CreateRFPResponse,
  CreateRFPRequest,
  GetSnergiRequest,
  GetSnergiResponse,
  GetSnergisRequest,
  GetSnergisResponse,
  GetBookingResponse,
  GetBookingRequest,
  GetAvailabilityResponse,
  GetAvailabilityRequest,
  GetChatResponse,
  GetChatRequest,
  GetConvoResponse,
  GetConvoRequest,
  CreateRFPApplicationResponse,
  CreateRFPApplicationRequest,
  GetRFPApplicationResponse,
  GetRFPApplicationRequest,
} from "@/types/collaboration";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any, token?: string) => {
  return {
    url,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: details,
  };
};

const putRequest = (url: string, details: any, token?: string) => ({
  url,
  method: "PUT",
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

const deleteRequest = (url: string, token: string) => ({
  url,
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const collaboration = createApi({
  reducerPath: "collaboration",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
  }),
  tagTypes: ["Synergi", "H2H", "RFP", "Chat", "Booking", "Available"],
  endpoints: (builder) => ({
    getRFPs: builder.query<GetRFPSResponse, GetRFPSRequest>({
      query: (credentials) => getRequest("/rfps", credentials.token),
      providesTags: ["RFP"],
    }),
    getRFP: builder.query<GetRFPResponse, GetRFPRequest>({
      query: (credentials) =>
        getRequest(`/rfps/${credentials.userId}`, credentials.token),
      providesTags: ["RFP"],
    }),
    getRFPApplication: builder.query<
      GetRFPApplicationResponse,
      GetRFPApplicationRequest
    >({
      query: (credentials) =>
        getRequest(
          // `/rfps/applications/${credentials.id}`
          `/rfps/applications/644a775a493ad8ad06b030de`,
          credentials.token
        ),
      providesTags: ["RFP"],
    }),
    createRFP: builder.mutation<CreateRFPResponse, CreateRFPRequest>({
      query: (credentials) =>
        postRequest("/rfps", credentials.body, credentials.token),
      invalidatesTags: ["RFP"],
    }),
    createRFPApplication: builder.mutation<
      CreateRFPApplicationResponse,
      CreateRFPApplicationRequest
    >({
      query: (credentials) =>
        postRequest(
          `/rfps/${credentials.id}/applications`,
          credentials.body,
          credentials.token
        ),
      invalidatesTags: ["RFP"],
    }),
    getRFPCode: builder.query<GetRFPCodeResponse, GetRFPCodeRequest>({
      query: (credentials) =>
        getRequest("rfps/generate-code", credentials.token),
    }),

    getH2Hs: builder.query<GetH2HSResponse, GetH2HSRequest>({
      query: (credentials) => getRequest("/h2hs/public", credentials.token),
      providesTags: ["H2H"],
    }),
    getH2H: builder.query<GetH2HResponse, GetH2HRequest>({
      query: (credentials) =>
        getRequest(`/h2hs/${credentials.id}`, credentials.token),
    }),

    createH2H: builder.mutation<CreateH2HResponse, CreateH2HRequest>({
      query: (credentials) =>
        postRequest(`/h2hs`, credentials.body, credentials.token),
      invalidatesTags: ["H2H"],
    }),
    createMessage: builder.mutation<CreateChatResponse, CreateChatRequest>({
      query: (credentials) =>
        postRequest("/chat/send-message", credentials.body, credentials.token),
      invalidatesTags: ["Chat"],
    }),
    getMessage: builder.query<GetChatResponse, GetChatRequest>({
      query: (credentials) =>
        getRequest(
          `/chat/messages?senderId=${credentials.senderId}&receiverId=${credentials.receiverId}`,
          credentials.token
        ),
      providesTags: ["Chat"],
    }),
    getConversation: builder.query<GetConvoResponse, GetConvoRequest>({
      query: (credentials) =>
        getRequest("/chat/recent-conversations", credentials.token),
      providesTags: ["Chat"],
    }),

    getSnergis: builder.query<GetSnergisResponse, GetSnergisRequest>({
      query: (credentials) =>
        getRequest("/synergies/public", credentials.token),
      providesTags: ["Synergi"],
    }),
    getSnergi: builder.query<GetSnergiResponse, GetSnergiRequest>({
      query: (credentials) =>
        getRequest(`/synergies/${credentials.id}`, credentials.token),
    }),
    createSnergi: builder.mutation<CreateSnergiResponse, CreateSnergiRequest>({
      query: (credentials) =>
        postRequest(`/synergies`, credentials.body, credentials.token),
      invalidatesTags: ["Synergi"],
    }),
    createBooking: builder.mutation<
      CreateBookingResponse,
      CreateBookingRequest
    >({
      query: (credentials) =>
        postRequest(
          `/synergies/${credentials.id}/bookings`,
          credentials.body,
          credentials.token
        ),
      invalidatesTags: ["Booking"],
    }),
    getBooking: builder.query<GetBookingResponse, GetBookingRequest>({
      query: (credentials) =>
        getRequest(`/synergies/${credentials.id}/bookings`, credentials.token),
      providesTags: ["Booking"],
    }),
    getAvailability: builder.query<
      GetAvailabilityResponse,
      GetAvailabilityRequest
    >({
      query: (credentials) => {
        // console.log({credentials})
        return getRequest(
          `/synergies/${credentials.id}/availabilities?dateSlot=${credentials.time}`,
          credentials.token
        );
      },
      providesTags: ["Available"],
    }),
  }),
});

export const {
  useGetRFPsQuery,
  useGetRFPQuery,
  useGetRFPCodeQuery,
  useGetRFPApplicationQuery,
  useCreateRFPApplicationMutation,
  useCreateRFPMutation,
  useCreateH2HMutation,
  useGetH2HsQuery,
  useGetH2HQuery,
  useGetConversationQuery,
  useGetMessageQuery,
  useCreateMessageMutation,
  useGetSnergisQuery,
  useGetSnergiQuery,
  useCreateSnergiMutation,
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetAvailabilityQuery,
} = collaboration;
