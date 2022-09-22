import { GetServerSideProps, GetServerSidePropsContext } from "next";

export function requireAuthentication(gssp: GetServerSideProps) {
	return async (ctx: GetServerSidePropsContext) => {
		const { req } = ctx;

		try {
			const token = req.cookies.kadavraToken;
			if (!token) {
				return {
					redirect: {
						permanent: false,
						destination: "/auth/login",
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
					destination: "/auth/login",
				},
			};
		}
	};
}
