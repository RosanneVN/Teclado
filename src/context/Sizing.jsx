import { createContext, useState } from "react";

export const SizingContext = createContext()

// eslint-disable-next-line react/prop-types
export function SizingProvider({children}) {
    const [size, setSize] = useState(12)
    return(  
        <SizingContext.Provider value={{
            size, 
            setSize
        }} >
            {children}
        </SizingContext.Provider>
    ) 
}