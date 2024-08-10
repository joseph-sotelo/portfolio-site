import ImageAndCaption from "./ui/image-and-caption"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function StandardCarousel({props}: {props: string[][]}){
    return(
        <>
        {props.length >= 2 &&(
            <Carousel >
            <CarouselContent >
                {props.map((image, index) =>(
                    <CarouselItem key={index}>
                        <ImageAndCaption props={image} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className='absolute top-full flex justify-around w-full'>
                <CarouselPrevious />
                <CarouselNext />
            </div>
            </Carousel>
        )}
        {props.length == 1 && (
            <ImageAndCaption props={props[0]} />
        )
        }
    </>
    )
}