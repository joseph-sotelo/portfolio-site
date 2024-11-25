import ScrollSectionsFormatter from "@/components/scroll-sections/scroll-sections-formatter"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    return(
        <MainLayout>
            <ScrollSectionsFormatter />
            <h1 className='opacity-20 mt-[21vh] text-center w-full'>
                Work in progress
            </h1>
        </MainLayout>
    )
}