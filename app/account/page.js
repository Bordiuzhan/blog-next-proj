'use client';

import { useSession } from 'next-auth/react';

export default function Account() {
  const { data: session, status } = useSession();

  return (
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <h1 className="user-name"> {session?.user?.name} </h1>
        <h3 className="user-email"> {session?.user?.email} </h3>
        <div className="image-container">
          {session?.user?.image ? (
            <img
              className="user-image"
              src={session.user.image}
              alt="user image"
            />
          ) : (
            <img
              className="placeholder-image"
              src="https://i.pravatar.cc/200"
              alt="user image placeholder"
            />
          )}
        </div>
      </div>
    </div>
  );
}
