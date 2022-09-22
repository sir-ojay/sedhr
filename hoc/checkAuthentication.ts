import { GetServerSideProps, GetServerSidePropsContext } from "next";

export function checkAuthentication(gssp: GetServerSideProps) {
	return async (ctx: GetServerSidePropsContext) => {
		const { req } = ctx;

		const initialRoute = req.headers.referer;
		console.log("initialRoute", initialRoute);

		try {
			const token = req.cookies.sedherToken;

			if (token) {
				return {
					redirect: {
						destination: initialRoute || "/feed",
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
					destination: "/auth/signin",
				},
			};
		}
	};
}
