import { auth } from "@/services/auth";
import { feed } from "@/services/feed";
import { onboarding } from "@/services/onboarding";
import { upload } from "@/services/upload";
import { connections } from "@/services/connections";
import { events } from "@/services/events";
import { notifications } from "@/services/notifications";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { profile } from "@/services/profile";
import { collaboration } from "@/services/collaborations";
import { settings } from "@/services/settings";
import { pages } from "@/services/pages";

export function makeStore() {
	return configureStore({
		reducer: {
			[auth.reducerPath]: auth.reducer,
			[settings.reducerPath]: settings.reducer,
			[onboarding.reducerPath]: onboarding.reducer,
			[notifications.reducerPath]: notifications.reducer,
			[upload.reducerPath]: upload.reducer,
			[feed.reducerPath]: feed.reducer,
			[profile.reducerPath]: profile.reducer,
			[events.reducerPath]: events.reducer,
			[connections.reducerPath]: connections.reducer,
			[collaboration.reducerPath]: collaboration.reducer,
			[pages.reducerPath]: pages.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				auth.middleware,
				settings.middleware,
				onboarding.middleware,
				upload.middleware,
				feed.middleware,
				notifications.middleware,
				profile.middleware,
				events.middleware,
				connections.middleware,
				collaboration.middleware,
				pages.middleware,
			),
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
