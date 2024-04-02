import Image from 'next/image';

export default function CaseStudyHero({title, tagline, occasion, image}: {title: string, tagline: string, occasion: string, image: string}){
    return(
        <div id='hero' className='mt-12 mb-12 ml-auto mr-auto'>
            <h1 className='text-center'>
                {title}
            </h1>
            <h5 className='text-center'>
                {occasion}
            </h5>
            <h3 className='text-center'>
                {tagline}
            </h3>
            <Image src={image} alt={`High fidelity mockups from the ${title} project`} width='600' height='600' className='mr-auto ml-auto w-6/12'/>
        </div>
    )
}