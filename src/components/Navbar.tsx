"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { signIn , useSession ,signOut } from 'next-auth/react'
// Para usar useSession todo debe estar dentro de un Session Provider esta creado
// en layout.tsx - que luego esta en Provider.tsx
function Navbar() {
  // const router = useRouter();
  // nos da informacion - de la sesion actual - en la documentacion nos da la orden de llamarlo session 
  const {data: session } = useSession();
  console.log(session) //veremos la info del usuario registrado
  return (


    <nav className='bg-slate-900 flex justify-between px-24 text-white items-center py-3' >
      <Link href="/">
      
      </Link>
        <h1>
             Next Google
        </h1>
        {session?.user ? (
                <div className='flex gap-x-2 items-center'> 
                <Link href="/dashboard">
                  Dasboard 
                </Link>
                <p>{session.user.name} {session.user.email}</p>
                <img src={session.user.image} 
                className='w-10 h-10 rounded-full cursor-pointer' />
                <button onClick={async() => {
                  await signOut({   //iene opciones 
                    callbackUrl: "/"
                  })
                  // Despues de que se cierre la session - lo redirige al principio
                  
                }}>
              Logout
            </button>
            </div>

        ):(
            // para que me enviae a iniciar sesion de google - /api/auth/[...nextauth]
            <button onClick={() => signIn()} className='bg-sky-400 px-3 py-2 rounded '>
            Sign In
          </button>
        )}
    </nav>
  )
}

export default Navbar