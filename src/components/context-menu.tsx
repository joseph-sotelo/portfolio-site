'use client'
import MainNav from "./main-nav";
import { Separator } from "./ui/separator";

type ContextMenu = {
    header: string,  
    subHeader: string,  
    mainText?: string, 
    links?: string[][]
}

export default function ContextMenu({props}: {props: ContextMenu}) {
    return (
        <div className='fixed h-[97.5vh] mt-0 w-[15vw] flex flex-col justify-between text-right'>
            <div className='flex flex-col gap-[1.25rem] mt-[3.36rem]'>
                <MainNav/>
                <Separator />
                <div className='opacity-60'>
                    <h5>
                        {props.header}
                    </h5>
                    <div className='p-small uppercase tracking-wide'>
                        {props.subHeader}
                    </div>
                    <div className='p-small'>
                        {props.mainText}
                    </div>
                    {props.links && (
                    props.links.map((link, index) => 
                        <div key={index} className='mt-[1.25rem]'>
                            <a href={link[1]} target="_blank">{link[0]}</a>
                        </div>
                    )
                )}
                </div>
                <Separator />
            </div>
            <div className='p-small text-right opacity-60'>
                All content &#169; 2024 Joseph Sotelo <br />
                Site by @joseph-sotelo
            </div>
        </div>
    )
}