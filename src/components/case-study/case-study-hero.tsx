import Image from 'next/image';

export default function CaseStudyHero({title, tagline, occasion, image}: {title: string, tagline: string, occasion: string, image: string}){
    return(
        <div id='hero' className='flex justify-between w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <div id='left' className='w-[28vw] mt-auto mb-auto'>
                <h1 className='mb-[1rem]'>
                    {title}
                </h1>
                <h6 className='mb-[1rem]'>
                    {occasion}
                </h6>
                <h5 className='mb-[1rem]'>
                    {tagline}
                </h5>    
            </div>
            <div id='right' className='w-[35vw]'>
                <Image src={image} alt={`High fidelity mockups from the ${title} project`} width='600' height='600' className='mr-auto ml-auto'/>
            </div>
        </div>
    )
}