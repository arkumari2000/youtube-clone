import axios from 'axios';

const KEY = {YOUR API KEY};

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


