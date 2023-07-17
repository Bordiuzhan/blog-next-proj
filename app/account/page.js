'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Account() {
  const { data: session, status } = useSession();

  return (
    <div className="wrapper-user">
      <h1 className="user-name"> {session?.user?.name} </h1>
      <h3 className="user-email"> {session?.user?.email} </h3>
      <div className="image-container">
  {session?.user?.image ? (
    <img className="user-image" src={session.user.image} alt="user image" />
  ) : (
    <Image className="placeholder-image" src="/img/male-g6a052d095_640.png" width={200} height={200} alt="user image placeholder" />
  )}
</div>
    </div>
  );
}
