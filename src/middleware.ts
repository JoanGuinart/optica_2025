import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Verificar si estamos en modo construcción
  const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true' || 
                           (process.env.NODE_ENV === 'production' && 
                            process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION !== 'false');

  // Lista de rutas protegidas (todas excepto la home)
  const protectedRoutes = [
    '/about',
    '/brands', 
    '/contact',
    '/faq',
    '/products',
    '/services'
  ];

  // Si estamos en construcción y intentan acceder a una ruta protegida
  if (underConstruction && protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    // Redirigir a la página principal
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Configurar en qué rutas aplicar el middleware
export const config = {
  matcher: [
    '/about/:path*',
    '/brands/:path*', 
    '/contact/:path*',
    '/faq/:path*',
    '/products/:path*',
    '/services/:path*'
  ]
}