import Image from 'next/image';

export default function CaseStudyHero({props}){
    return(
        <div id='hero' className='flex justify-between mt-12 mb-12'>
            <div id='left' className='w-[28vw] mt-auto mb-auto'>
                <h1 className='mb-[1rem]'>
                    {props.title}
                </h1>
                <h6 className='mb-[1rem]'>
                    {props.occasion}
                </h6>
                <h5 className='mb-[1rem]'>
                    {props.tagline}
                </h5>    
            </div>
            <div id='right' className='w-[35vw]'>
                <Image src={props.image} alt={`High fidelity mockups from the ${props.title} project`} width='600' height='600' className='mr-auto ml-auto'/>
            </div>
        </div>
    )
}