import AboutLayout from "@/components/about/about-layout"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const about = <AboutLayout />

    return(
        <MainLayout mainContent = {about}>
        </MainLayout>
    )
}