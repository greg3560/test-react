import axios from "axios/index";


const fetchShops = new Promise(function (resolve, reject) {
    axios.get(process.env.API_URL)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            try {
                return res;
            } catch (e) {
                console.log(e);
            }
        }).then(response => {
        resolve(response.data.results);
    }).catch(error => {
        reject(error);
    });
});

export default fetchShops;