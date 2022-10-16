import { auth } from "@/services/auth";
import { feed } from "@/services/feed";
import { onboarding } from "@/services/onboarding";
import { upload } from "@/services/upload";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
	return configureStore({
		reducer: {
			[auth.reducerPath]: auth.reducer,
			[onboarding.reducerPath]: onboarding.reducer,
			[upload.reducerPath]: upload.reducer,
			[feed.reducerPath]: feed.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				auth.middleware,
				onboarding.middleware,
				upload.middleware,
				feed.middleware
			),
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
