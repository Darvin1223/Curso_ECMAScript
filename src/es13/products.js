import fetch from "node-fetch";

const APIURL = 'https://api.escuelajs.co/api/v1/products';
const response = await fetch(APIURL);

const products = await response.json();


export {products}