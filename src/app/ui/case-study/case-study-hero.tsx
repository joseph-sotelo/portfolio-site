import Image from 'next/image';

export default function CaseStudyHero({title, tagline, occasion, image}: {title: string, tagline: string, occasion: string, image: string}){
    return(
        <div id='hero'>
            <h1>
                {title}
            </h1>
            <h5>
                {occasion}
            </h5>
            <h3>
                {tagline}
            </h3>
            <Image src={image} alt={`High fidelity mockups from the ${title} project`} width='300' height='300' />
        </div>
    )
}