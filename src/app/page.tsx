import CaseStudyLayout from "@/components/case-study/case-study-layout"
import { MainLayout } from "@/components/main-layout"
import CardGrid from "@/components/card-grid"

export default function Page(){

    const cardGrid = <CardGrid />

    return(
        <MainLayout mainContent = {cardGrid}>
        </MainLayout>
    )
}