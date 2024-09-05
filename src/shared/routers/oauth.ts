import Env from "@env";
import { publicProcedure, router } from "@src/trpc";
import { TRPCError } from "@trpc/server";
import { BrowserWindow } from "electron";

const oauthRouter = router({
	attemptGoogleOAuth: publicProcedure.mutation(async ({ ctx }) => {
		const authWindow = new BrowserWindow({
			webPreferences: {
				nodeIntegration: false,
			}
		});

		const authUrl = ctx.google.generateAuthUrl({
			access_type: "offline",
			scope: ["https://googleapis.com/auth/gmail"]
		})

		authWindow.loadURL(authUrl);

		const { session: { webRequest } } = authWindow.webContents

		webRequest.onBeforeRequest({
			urls: [Env.REDIRECT_URL]
		}, async ({ url }) => {
			const parsedUrl = new URL(url);

			authWindow.close();

			const code = parsedUrl.searchParams.get("code");

			if (!code) {
				throw new TRPCError({
					message: "Auth Code is null",
					code: "INTERNAL_SERVER_ERROR",
					cause: "unknowwn"
				})
			}

			const { tokens } = await ctx.google.getToken(code);

			ctx.google.setCredentials(tokens);
		})
	}),
	attemptOutlookOAuth: publicProcedure.mutation(async ({ ctx }) => {})
})


export default oauthRouter