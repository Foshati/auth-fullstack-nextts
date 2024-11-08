import { AuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
    }),
  ],
};
