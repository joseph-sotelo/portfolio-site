'use client'
import Image from "next/image"

type caseStudyPrototype = {
    header: string | undefined;
    mainText: string | undefined;
  }

export default function CaseStudyPrototype(props: caseStudyPrototype){

    return(
        <div className='mx-auto w-[67vw] mt-12 mb-12 xl:ml-0'>
            <h2 className='text-secondary-foreground'>
                {props.header}
            </h2>
            <p>
                {props.mainText}
            </p>
            <div className='w-full flex mt-12'>
                <iframe className="border border-border rounded-sm w-[67vw] sm:w-[60vw] md:w-[67vw] h-[55vw]" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F03fMbGdhWZTUtRot9hSkfp%2FSlimBox%3Fpage-id%3D0%253A1%26node-id%3D6-212%26viewport%3D-1021%252C-315%252C0.07%26t%3DzDpKzIYiXPuAh661-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D6%253A212" allowFullScreen></iframe>
            </div>
        </div>
    )
}