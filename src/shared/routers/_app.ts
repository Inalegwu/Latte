import { publicProcedure, router } from "@src/trpc";
import pkg from "../../../package.json";
import oauthRouter from "./oauth";

export const appRouter = router({
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
  oauth: oauthRouter
});

export type AppRouter = typeof appRouter;
