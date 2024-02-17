
export default function ParagraphAndImage({sectionHeader, mainText, image}: {sectionHeader: string, mainText: string, image: string}){
    return(
        <div className='flex'>
            <div>
                <h2>
                    {sectionHeader}
                </h2>
                <span>
                    {mainText}
                </span>
            </div>
        </div>
    )
}