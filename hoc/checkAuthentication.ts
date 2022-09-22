import { GetServerSideProps, GetServerSidePropsContext } from "next";

export function checkAuthentication(gssp: GetServerSideProps) {
	return async (ctx: GetServerSidePropsContext) => {
		const { req } = ctx;

		const initialRoute = req.headers.referer;

		try {
			const token = req.cookies.kadavraToken;

			if (token) {
				return {
					redirect: {
						destination: initialRoute || "/",
						permanent: false,
					},
				};
			} else {
				return gssp(ctx);
			}
		} catch (error) {
			console.log("error", error);
			return {
				redirect: {
					permanent: false,
					destination: "/auth/login",
				},
			};
		}
	};
}
