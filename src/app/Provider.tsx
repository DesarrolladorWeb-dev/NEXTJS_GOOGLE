"use client" //aqui uso el useClient
import { SessionProvider } from "next-auth/react";
// Entonces cualquier componente que yo pase estara dentro de un session provider
function Provider({children} : {children : React.ReactNode}) { //el children que espero es un ReactNode
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider