const express = require('express')
const axios = require('axios').default;
const router = express.Router()
const URL = 'http://api.tvmaze.com/singlesearch/shows?q='

router.get('/:series',  (req, res)=>{
    console.log("Param", req.params.series)
    axios.get(`${URL}${req.params.series}`).then(response => {
        res.status(200).send(response.data)
    })
})


module.exports = router