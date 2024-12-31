"use client";

import { signIn } from "next-auth/react";
import Button from './Button'; // Adjust the import path based on your folder structure

const SignWithGoogle = () => {
  return (
    <div>
      <Button 
        onClick={() => signIn("google",{redirect:true,callbackUrl:"/products"})} 
        name="Sign in with Google" 
        className="rounded-xl bg-[#01949a] p-[10px] text-white m-[10px]"

/>
    </div>
  );
};

export default SignWithGoogle;
