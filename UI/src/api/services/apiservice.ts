import { appRequest as axios } from '@/api/network';
import apiKeys from "@/constants/keys";

export default class ApiService {

    static getTopNews(page: number, pageSize: number = 10, category: string = 'technology') {
        const url = `/top-headlines?country=in&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKeys.newsAPI}`

        return axios({
            url,
            method: "GET"
        })
    }

    static searchNews(query: string) {
        const url = `/everything?q=${query}&apiKey=${apiKeys.newsAPI}`

        return axios({
            url,
            method: "GET"
        })
    }
}