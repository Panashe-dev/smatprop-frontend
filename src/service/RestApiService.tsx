import axios from "axios";

const BASE_URL_LOCAL = "http://localhost:9010/api/v1/";

const coreApi = axios.create({
  baseURL: BASE_URL_LOCAL,
});

export const getAllProperties = async () => {
  const responseData = await coreApi.get(`property/all`).then((response) => {
    return response.data;
  });
  return responseData;
};

export const getAllApplications = async () => {
  const responseData = await coreApi.get(`application/all`).then((response) => {
    return response.data;
  });
  return responseData;
};

export const getPropertyById = async (id) => {
  const responseData = await coreApi.get(`property/${id}`).then((response) => {
    return response.data;
  });
  return responseData;
};

export const getDashboardData = async () => {
  const responseData = await coreApi.get(`dashboard/all`).then((response) => {
    return response.data;
  });
  return responseData;
};


export const postRegisterApi = async (singupRequestBody) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const responseData = await coreApi
    .post(`register`, singupRequestBody, axiosConfig)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return responseData;
};

export const postLoginApi = async (loginRequestBody) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const responseData = await coreApi
    .post(`/auth/login`, loginRequestBody, axiosConfig)
    .then((response) => {
      return response.data;
    });
  return responseData;
};

export const postApplicationForm = async (applicationRequestBody) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const responseData = await coreApi
    .post(`/application/add`, applicationRequestBody, axiosConfig)
    .then((response) => {
      return response.data;
    });
  return responseData;
};

const getAxiosConfig = () => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: null,
    },
  };

  const accessToken = JSON.parse(localStorage.getItem("userInfo"))?.token;

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axiosConfig;
};
