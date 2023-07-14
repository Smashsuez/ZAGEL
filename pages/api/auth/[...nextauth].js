import NextAuth from 'next-auth/next' 
import GoogleProvider from "next-auth/providers/google"
import {signIn, useSession} from "next-auth/react"
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
})