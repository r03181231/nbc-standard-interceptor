import axios from "axios";

const todosURL = process.env.REACT_APP_TODOS_URL;
// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: todosURL,
  timeout: 1000,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (request) => {
    console.log("요청혀유!");
    return request;
  },
  (error) => {
    console.log("요청 오류났어유!");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    console.log("응답이여유!");
    return response.data;
  },
  (error) => {
    console.log("응답 오류났어유!");
    return Promise.reject(error);
  }
);

export default api;
