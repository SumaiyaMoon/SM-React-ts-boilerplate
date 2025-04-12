import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers:{
  //     Authorization: `Bearer ${token}`
  // }
});
export const Get = (endpoint: string, id?: string | number) => {
  return apiHandle.get(`${endpoint}/${id ? id : ""}`);
};
export const Post = (
  endpoint: string,
  stateName: any,
  id?: string | number
) => {
  return apiHandle.post(`${endpoint}/${id ? id : ""}`, stateName);
};
export const Put = (endpoint: string, stateName: any, id?: string | number) => {
  return apiHandle.put(`${endpoint}/${id ? id : ""}`, stateName);
};
export const Delete = (endpoint: string, id?: string | number) => {
  return apiHandle.delete(`${endpoint}/${id ? id : ""}`);
};
