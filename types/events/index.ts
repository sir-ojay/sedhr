export type GetReceivedEventsRequest = {
	username: string;
	token: string;
};

export type GetReceivedEventsResponse = {
	data: any;
};

export type GetMyEventsRequest = {
	token: string;
};

export type GetMyEventsResponse = {
	data: any;
};

export type CreateEventRequest = {
	token: string;
	body: {
		eventName: string;
		about: string;
		eventLocation?: string;
		startDate: string;
		startTime: string;
		endDate?: string;
		endTime?: string;
		externalLink?: string;
		coverImage: string;
		speakers?: string[];
		timezone?: string;
		attendees?: string[];
	};
};

export type CreateEventResponse = {
	data: any;
};
