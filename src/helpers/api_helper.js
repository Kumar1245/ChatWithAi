import axios from "axios";
import CryptoJS from 'crypto-js';
import {  logOutRedirectCall } from "../components/Common/Common";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const API_URL = API_BASE_URL + process.env.REACT_APP_API_BASE_URL_EXTENSION;

export const API_VERSION = process.env.REACT_APP_API_VERSION;

const axiosApi = axios.create({ baseURL: API_URL + API_VERSION });

export const updateToken = (token) => {
  axiosApi.defaults.headers.common["Authorization"] = "Bearer " + token;
};
let obj = null;
if (typeof window !== "undefined") {
  obj = localStorage.getItem("authToken");
}
console.log("obj", obj);
updateToken(obj ? obj : null);

// axiosApi.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    let res = error.response;
    console.log(error); 
    if (res?.status === parseInt(process.env.REACT_APP_UNAUTHORIZED)) {
      // console.log(res.status,"================<>")
      logOutRedirectCall(); 
    } else if (
      res?.status === parseInt(process.env.REACT_APP_VALIDATION_ERROR) ||
      res?.status === parseInt(process.env.REACT_APP_DUPLICATE_VALUE)
    ) {
      const response = bodyDecryption(res.data); 
      return Promise.resolve(response); 
    } else {
      console.error(`Error with status code: ${res?.status}`);
      return Promise.reject(error); 
    }
  }
);


function bodyEncryption(request, isStringify)
{
    var request = (isStringify) ? JSON.stringify(request) : request;
    var encrypted = CryptoJS.AES.encrypt(request, key, { iv: iv });
    return encrypted.toString();
}
function bodyDecryption(request)
{
    var decrypted = CryptoJS.AES.decrypt(request.toString(), key, { iv: iv });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
const checkStatusCode = async (code, err) => {
  try {   
    if (code && [403, 501, 502, 503, 400, 404].includes(code)) {
      if (axiosApi.defaults.headers.common["token"] !== undefined) {
        throw new Error(err.response.data.message);
      } else {
        throw new Error(err.response.data.message);
      }
    } else {
      throw new Error(err.message);
    }
  } catch (error) {
    return error
  }
};

export async function get(url, config = {}) {
  // console.log("url", url, axiosApi?.baseURL);
  return await axiosApi
    .get(url, { ...config })
    .then((response) => {
      // console.log(response, "data==========--099");
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}

export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => {
      if (response.data.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    })
    .catch((e) => {
      checkStatusCode(!e.response ? null : e.response.status, e);
    });
}
