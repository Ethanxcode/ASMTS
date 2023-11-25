import axios, { AxiosResponse } from 'axios';

// Define the type of your data
interface Language {
    Lan: string;
    description: string;
}

interface SocialMedia {
    linkedin: string;
    facebook: string;
}

interface Property {
    profileInfo: {
        html: string;
    };
}

interface WorkExperience {
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
    image: string;
}

interface Photo {
    id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

interface userDataType {
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


const url = 'https://nrfjf9-8080.csb.app/users'

// // // Function to retrieve all data
export async function getAllData(): Promise<userDataType[]> {
    try {
        const response: AxiosResponse<userDataType[]> = await axios.get(`${url}`);
        return response.data;
    } catch (error) {
        // Handle error
        throw new Error('Failed to fetch data');
    }
}

export async function getDetailData(id: string): Promise<userDataType[]> {
    try {
        const response: AxiosResponse<userDataType[]> = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}


export async function getData(): Promise<userDataType[]> {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : '';

}


// // Function to create new data
// export async function createData(newData: YourDataType): Promise<YourDataType> {
//     try {
//         const response: AxiosResponse<YourDataType> = await axios.post(`${url}`, newData);
//         return response.data;
//     } catch (error) {
//         // Handle error
//         throw new Error('Failed to create data');
//     }
// }

// // Function to update existing data
// export async function updateData(updatedData: YourDataType): Promise<YourDataType> {
//     try {
//         const response: AxiosResponse<YourDataType> = await axios.patch(`${url}`, updatedData);
//         return response.data;
//     } catch (error) {
//         // Handle error
//         throw new Error('Failed to update data');
//     }
// }

// // Function to delete data by ID
// export async function deleteData(id: number): Promise<void> {
//     try {
//         await axios.delete(`${url} ${id}`);
//     } catch (error) {
//         // Handle error
//         throw new Error('Failed to delete data');
//     }
// }