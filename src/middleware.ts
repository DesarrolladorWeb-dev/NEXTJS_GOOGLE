// Antes de que llegue a alguna ruta pasara por aqui
// si esta autenticcado lo redirecciono al login y si no lo esta lo envia afuera del dashboard

export { default } from "next-auth/middleware"

// significa vamos a proteger las siguientes rutas "/dashboard", "/otras rutas"
export const config = { matcher: ["/dashboard"] }

// y recordar que usa el env.local  - para no ingresar a dashboard
// NEXTAUTH_URL=http://localhost:3000
// NEXTAUTH_SECRET=dd012a901e001aca4da83d9562e96364 - llave openssl