export interface Language {
    Lan: string;
    description: string;
}

export interface SocialMedia {
    linkedin: string;
    facebook: string;
}

export interface Property {
    profileInfo: {
        html: string;
    };
}

export interface WorkExperience {
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
    image: string;
}

export interface Photo {
    id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface userDataType {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    skills: string[];
    language: Language[];
    description: string;
    location: string;
    title: string;
    photo: Photo;
    CareerGoals: string;
    socialMedia: SocialMedia[];
    property: Property[];
    education: any[];
    workExperience: WorkExperience[];
    certificates: any[];
    awards: any[];
    createAt: string;
    updatedAt: string;
}