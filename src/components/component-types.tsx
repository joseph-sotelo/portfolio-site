export type ScrollSectionType = {
    key: string;
    componentType: string;
    descriptiveList?: string[][];
    header?: string;
    subheader?: string;
    secondaryText?: string;
    mainText?: string;
    bullets?: string[];
    images?: string[][];
    image?: string;
    src?: string;
    alt?: string;
    hostType?: string;
    sources?: string[];
    accordionSections?: string[][];
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
    sections: ScrollSectionType[];
}

export type CaseStudyPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other';

export type GlobalPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other' | '' | 'about';