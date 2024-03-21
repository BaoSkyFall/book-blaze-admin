import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('access_token')?.value;
  const pathName = request.nextUrl.pathname;

  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  if (
    !currentUser &&
    authMiddleWare.privateRoutes.includes(pathName) &&
    pathName !== authMiddleWare.signInUrl
  ) {
    return NextResponse.redirect(
      new URL(authMiddleWare.signInUrl, request.url),
    );
  }

  if (currentUser && pathName === authMiddleWare.signInUrl) {
    return NextResponse.redirect(
      new URL(authMiddleWare.afterSignInUrl, request.url),
    );
  }
}

const authMiddleWare = {
  privateRoutes: [] as string[],
  signInUrl: '/auth/login',
  afterSignInUrl: '/dashboard',
};
