import Link from "next/link";
import React from "react";

type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <div className="sticky top-0 w-screen flex flex-row justify-between items-center shadow-md rounded-sm h-14">
      <div className=" mx-4">CRUD</div>
      <div className="flex flex-row justify-evenly mx-4">
        <Link href="/auth/login" className="mr-4">
          Login
        </Link>
        <Link href="/auth/signup">Signup</Link>
      </div>
    </div>
  );
};

export default NavBar;
