'use client'
import MainNav from "./main-nav";
import { Separator } from "./ui/separator";
import { LinkedInLogoIcon, GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

type ContextMenu = {
    header: string,  
    subHeader: string[],  
    mainText?: string, 
    links?: string[][]
}

export default function ContextMenu({props}: {props: ContextMenu}) {
    return (
        <div className='mx-auto sm:fixed h-full mt-0 w-[217px] flex flex-col justify-between text-right'>
            <div className='flex flex-col gap-[1.25rem] mt-[3rem]'>
                <MainNav/>
                <Separator className='opacity-60'/>
                <div className='opacity-50'>
                    <h5>
                        {props.header}
                    </h5>
                    <div className='p-small uppercase tracking-wide'>
                        {props.subHeader.map((line) => {
                            return (
                                <>
                                    {line}<br />
                                </>
                            )
                        })}
                    </div>
                    <div className='p-small'>
                        {props.mainText}
                    </div>
                </div>
                <Separator className='opacity-60'/>
                <div className='opacity-60'>
                {props.links && (
                    props.links.map((link, index) => {
                        switch(link[0]) {
                            case 'LinkedIn':
                                return (
                                    <div key={index} className='mt-[1.25rem]'>
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
            <div className='p-small text-right opacity-60 mb-5'>
                All content &#169; 2024 Joseph Sotelo <br />
                Site by @joseph-sotelo
            </div>
        </div>
    )
}