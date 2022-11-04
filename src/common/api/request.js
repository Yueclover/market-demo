import axios from 'axios'
import that from '@/main'

// 进行默认配置
const instance = axios.create({
    // baseURL: "http://127.0.0.1:3000/api",//默认地址
    timeout: 3000,//超时时间3s
})

instance.interceptors.request.use(
    // 发送请求前做些事
    //1.添加loading加载效果
    //2.为post请求添加默认的Content-Type为表单数据格式
    function (config) {
        that.$bus.$emit('openLoading')
        if (config.method == 'post') {
            config.headers['Content-type'] = 'application/x-www-form-urlencoded'
        }
        const token = window.localStorage.token
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    // 请求错误做的事
    err => {
        console.log(err);
    }
)
// 添加响应拦截器
instance.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    that.$bus.$emit('closeLoading')
    return res;
}, async function (err) {
    that.$bus.$emit('closeLoading')
    return Promise.reject(err);
});
export default instance
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data)
            .then(res => {
                resolve(res.data);
            }, err => {
                reject(err)
            })
    })
}
export function get(url,config={}) {
    return instance.get(url,config)
    // return new Promise((resolve, reject) => {
    //     instance.get(url, config)
    //         .then(res => {
    //             resolve(res);
    //         })
    //         .catch(
    //             err => {
    //                 reject(err)
    //             }
    //         )
    // })
}

export function del(url, config = {}) {
    return new Promise((resolve, reject) => {
        instance.delete(url,config)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.put(url, data)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}