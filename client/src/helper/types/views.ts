export interface SocialMedia {
    platform: string;
    site: string;
    username: string;
}

export interface requriedDataToRender {
    name?: string;
    description?: string;
    email?: string;
    photo?: { image: string; id: string };
    socialMedia?: SocialMedia[];
    workExperience?: any[];
}
