'use client'

import { useRef, useEffect, useState, useContext } from "react";
import MainNav from "./main-nav";
import { Separator } from "./ui/separator";
import { LinkedInLogoIcon, GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { StaticMenuContext } from "@/app/data/static-menu-context";
import { InfoMenuType } from "./component-types";

export default function InfoMenu({props}: {props: InfoMenuType}) {

    // get context-stored boolean to control expansion of the static menu
    let {isOffScreen} = useContext(StaticMenuContext);

    // calculate what height the static menu should expand to
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
        console.log("mainInfoHeight: " + mainTextHeight + headerHeight)
    }, []);

    const mainInfoHeight = headerHeight + mainTextHeight;
 
    return (
        <div id='info-menu' className='h-screen flex flex-col justify-between text-right'>
            <div className='flex flex-col mt-12'>
                <MainNav/>
                <Separator className='opacity-60 mt-5'/>
                <div className='opacity-50 flex flex-col gap-5 mt-5'>
                    <div className='subheader'>
                        {props.subHeader.map((line) => {
                            return (
                                <>
                                    {line}<br />
                                </>
                            )
                        })}
                    </div>
                    <div id='mainInfo' className='flex flex-col gap-5 transition-all duration-1000 overflow-hidden'
                    style={
                        props.hideTitleAtStart ? {
                            height: isOffScreen ? `${mainInfoHeight + 20}px` : '0px',
                            opacity: isOffScreen ? '1' : '0'
                        } : {
                            marginBottom: '1.25rem',
                        }
                    }>
                        <h5 id='header' ref={headerRef}>
                                {props.header}
                        </h5>
                        {props.mainText && (
                        <div id='mainText' ref={mainTextRef} className='p-small pb-5'>
                                {props.mainText}
                        </div>
                        )}
                    </div>
                </div>
                <Separator className='opacity-60'/>
                <div className='opacity-60 mt-5'>
                {props.links && (
                    props.links.map((link, index) => {
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
                Site by @joseph-sotelo <br />
                Built with React
            </div>
        </div>
    )
}