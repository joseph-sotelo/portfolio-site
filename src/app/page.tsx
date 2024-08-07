import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"
import PieceCardGrid from "@/components/piece-card-grid"

export default function Page(){

    const thisPageContent = <PieceCardGrid />

    return(
        <MainLayout mainContent = {thisPageContent}>
        </MainLayout>
    )
}