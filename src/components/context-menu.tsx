'use client'
import { useRef, useEffect, useState, useContext } from "react";
import MainNav from "./main-nav";
import { Separator } from "./ui/separator";
import { LinkedInLogoIcon, GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { StaticMenuContext } from "@/app/data/static-menu-context";
import { usePathname } from 'next/navigation';

import data from '@/app/data/context-menu.json';

type ContextMenuProps = {
    header: string,  
    hideTitleAtStart: boolean,
    subHeader: string[],  
    mainText?: string, 
    links?: string[][],
}

type PageKey = '' | 'blog' | 'about' | 'discover-olvera';

export default function ContextMenu() {
    
    let currentPathname = usePathname();
    const currentPage = currentPathname.slice(currentPathname.lastIndexOf('/') + 1, currentPathname.length) as PageKey;
    const contextMenuProps = data[currentPage] as ContextMenuProps;

    let {isOffScreen} = useContext(StaticMenuContext);
    useEffect(()=>{
        console.log('context change in context menu: ' + isOffScreen);
    },[isOffScreen]);

    const headerRef = useRef<HTMLHeadingElement>(null);
    const mainTextRef = useRef<HTMLDivElement>(null);

    const [headerHeight, setHeaderHeight] = useState(0);
    const [mainTextHeight, setMainTextHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.scrollHeight)
        };
        if (mainTextRef.current) {
            setMainTextHeight(mainTextRef.current.scrollHeight)
        };
    }, []);

    const mainInfoHeight = headerHeight + mainTextHeight;
 
    return (
        <div id='static-text-menu' className='sticky top-0 h-screen flex flex-col justify-between text-right'>
            <div className='flex flex-col mt-12'>
                <MainNav/>
                <Separator className='opacity-60 mt-5'/>
                <div className='opacity-50 flex flex-col gap-5 mt-5'>
                    <div className='subheader'>
                        {contextMenuProps.subHeader.map((line) => {
                            return (
                                <>
                                    {line}<br />
                                </>
                            )
                        })}
                    </div>
                    <div id='mainInfo' className='flex flex-col gap-5 transition-all duration-1000 overflow-hidden'
                    style={
                        contextMenuProps.hideTitleAtStart ? {
                            height: isOffScreen ? `${mainInfoHeight + 20}px` : '0px',
                            opacity: isOffScreen ? '1' : '0'
                        } : {
                            marginBottom: '1.25rem',
                        }
                    }>
                        <h5 id='header' ref={headerRef}>
                                {contextMenuProps.header}
                        </h5>
                        {contextMenuProps.mainText && (
                        <div id='mainText' ref={mainTextRef} className='p-small pb-5'>
                                {contextMenuProps.mainText}
                        </div>
                        )}
                    </div>
                </div>
                <Separator className='opacity-60'/>
                <div className='opacity-60 mt-5'>
                {contextMenuProps.links && (
                    contextMenuProps.links.map((link, index) => {
                        switch(link[0]) {
                            case 'LinkedIn':
                                return (
                                    <div key={index}>
                                        <a href={link[1]} target="_blank" className='w-[15px]'>
                                            <LinkedInLogoIcon className='hover:text-accent-foreground hover:opacity-100 transition-colors w-6 h-6 opacity-60' />
                                        </a>
                                    </div>
                                )
                            break;
                            case 'GitHub':
                                return (
                                    <div key={index} className='mt-[1.25rem]'>
                                        <a href={link[1]} target="_blank">
                                            <GitHubLogoIcon className='hover:text-accent-foreground hover:opacity-100 transition-colors w-6 h-6 opacity-60'/>
                                        </a>
                                    </div>
                                )
                            break;
                            default:
                                return (
                                    <div key={index} className='mt-[1.25rem] hover:text-accent-foreground'>
                                        <a href={link[1]} target="_blank">
                                            {link[0]}<ArrowTopRightIcon />
                                        </a>
                                    </div>
                                )
                            }
                        })
                    )}
                </div>
            </div>
            <div className='p-footer text-right opacity-60 mb-5'>
                All content &#169; 2024 Joseph Sotelo <br />
                Site by @joseph-sotelo
            </div>
        </div>
    )
}