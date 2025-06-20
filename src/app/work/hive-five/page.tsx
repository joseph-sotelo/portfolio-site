import ScrollSectionsFormatter from "@/components/scroll-sections/scroll-sections-formatter"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    return(
        <MainLayout>
            <div className="-mt-6">
                <ScrollSectionsFormatter />
            </div>
        </MainLayout>
    )
}