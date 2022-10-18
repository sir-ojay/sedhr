export type PostRequest = {
	token: string;
	body: {
		content?: string;
		postType?: string;
		contentType?: string;
		attachment?: {
			url: string;
			contentType: string;
		}[];
	};
};

export type PostResponse = {};

export type CommentRequest = {
	token: string;
	id: string;
	body: {
		content?: string;
	};
};

export type CommentResponse = {};

export type LikeAPostRequest = {
	token: string;
	id: string;
};

export type LikeAPostResponse = {};

export type Post = {
	id: string;
	author: {
		id: string;
		name: string;
		username: string;
		accountType: string;
		profilePicture: string;
		company: string;
	};
	content: string;
	attachments: [
		{
			url: string;
			contentType: string;
		}
	];
	postType: string;
	postLink: string;
	contentType: string;
	createdAt: string;
	updatedAt: string;
	likes: number;
	liked: boolean;
	commentsCount: number;
};

export type Comment = {
	_id: string;
	authorId: {
		_id: string;
		username: string;
		name: string;
		profilePicture: string;
	};
	content: string;
	isEdited: boolean;
	createdAt: string;
};

export type GetTimelineRequest = {
	token: string;
};

export type GetTimelineResponse = {
	success: boolean;
	message: string;
	data: {
		previous: string;
		hasPrevious: boolean;
		next: string;
		hasNext: boolean;
		posts: Post[];
	};
};

export type GetCommentsRequest = {
	token: string;
	id: string;
};

export type GetCommentsResponse = {
	success: boolean;
	message: string;
	data: {
		comments: Comment[];
	};
};
