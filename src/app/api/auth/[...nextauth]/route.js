import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.Google_Client_Id,
      clientSecret: process.env.Google_Client_Secret,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user || !user.password) {
          throw new Error("User Not Found!");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        console.log(isCorrectPassword);

        if (!isCorrectPassword) {
          throw new Error("Authentication Failed");
        }

        return user;
      },
    }),
  ],
  pages: { error: "/dashboard/login" },
});

export { handler as GET, handler as POST };
