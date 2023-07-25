import axios from "axios";

const apiUrl =
    process.env.REACT_APP_NODE_ENV === "test"
        ? process.env.REACT_APP_BACKEND_LOCAL
        : process.env.REACT_APP_BACKEND

const headerToken = localStorage.getItem("token");


const authService = {
    loginAdmin(data) {
        return axios.post(apiUrl + "user/signin/", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    },
    contactDetails(data) {
        return axios.post(apiUrl + "user/investor/", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    },

    addBlog(data){
        return axios.post(apiUrl + "api/blog", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${headerToken}`,
            },
        });
    },
    getBlog(){
        return axios.get(apiUrl + "api/blog", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${headerToken}`,
            },
        });
    },
    addEvent(data){
        return axios.post(apiUrl + "api/event", data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${headerToken}`,
            },
        });
    },
    getImage(){
        return axios.get(apiUrl + "api/image", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${headerToken}`,
            },
        });
    },

    getEventDetails(data){
        return axios.post(apiUrl + `api/event/${data}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${headerToken}`,
            },
        });
    },

    addNewsLetter(data){
        return axios.post(apiUrl + `api/newsletter`, data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    }
    
}

export default authService