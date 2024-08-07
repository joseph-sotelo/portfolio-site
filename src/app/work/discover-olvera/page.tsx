import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const thisPageContent = <CaseStudyLayout />

    return(
        <MainLayout mainContent = {thisPageContent}>
        </MainLayout>
    )
}