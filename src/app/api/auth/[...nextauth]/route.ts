import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


// nos dara un objeto de configuracion llamado handler
const handler = NextAuth({
    // Con que servicio de internet yo quiero autenticarme - yo quiero de google
    providers:[
        GoogleProvider({
            //Identificador para saber como conectarnos - y el string es para confirmar que si o si sera un string
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
})

// Esportare el handler que podre recibir  peticion get y post
// lo exportamos el handler como una peticion get y pos
export{handler as GET, handler as POST};