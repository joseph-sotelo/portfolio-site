export type CaseStudySection = {
    key: string;
    componentType: string;
    descriptiveList?: string[][];
    header?: string;
    secondaryText?: string;
    mainText?: string;
    bullets?: string[];
    images?: string[][];
    image?: string;
    src?: string;
    hostType?: string;
    sources?: string[];
}

export type CaseStudyCardProps = {
    name: string;
    image: string;
    page: string;
    labels: string[];
}

export type ContextMenu = {
    header: string,  
    hideTitleAtStart: boolean,
    subHeader: string[],  
    mainText?: string, 
    links?: string[][],
}

export type CaseStudy = {
    caseStudyCardProps: CaseStudyCardProps;
    contextMenuData: ContextMenu;
    sections: CaseStudySection[];
}

export type PageKey = 'discover-olvera' | 'voxai' | 'slimbox' | 'other';