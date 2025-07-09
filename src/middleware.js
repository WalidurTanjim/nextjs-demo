import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const userData = {
        username: "MD Walid",
        email: "walid@gmail.com",
        role: "user",
        badge: "bronze"
    };

    // get cookie
    const tokenSecret = request.cookies.token_secret;

    const isAdmin = userData?.role === "admin";
    const pathname = request.nextUrl.pathname.includes('/servercomp');
    // console.log("Middleware request:", request.nextUrl.pathname.includes('/servercomp'));

    if(pathname && !isAdmin){
        return NextResponse.rewrite(new URL('/sign-in', request.url))
    }
    return NextResponse.next();
}