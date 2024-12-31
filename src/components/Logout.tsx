"use client";

import React from 'react';
import Button from './Button'; // Ensure the import path is correct
import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <div>
      <Button 
        name="Logout" 
        className="rounded-xl bg-[#FF0000] p-[10px] text-white m-[10px]"   
    onClick={() => signOut()} 
      />
    </div>
  );
};

export default Logout;
