import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const discoverOlvera = <CaseStudyLayout />

    return(
        <MainLayout mainContent = {discoverOlvera}>
        </MainLayout>
    )
}