'use client'

import { useState, useEffect, createContext, SetStateAction, Dispatch } from 'react';

interface StaticMenuContextType { 
  isOffScreen: boolean,
  setIsOffScreen: Dispatch<SetStateAction<boolean>> 
}

export const StaticMenuContext = createContext<StaticMenuContextType>({isOffScreen: false, setIsOffScreen: ()=>{}});
