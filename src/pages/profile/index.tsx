import Link from 'next/link'
import React from 'react'
import {useSession} from "next-auth/react"

function Profile() {

  const {data: session, status} = useSession()
     
  return (
    <Link href={"/profile/"+session?.user?.email}>
      Got to {session?.user?.name} details
    </Link>
  )
}

export default Profile