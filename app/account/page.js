"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";

export default  function Account() {
const {data:session,status} =  useSession()



  return (
    <div className="wrapper-user">
      <h1 className="user-name"> {session?.user?.name} </h1>
      <h3 className="user-email"> {session?.user?.email} </h3>
      {session?.user?.image && <img className="img" src={session.user.image} alt="user image"></img>}
    </div>
  );
}
