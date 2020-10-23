const axios = require('axios').default;
const URL = 'http://api.tvmaze.com/singlesearch/shows?q=girls'

axios.get(URL).then(response => {
    console.log(response.data)
})