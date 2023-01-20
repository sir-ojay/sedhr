export type GetSettingsRequest = {
	token: string;
};

export type GetSettingsResponse = {
	data: any;
};

export type UpdateSettingsRequest = {
	token: string;
	body: Settings;
};

export type UpdateSettingsResponse = {
	data: any;
};

export type HibernateAccountRequest = {
	token: string;
	reason: string;
};

export type HibernateAccountResponse = {
	data: any;
};

export type CloseAccountRequest = {
	token: string;
	reason: string;
};

export type CloseAccountResponse = {
	data: any;
};

export type Settings = {
	accountPreferences?: {
		language?: "English";
		autoplayVideos?: boolean;
		showProfilePhotos?: string;
		feeds?: string;
		peopleViewed?: boolean;
		hibernateReason?: string;
		accountCloseReason?: string;
	};
	visibility?: {
		allowConnectionsVisibility?: boolean;
		allowCollaborationVisibility?: boolean;
		whoCanSeeMyFollowers?: string;
		allowMentionsAndTagging?: string;
		whoCanFollowMe?: string;
	};
	communication?: {
		notifications?: {
			inApp?: boolean;
			email?: boolean;
		};
		connects?: {
			invitations?: string;
			allowPageInvites?: boolean;
			allowEventInvites?: boolean;
			allowMessageRequests?: boolean;
			allowInMail?: boolean;
		};
		messaging?: {
			detectHarmfulContent?: boolean;
		};
	};
	dataPrivacy?: {
		allowDataForResearch?: boolean;
	};
	advertising?: {
		useProfile?: boolean;
		useLocationData?: boolean;
		useMarketplaceData?: boolean;
	};
	notifications?: {
		collaborations?: {
			inApp?: boolean;
			pushNotification?: boolean;
			email?: boolean;
		};
		applications?: {
			inApp?: boolean;
			pushNotification?: boolean;
			email?: boolean;
		};
		searchAppearance?: {
			inApp?: boolean;
			pushNotification?: boolean;
			email?: boolean;
		};
		messaging?: {
			inApp?: boolean;
			pushNotification?: boolean;
			email?: boolean;
		};
	};
	_id?: string;
	userId?: string;
};
