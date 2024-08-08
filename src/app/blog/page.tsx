import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const blog = (
            <h1 className='opacity-20 mt-[21vh] text-center w-full'>
                gallery incoming
            </h1>
    )

    return(
        <MainLayout mainContent = {blog}>
        </MainLayout>
    )
}