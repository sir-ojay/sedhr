import {
	CommentRequest,
	CommentResponse,
	GetCommentsRequest,
	GetCommentsResponse,
	GetTimelineRequest,
	GetTimelineResponse,
	LikeAPostRequest,
	LikeAPostResponse,
	PostRequest,
	PostResponse,
} from "@/types/feed";
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

const deleteRequest = (url: string, token: string) => ({
	url,
	method: "DELETE",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const feed = createApi({
	reducerPath: "feed",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL + "api",
	}),
	tagTypes: ["Post", "Comments"],
	endpoints: (builder) => ({
		post: builder.mutation<PostResponse, PostRequest>({
			query: (credentials) =>
				postRequest("/posts", credentials.body, credentials.token),
			invalidatesTags: ["Post"],
		}),
		comment: builder.mutation<CommentResponse, CommentRequest>({
			query: (credentials) =>
				postRequest(
					`/posts/${credentials.id}/comments`,
					credentials.body,
					credentials.token
				),
			invalidatesTags: ["Comments"],
		}),
		likeAPost: builder.mutation<LikeAPostResponse, LikeAPostRequest>({
			query: (credentials) =>
				postRequest(`posts/${credentials.id}/likes`, "", credentials.token),
		}),
		unLikeAPost: builder.mutation<LikeAPostResponse, LikeAPostRequest>({
			query: (credentials) =>
				deleteRequest(`posts/${credentials.id}/likes`, credentials.token),
		}),
		getTimeline: builder.query<GetTimelineResponse, GetTimelineRequest>({
			query: (credentials) => getRequest("posts/timelines", credentials.token),
			providesTags: ["Post"],
		}),
		getComments: builder.query<GetCommentsResponse, GetCommentsRequest>({
			query: (credentials) =>
				getRequest(`/posts/${credentials.id}/comments`, credentials.token),
			providesTags: ["Comments"],
		}),
	}),
});

export const {
	usePostMutation,
	useGetTimelineQuery,
	useLikeAPostMutation,
	useUnLikeAPostMutation,
	useCommentMutation,
	useLazyGetCommentsQuery,
} = feed;
