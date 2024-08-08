import ScrollSectionsFormatter from "@/components/scroll-sections/scroll-sections-formatter"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const voxai = <ScrollSectionsFormatter />

    return(
        <MainLayout mainContent = {voxai}>
        </MainLayout>
    )
}