import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server";

const api = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});
export default api;
