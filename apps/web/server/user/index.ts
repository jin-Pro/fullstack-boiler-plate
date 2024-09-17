import { z } from "zod";
import db from "../db";
import { publicProcedure } from "../trpc";

const UserRouter = {
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
    .mutation(async ({ input: { name } }) => {
      const user = await db.user.create({ name });
      return user;
    }),
};

export default UserRouter;
