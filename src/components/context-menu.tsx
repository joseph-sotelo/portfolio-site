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
        <div className='flex flex-col gap-[3rem] mt-[3rem]'>
            <MainNav/>
            <Separator />
            <div>
                <h5>
                    {props.header}
                </h5>
                <p className='mt-[1rem]'>
                    {props.subHeader}
                </p>
                <p className='mt-[1rem]'>
                    {props.mainText}
                </p>
            </div>
            <Separator />
        </div>
        {props.links && (
                    props.links.map((link, index) => 
                        <div key={index} className='mt-[1rem]'>
                            <a href={link[1]} target="_blank">{link[0]}</a>
                        </div>
                    )
                )}
        <small className='text-right'>
            All content &#169; 2024 Joseph Sotelo <br />
            Site by @joseph-sotelo
        </small>
    </div>
    )
}