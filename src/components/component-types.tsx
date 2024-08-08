export type CaseStudySectionType = {
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

export type CaseStudyCardType = {
    name: string;
    image: string;
    page: string;
    labels: string[];
}

export type StaticMenuType = {
    header: string,  
    hideTitleAtStart: boolean,
    subHeader: string[],  
    mainText?: string, 
    links?: string[][],
}

export type CaseStudyType = {
    caseStudyCardProps: CaseStudyCardType;
    contextMenuData: StaticMenuType;
    sections: CaseStudySectionType[];
}

export type CaseStudyPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other';

export type GlobalPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other' | '' | 'about';