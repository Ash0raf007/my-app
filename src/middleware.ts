import { getToken } from 'next-auth/jwt'
import withAuth from 'next-auth/middleware'
import { NextResponse , NextRequest} from 'next/server'
 
export default withAuth(
  async function middleware(request: NextRequest) {
    const pathname=request.nextUrl.pathname
    const isAuth=await getToken({req:request})
    const protectedRoutes=['/products/']
    const isAuthRoute=pathname.startsWith("/auth/login")
    const isProtectedRoutes=protectedRoutes.some((route)=>
    pathname.startsWith(route)
  )

  // if user not sign in and try to acces protect route
if(!isAuth && isProtectedRoutes){
  return NextResponse.redirect(new URL('/auth/login', request.url))
}

// if user already sign in
if(isAuthRoute && isAuth){
  return NextResponse.redirect(new URL('/products/', request.url))
}
  }
  
  ,{
    callbacks: {
      async authorized(){
        return true
      }
  }
}
)
// See "Matching Paths" below
export const config = {
  matcher: [
    "/products/:path*","/auth/:path*"
  ],
}
// any route inside profile protected