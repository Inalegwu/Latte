import { inferAsyncReturnType } from "@trpc/server";
import { BrowserWindow } from "electron";
import { store } from "./storage";
import { google } from "googleapis";
import Env from "@env";

export async function createContext() {
  const browserWindow = BrowserWindow.getFocusedWindow();

  const gAuthClient = new google.auth.OAuth2
    (Env.GOOGLE_CLIENT_ID, Env.GOOGLE_CLIENT_SECRET, Env.REDIRECT_URL)


  google.options({
    auth: gAuthClient
  })

  return {
    window: browserWindow,
    store,
    google: gAuthClient
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
