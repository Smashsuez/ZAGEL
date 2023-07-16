import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import dbConnect from "../../../lib/dbConnect"
import clientPromise from "../../../lib/mongodb"


export default NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth",
  },
  adapter: MongoDBAdapter(clientPromise),
  debug: process.env.NODE_ENV === "development",
})

