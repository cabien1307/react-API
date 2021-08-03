import axios from 'axios';
import * as Configs from '../const/config';

export default function callApi(endpoint, methods = 'GET', data) {
    return axios({
        method: methods,
        url: `${Configs.API_URL}/${endpoint}`,
        data: data
    })
        .catch(err => {
            console.log(err);
        })
}

