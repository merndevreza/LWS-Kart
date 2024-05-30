"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button className="bg-primary border border-primary text-white py-1 px-3 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
    >
      Sign out
    </button>
  );
};

export default Logout;
