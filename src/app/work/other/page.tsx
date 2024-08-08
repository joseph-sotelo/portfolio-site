import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const other = <CaseStudyLayout />

    return(
        <MainLayout mainContent = {other}>
        </MainLayout>
    )
}



        // <div className='m-auto w-[90vw] sm:w-full sm:m-0 sm:flex justify-evenly mb-24'>
        //     <div className='sm:hidden z-10'>
        //         <MobileMenu props={contextMenu.props}></MobileMenu>
        //     </div>
        //     <div className={`hidden sm:block sm:w-[30vw] lg:w-[15vw] min-w-[217px] h-[${scrollHeight}] relative`}>
        //         <div id='context-menu-wrapper' className='sticky top-0 right-0 min-w-[217px] h-screen'>
        //             <ContextMenu props={contextMenu.props} isInvisible={true} hideTitleAtStart={false}></ContextMenu>
        //         </div>
        //     </div>
        //     <div className='mt-16 xl:mt-12 sm:w-[60vw] lg:w-[75vw] sm:mt-12 grow-0 z-9'>
        //         <h1 className='opacity-20 mx-auto mt-[21vh] text-center'>
        //             gallery incoming
        //         </h1>
        //     </div>
        // </div>