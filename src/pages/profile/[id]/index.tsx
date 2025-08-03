import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ProfileDetails() {

  const router = useRouter()
  const codigo = router.query.id
  
  return (
    <div>ProfileDetails | {codigo}</div>
  )
}

export default ProfileDetails