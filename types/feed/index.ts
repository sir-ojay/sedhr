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

export type PostResponse = {
	message: string;
};

export type CommentRequest = {
	token: string;
	id: string;
	body: {
		content?: string;
	};
};

export type CommentResponse = {
	message: string;
};

export type LikeAPostRequest = {
	token: string;
	id: string;
};

export type LikeAPostResponse = {
	message: string;
};

export type Post = {
	id: string;
	author: {
		_id: string;
		name: string;
		username: string;
		accountType: string;
		profilePicture: string;
		company: string;
	};
	content: string;
	attachments: 
		{
			url: string;
			contentType: string;
		}[];
	postType: string;
	postLink: string;
	contentType: string;
	createdAt: string;
	updatedAt: string;
	url:string;
	likes: number;
	liked: boolean;
	commentsCount: number;
};

export type Comment = {
	comment: {
		content: string;
		createdAt: string;
		isEdited: boolean;
		id: string;
	};
	name: string;
	profilePicture: string;
	username: string;
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
export type GetAPostRequest = {
	token: string;
	id: string;
};

export type GetAPostResponse = {
	message: string;
	data: Post;
};

export type DeleteAPostRequest = {
	token: string;
	id: string;
};

export type DeleteAPostResponse = {
	message: string;
	
};
