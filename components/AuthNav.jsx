import React, {useState} from 'react'
import {signIn, signOut, useSession} from "next-auth/react"
const AuthNav = () => {
const { data : session, status} = useSession()
    let [allow, setAllow] = useState(status == "authenticated" ? true : false);
    
   if (session) {return (
    <>
        <p>Hi {session.user.email}</p>
          <button  onClick={() => signOut()} className={`out active`}>Sign Out</button>
        </>
  )}
  else {return (
    <button onClick={() => signIn()} className={`in active`} >Sign In</button>
  )}
}

export default AuthNav