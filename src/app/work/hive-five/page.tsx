import ScrollSectionsFormatter from "@/components/scroll-sections/scroll-sections-formatter"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    return(
        <MainLayout>
            <ScrollSectionsFormatter />
            <div className="flex flex-col items-center justify-center h-36">
                Case study in progress
            </div>
        </MainLayout>
    )
}