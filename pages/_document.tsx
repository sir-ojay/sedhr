import Document, {
	DocumentContext,
	Html,
	Main,
	Head,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta name='Sedher' content='Sedher' />
					<meta property='og:url' content='https://sedher.com/' />
					<meta property='og:site_name' content='sedher' />
					<meta property='og:title' content='Sedher' />
					<meta
						property='og:description'
						content='Sign in on Sedher to connect with medical professionals around you.'
					/>
					<meta property='og:type' content='website' />
					<meta
						property='og:image'
						content='https://sedher.vercel.app/assets/icons/logo.png'
					/>
					<meta property='og:locale' content='en_US' />
					<meta name='twitter:card' content='summary' />
					<meta name='twitter:site' content='@sedher' />
					<meta name='twitter:title' content='Sedher' />
					<meta
						name='twitter:description'
						content='Sign in on Sedher to connect with medical professionals around you.'
					/>
					<meta
						name='twitter:image'
						content='https://sedher.vercel.app/assets/icons/logo.png'
					/>
					<meta name='twitter:image:alt' content='Sedher' />
					<meta name='twitter:creator' content='@sedher'></meta>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
