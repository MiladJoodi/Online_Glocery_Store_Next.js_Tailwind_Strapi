const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:1337/api'
})

// Client Side
const getCategory = () => axiosClient.get("/categories?populate=*");

// Server Side
const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp=>{
    return resp.data.data;
})

// Server Side
const getCategoryList =()=> axiosClient.get('/categories?populate=*').then(resp=> {
    return resp.data.data;
})

const getAllProducts = ()=> axiosClient.get("/products?populate=*").then(resp=>{
    return resp.data.data
})


export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts
}