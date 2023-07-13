"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";

export default  function Account() {
const {data:session,status} =  useSession()




  return (
    <div>
      <h1> {session?.user?.fullname} </h1>
      <h3> {session?.user?.email} </h3>
      {session?.user?.image && <Image src={session.user.image} alt="user image"></Image>}
    </div>
  );
}
