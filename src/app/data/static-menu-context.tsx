'use client'
import { createContext, Dispatch, SetStateAction } from "react";

interface StaticMenuContextType { 
    isOffScreen: boolean,
    setIsOffScreen: Dispatch<SetStateAction<boolean>> 
}

export const StaticMenuContext = createContext<StaticMenuContextType>({isOffScreen: false, setIsOffScreen: ()=>{}});