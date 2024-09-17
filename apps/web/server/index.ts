import { z } from "zod";
import db from "./db";
import { publicProcedure, router } from "./trpc";
const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
  userById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id } }) => {
      const user = await db.user.findById({ id });
      return user;
    }),
  userCreated: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input: { name } }) => {
      const user = await db.user.create({ name });
      return user;
    }),
});

export type AppRouter = typeof appRouter;
