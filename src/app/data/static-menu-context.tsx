'use client'
import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react";

interface StaticMenuContextType { 
    isOffScreen: boolean,
    setIsOffScreen: Dispatch<SetStateAction<boolean>> 
}

export const StaticMenuContext = createContext<StaticMenuContextType>({isOffScreen: false, setIsOffScreen: ()=>{}});