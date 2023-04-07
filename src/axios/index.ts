import axios from "axios";
import {message} from "antd";

// axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL as any,
    timeout: 60000,
    headers: {"Content-Type": "application/json;charset=UTF-8"}
});

// 请求拦截器
service.interceptors.request.use(
    (config: any) => {
        // 追加时间戳，防止GET请求缓存
        if (config.method?.toUpperCase() === "GET") {
            config.params = {...config.params, t: new Date().getTime()};
        }

        if (Object.values(config.headers).includes("application/x-www-form-urlencoded")) {
            config.data = JSON.stringify(config.data);
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 401) {
            return;
        } else if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText || "Error"));
        }

        const res = response.data;
        // 响应成功
        if (response.status === 200) {
            return res;
        }

        // 错误提示
        message.error(res.msg);

        // 没有权限，如：未登录、登录过期等，需要跳转到登录页
        if (res.status === 401) {

        }

        return Promise.reject(new Error(res.message || "Error"));
    },
    error => {
        console.log('error', error)
        if (error.response.status === 401) {
            return;
        } else {
            message.error(error.message);
            return Promise.reject(error);
        }
    }
);

// 导出 axios 实例
export default service;
