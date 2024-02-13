'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { UserIcon } from '@heroicons/react/24/outline';

export default function UserName() {
  const [user, setUser] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      if (session.user?.name) {
        setUser(session.user.name)
      }
    }
    else {
      setUser("Not authenticated");
    }
  }, [session, status]);

  if (session) {
    return (
      <>
        <UserIcon className="w-6" />
        {user}
      </>
    )
  }
  else {
    return (
      <>
        Not signed in <br />
      </>
    )
  }

}