import MainNav from "./main-nav";

type ContextMenu = {
    header: string,  
    subHeader: string,  
    mainText: string, 
    links?: string[]
}

export default function ContextMenu({props}: {props: ContextMenu}) {
    return (
        <div className='fixed h-[97.5vh] mt-0 w-[15vw] flex flex-col justify-between'>
        <div className='flex flex-col gap-[3rem] mt-[3rem]'>
            <MainNav/>
            <div>
                <h5 className='text-right'>
                    {props.header}
                </h5>
                <p className='text-right mt-[1rem]'>
                    {props.subHeader}
                </p>
                <p className='text-right mt-[1rem]'>
                    {props.mainText}
                </p>
            </div>
        </div>
        <small className='text-right'>
            All content &#169; 2024 Joseph Sotelo <br />
            Site by @joseph-sotelo
        </small>
    </div>
    )
}