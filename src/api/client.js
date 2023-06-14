import { create } from "apisauce";
import Endpoints from "../constants/Endpoints";

const client = create({
    baseURL: Endpoints.BASE_URL,
    timeout: 10000
});

client.axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log('interceptor response error: ', error)
        return Promise.reject(error);
    },
);

export default client;