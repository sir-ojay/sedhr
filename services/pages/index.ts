import { GetAllPagesRequest, GetAllPagesResponse, GetAllPostsRequest, GetAllPostsResponse } from "@/types/pages";
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
export const pages = createApi({
  reducerPath: "pages",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
  }),
  tagTypes: ["Pages", "User"],

  endpoints: (builder) => ({
    // updateCoverPhoto: builder.mutation({
    //   query: (credentials) =>
    //     postRequest(
    //       "/users/cover-picture",
    //       credentials.body,
    //       credentials.token
    //     ),
    //   invalidatesTags: ["Pages"],
    // }),
    updateProfilePhoto: builder.mutation({
      query: (credentials) =>
        postRequest(
          "/pages/profile-picture",
          credentials.body,
          credentials.token
        ),
      invalidatesTags: ["Pages"],
    }),
    userPagesDetails: builder.query({
      query: (credentials) =>
        getRequest(`/users/${credentials.id}/Pages`, credentials.token),
      providesTags: ["Pages"],
    }),
    getAllPages: builder.query<GetAllPagesResponse, GetAllPagesRequest>({
      query: (credentials) => getRequest(`pages`, credentials.token),
      providesTags: ["Pages"],
    }),
    getAllPosts: builder.query<GetAllPostsResponse, GetAllPostsRequest>({
      query: (credentials) => getRequest(`pages/post`, credentials.token),
      providesTags: ["Pages"],
    }),
  }),
});

export const { useGetAllPagesQuery,useGetAllPostsQuery } = pages;
