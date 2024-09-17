import { router } from "./trpc";
import UserRouter from "./user";

const appRouter = router({
  ...UserRouter,
});

export type AppRouter = typeof appRouter;
