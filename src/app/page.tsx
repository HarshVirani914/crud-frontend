"use client";
import { useUser } from "@/modules/user/hooks/useUser";
import Login from "./auth/login/page";

export default function Home() {
  const { user, isError, isFetched } = useUser();

  if (isError) {
    return <div>Error</div>;
  }

  if (!isFetched) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
