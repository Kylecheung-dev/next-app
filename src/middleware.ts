import { NextResponse } from 'next/server';

export function middleware() {
//   // 獲取當前路徑
//   const path = request.nextUrl.pathname;
  
  // 只為特定頁面設置 header
//   if (path.startsWith('/blog/')) {
    const response = NextResponse.next();
    console.log("middleware running")
    
    // // 設置 Cache-Control header
    response.headers.set(
      'Cache-Control',
      'max-age=3600'
    );
    
    return response;
//   }
  
//   return NextResponse.next();
}

// 配置 middleware 應用的路徑
export const config = {
  matcher: ['/public/:path*']
};