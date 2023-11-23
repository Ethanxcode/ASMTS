import axios, { AxiosResponse } from 'axios';

// Define the type of your data
interface userDataType {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    description: string;
    location: string;
    photo: {
        id: string;
        image: string;
        createdAt: string;
        updatedAt: string;
    };
    property?: {
    }[];
}



// const url = 'https://nrfjf9-8080.csb.app/users/user-fasdlkfs'

// // // Function to retrieve all data
// export async function getAllData(): Promise<YourDataType[]> {
//     try {
//         const response: AxiosResponse<YourDataType[]> = await axios.get(`${url}`);
//         return response.data;
//     } catch (error) {
//         // Handle error
//         throw new Error('Failed to fetch data');
//     }
// }

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