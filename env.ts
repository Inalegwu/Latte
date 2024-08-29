import { cleanEnv, str, url } from "envalid";

const Env = cleanEnv(process.env, {
	GOOGLE_CLIENT_ID: str({ desc: "Google OAuth Client ID" }),
	GOOGLE_CLIENT_SECRET: str({ desc: "Google OAuth Client Secret" }),
	REDIRECT_URL: url({ desc: "Redirect destination for oauth clients" })
});


export default Env