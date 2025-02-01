'use client'

export type ColumnType = {
    columnSections: string[][];
}

export function Column({props}: {props: ColumnType}){

    return(
        <div>
            {props.columnSections.map((columnSection, index) => {
                switch(columnSection[0]){
                    case 'header':
                        return(
                            <h2 key = {index} className = 'text-secondary-foreground'>
                                {columnSection[1]}
                            </h2>
                        )
                    break;
                    case 'mainText':
                        return(
                            <p key = {index} className='my-standard-gap'>
                                {columnSection[1]}
                            </p>
                        )
                    break;
                    case 'codeFragment':
                        return(
                            <div key = {index} className = 'border border-border rounded-sm w-full p-standard-gap my-standard-gap'>
                                {columnSection.slice(1).map((line, lineIndex) => (
                                    <div key = {lineIndex + 1}>
                                        {line}
                                    </div>
                                ))}
                            </div>
                        )
                    break;
                    case 'bigText':
                        return(
                            <h3 key = {index} className='my-standard-gap'>
                                {columnSection[1]}
                            </h3>
                        )
                    break;
                }
            })}
        </div>
    )
}