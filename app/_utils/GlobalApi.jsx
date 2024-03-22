const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:1337/api'
})

// Client Side
const getCategory = () => axiosClient.get("/categories?populate=*");

// Server Side
const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp => {
    return resp.data.data;
})

// Server Side
const getCategoryList = () => axiosClient.get('/categories?populate=*').then(resp => {
    return resp.data.data;
})

// All Products
const getAllProducts = () => axiosClient.get("/products?populate=*").then(resp => {
    return resp.data.data
})

// Get Product By Category
const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][name][$in]=' + category + "&populate=*")
    .then(resp => {
        return resp.data.data;
    })

    // Register User
const registerUser = (username, email, password) => axiosClient.post('/auth/local/register', {
    username:username,
    email:email,
    password:password
})

// Sign In User
const SignIn = (email, password)=> axiosClient.post('/auth/local',{
    identifier: email,
    password:password
})



export default {
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsByCategory,
    registerUser,
    SignIn
}