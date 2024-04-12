'use client'
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Page(){
    return(
        <div className='w-[75vw] m-auto'>
          <h1 className='mb-[1rem]'>
              About Me
          </h1>
          <div className='flex justify-between w-[70vw] ml-auto mr-auto mt-12 mb-12'>
            <div id='left' className='w-[25vw] mt-auto mb-auto'>
                <h2>
                    Hi!
                </h2>
                <p>
                I’m a human-centered designer based out of Los Angeles. When I’m not in the zone, I enjoy reading, fidgeting with code, and inventing new games to play with my nieces and nephews.
                </p>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Art and I
                        </AccordionTrigger>
                        <AccordionContent>
                            My earliest creative expression was illustration. I find myself constantly learning to appreciate new kinds of art. Today I have a well-developed eye for aesthetics that I use for my own art and for design.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Design and I
                        </AccordionTrigger>
                        <AccordionContent>
                            In college I discovered the world of design - a beautiful blend of art and practicality. I love submitting my creative and technical skills to the parameters created by other people’s needs. This means that the most fundamental part of the design process is research. Without research, it’s just art.                        
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Code and I
                        </AccordionTrigger>
                        <AccordionContent>
                            Overlapping the world of design is the neighboring territory of programming. Ever since my first web design class I have been in love with it. From experimenting in Unity to building this website with Next.js, I make every effort to continuously grow in these skills. This is all done through self-learning, extracurricular classes, and the guidance of several mentor friends. I'm not an engineer, but I'm well-acquanited with what they do.                       
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div id='right' className='w-[35vw]'>
                <Image src='/about/informal_portrait_1.png' alt='Photo of Joseph Sotelo' width='375' height='375'>
                </Image>
            </div>
        </div>
        </div>
      )
}