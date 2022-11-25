import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080'
});


export const api = {
    login: async (data: any) => {
        return (await axios.post<any>('http://localhost:8080/api/auth/signin', data)).data
    },
}