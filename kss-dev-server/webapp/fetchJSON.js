export default function(url, options) {
    return fetch(url, options).then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        }

        const error = new Error(res.statusText || res.status);
        error.response = res;
        return Promise.reject(error);
    });
}
