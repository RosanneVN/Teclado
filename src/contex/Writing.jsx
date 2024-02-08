/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
//Singleton-modulo JS
//1. Crear el Context
//Este es el q tenemos q consumir
export const WritenContext = createContext()

//2. Crear el Provider, para proveer el Context a los componentes
//El q nos provee de acceso a los datos
export function WritenProvider({children}) {
    const [writen, setWriten] = useState('')
    return(  //lo que quieres proveer
        <WritenContext.Provider value={{
            writen, 
            setWriten
        }} >
            {children}
        </WritenContext.Provider>
    ) //donde lo quieres proveer
}