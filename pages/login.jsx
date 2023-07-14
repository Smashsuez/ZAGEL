import React from 'react'
import {signIn, useSession} from "next-auth/react"

const login = () => {
    const { data : session, status} = useSession()
  return (
    <div>
        login
    </div>
  )
}

export default login