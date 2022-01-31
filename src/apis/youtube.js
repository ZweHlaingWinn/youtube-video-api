import axios from 'axios';

const KEY = 'AIzaSyB3rcpMFJ8Gr8wYq2Wg_aXTk8h3Tlqw2cQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});

