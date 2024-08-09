export default function ScrollSectionDivider({index, sectionsCount}: {index: number, sectionsCount: number}){
    
        if(index !== sectionsCount) {
            return(
            <div id='scroll-section-divider' className='my-24 bg-border h-[1px] w-full'></div>
        )
    }
    
}