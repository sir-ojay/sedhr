import { GetUserIdRequest, GetUserIdResponse } from "@/types/profile";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: any, token?: string) => ({
  url,
  method: "POST",
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
const updateRequest = (url: string, details: any, token?: string) => ({
  url,
  method: "PUT",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  body: details,
});
const deleteRequest = (url: string, token: string) => ({
  url,
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const profile = createApi({
  reducerPath: "profile",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
  }),
  tagTypes: ["Profile", "User"],

  endpoints: (builder) => ({
    updateCoverPhoto: builder.mutation({
      query: (credentials) =>
        postRequest(
          "/users/cover-picture",
          credentials.body,
          credentials.token
        ),
      invalidatesTags: ["Profile"],
    }),
    userProfileDetails: builder.query({
      query: (credentials) =>
        getRequest(`/users/${credentials.id}/profile`, credentials.token),
      providesTags: ["Profile"],
    }),
    getUserId: builder.query<GetUserIdResponse, GetUserIdRequest>({
      query: (credentials) =>
        getRequest(`/users/${credentials.userId}`, credentials.token),
      providesTags: ["User"],
    }),
    updateProfilePhoto: builder.mutation({
      query: (credentials) =>
        postRequest(
          "/users/profile-picture",
          credentials.body,
          credentials.token
        ),
      invalidatesTags: ["Profile"],
    }),
    addEducation: builder.mutation({
      query: (credentials) =>
        postRequest("/users/education", credentials.body, credentials.token),
      invalidatesTags: ["Profile"],
    }),
    addExperience: builder.mutation({
      query: (credentials) =>
        postRequest("/users/experience", credentials.body, credentials.token),
      invalidatesTags: ["Profile"],
    }),
    addLicense: builder.mutation({
      query: (credentials) =>
        postRequest("/users/license", credentials.body, credentials.token),
      invalidatesTags: ["Profile"],
    }),
    addAbout: builder.mutation({
      query: (credentials) =>
        postRequest("/users/about", credentials.body, credentials.token),
      invalidatesTags: ["Profile"],
    }),
    addSkills: builder.mutation({
      query: (credentials) =>
        postRequest("/users/skill", credentials.body, credentials.token),
      invalidatesTags: ["Profile"],
    }),
    deleteEducation: builder.mutation({
      query: (credentials) =>
        deleteRequest(`/users/education/${credentials.id}`, credentials.token),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useUpdateCoverPhotoMutation,
  useGetUserIdQuery,
  useUpdateProfilePhotoMutation,
  useAddAboutMutation,
  useAddEducationMutation,
  useAddExperienceMutation,
  useAddLicenseMutation,
  useAddSkillsMutation,
  useDeleteEducationMutation,
  useUserProfileDetailsQuery,
} = profile;
