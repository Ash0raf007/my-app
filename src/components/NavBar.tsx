"use server"
import Image from "next/image"
import Logout from "./Logout"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/nextAuth"
import SignWithGoogle from "./SignWithGoogle"

const NavBar = async() => {

const session=await getServerSession(authOptions)
  console.log(session) 
   return (
    <div className="flex justify-between">
  <div className="flex items-center px-[10px] font-semibold">E-commerce</div>

<div>
      {
      session ? 
      
      (
        <div className="flex justify-end">

          <div className="flex items-center justify-center">
          <span className="px-[10px]">  Hello <span className="bg-orange-300 p-2 rounded-xl">{session?.user?.name} </span></span>
          <Image src={session.user?.image as string}
          alt='userimg'
          width={50}
          height={50}
          className="rounded-full"
          />
          </div>
          <Logout/>


    
          </div>
    
      ):
      <div className="flex justify-end">
              <SignWithGoogle/>
      </div>
    }
    </div>

    </div>
  )
}

export default NavBar