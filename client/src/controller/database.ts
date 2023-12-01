import axios, { AxiosResponse } from 'axios';
import { userDataType } from '../helper/types/database';


const url = 'https://rjsw24-8080.csb.app/users'

// // // Function to retrieve all data
export async function getAllData(id: string): Promise<userDataType[]> {
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


export function isLoggedCheckBool(): boolean {
    const data = localStorage.getItem('user');
    return data ? true : false;
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