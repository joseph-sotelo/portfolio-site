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
    lines?: string[][];
    isAutoPlay?: boolean;
    showControls?: boolean;
    isMuted?: boolean;
}

export type CaseStudyCardType = {
    name: string;
    image: string;
    page: string;
    labels: string[];
}

export type InfoMenuType = {
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

export type CaseStudyPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other' | 'semiotic-clock' | 'electric-spoons';

export type GlobalPageKeyType = 'discover-olvera' | 'voxai' | 'slimbox' | 'other' | '' | 'about' | 'semiotic-clock' | 'electric-spoons';