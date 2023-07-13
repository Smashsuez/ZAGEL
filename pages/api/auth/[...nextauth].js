import NextAuth from 'next-auth/next' 
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: 621303710664-stn96klii9u57lkbdol3g5pj15m1p1tn.apps.googleusercontent.com,
            clientSecret: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,
        })
    ]})