'use client'
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export type ColumnType = {
    columnSections: string[][];
}

export function Column({props}: {props: ColumnType}){

    return(
        <div className = "xl:grid xl:grid-cols-9">
            <div className = "xl:col-span-4">
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
                            <div key = {index} className = 'border border-border rounded-sm w-full p-standard-gap my-standard-gap p-small'>
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
                    case 'link':
                        return (
                            <div key={index} className='mt-[1.25rem] opacity-60 text-accent-foreground hover:opacity-100'>
                                <a href={columnSection[1]} target = '_blank' className = 'a-large'>
                                    {columnSection[2]}<ArrowTopRightIcon />
                                </a>
                            </div>
                        )
                    break;
                }
            })}
            </div>
        </div>
    )
}