import wepy from 'wepy';
import tip from './tip'


const wxRequest = async (url, method, params = {}, ) => {
    let data = params || {};
    Object.assign(data, { token: '00001iloveyouruo' });
    if (method === 'POST') {
        url = getFullUrl(url, params);
        data = {};
    }
    let res = await wepy.request({
        url: url,
        method: method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    return res;
};
function getFullUrl(url, params) {
    let query = "";
    for (let p in params) {
        if (typeof params[p] === "object") {
            query += `&${p}=${JSON.stringify(params[p])}`;
        } else {
            query += `&${p}=${params[p]}`;
        }
    }
    url += "?" + query.substring(1);
    return encodeURI(url);
}

module.exports = {
    wxRequest
}
