import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";
import dbConnection from "../../../../utils/dbConnection";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// providers: [
//   CredentialsProvider({
//     // The name to display on the sign in form (e.g. 'Sign in with...')
//     name: "Credentials",

//     credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" },
//     },
//     async authorize(credentials, req) {
//       console.log(credentials, req);
//     },
//   }),
// ];

export const authoptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await dbConnection();
        console.log("PROVIDER ", req);
        console.log("SECOND PROVIDE", credentials);
        // console.log(credentials, req);
        console.log("userrr", req.body.email);
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
          throw new Error("user not found");
        }

        let pass = bcrypt.compareSync(req.body.password, user.password);
        if (!pass) {
          throw new Error("wrong credentials");
        }

        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      console.log("Social auth", profile);
      if (account.provider === "google" || account.provider == "github") {
        const user = await User.findOne({ email: profile.email });

        if (!user) {
          await User.create({
            email: profile.email,
            username: profile.name,
            password: bcrypt.hashSync("password"),
          });
          return user;
        }

        return user;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user._id;
      }
      console.log("token is ", token);
      return token;
    },
  },

  async session({ session, token }) {
    if (session) {
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.id = token._id;
    }
    console.log("session is ", session);
    return session;
  },
};
const handler = NextAuth(authoptions);
export { handler as POST, handler as GET };
