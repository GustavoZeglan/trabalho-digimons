

export interface Digimon {
    id: number,
    name: string,
    image: string,
    images: Images[],
    types: Types[],
    attributes: Attribute[],
    skills: Skill[],
    levels: Level[],
    descriptions: Descriptions[],
    priorEvolutions: Evolution[],
    nextEvolutions: Evolution[],
}

export interface Evolution {
    id: number,
    digimon: string,
    image: string
}

interface Images {
    href: string
}

interface Types {
    id: number,
    type: string,
}

export interface Skill {
    id: number,
    skill: string,
    description: string,
}

interface Level {
    id: number,
    level: string,
}

interface Descriptions {
    language: string,
    description: string,
}

interface Attribute {
    id: number,
    attribute: string,
}