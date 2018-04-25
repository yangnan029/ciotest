import axios from "axios";

/**
 * 本地存储管理
 */
export const storageManager = {
    getItem: (key, transfer) => {
        let value = "";
        transfer
            ? (value = JSON.parse(window.localStorage.getItem(key)))
            : (value = window.localStorage.getItem(key));
        return value;
    },
    setItem: (key, value) => {
        try {
            if (typeof value == "object") {
                window.localStorage.setItem(key, JSON.stringify(value));
            } else {
                window.localStorage.setItem(key, value);
            }
        } catch (e) {
            alert("请关闭浏览器的隐身模式或无痕浏览！");
        }
    },
    removeItem: data => {
        if (data instanceof Array) {
            for (let i in data) {
                window.localStorage.removeItem(data[i]);
            }
        } else {
            window.localStorage.removeItem(data);
        }
    }
};
//   params{
//       params:{},
//       url:''
//   }
export const ajax = {
    get: params => {
        const token = storageManager.getItem('token')
      return  axios.get(params.url, {
            params: params.params,
            headers: { Authorization: token }
        })
    },
    // post: params => {
       
    //   return  axios.post(params.url, {
    //         params: params.params,
    //         headers: { Authorization: token }
    //     })
    // },

    post:(params)=>{
        const token = storageManager.getItem('token');
       return axios({
            method: 'post',
            url: params.url,
            data:params.params,
            headers: { Authorization: token }
          });
    }
}