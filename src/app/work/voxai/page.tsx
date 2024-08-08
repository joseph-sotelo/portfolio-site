import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"

export default function Page(){

    const voxai = <CaseStudyLayout />

    return(
        <MainLayout mainContent = {voxai}>
        </MainLayout>
    )
}