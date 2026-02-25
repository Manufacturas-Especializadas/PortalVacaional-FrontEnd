import type { ReactNode } from "react";
import Image from "../assets/img/1767085643106.jpg";

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-white px-12">
        {children}
      </div>

      <div className="w-1/2 hidden md:block relative overflow-hidden">
        <img
          src={Image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-linear-to-br from-blue-600/40 via-indigo-500/30 to-purple-600/40" />
      </div>
    </div>
  );
};
