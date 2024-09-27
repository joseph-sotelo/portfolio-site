'use client'

export type CodeFragmentType = {
    lines: string[];
  }

export function CodeFragment({props}: {props: CodeFragmentType}){

    return(
        <div className = 'border border-border rounded-sm w-full'>
            {props.lines.map((line, index) => (
                <div key ={index}>
                    {line}
                </div>
            ))}
        </div>
    )
}