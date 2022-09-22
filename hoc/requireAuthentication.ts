import { GetServerSideProps, GetServerSidePropsContext } from "next";

export function requireAuthentication(gssp: GetServerSideProps) {
	return async (ctx: GetServerSidePropsContext) => {
		const { req } = ctx;

		try {
			const token = req.cookies.sedherToken;
			if (!token) {
				return {
					redirect: {
						permanent: false,
						destination: "/auth/signin",
					},
				};
			} else {
				return await gssp(ctx);
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
