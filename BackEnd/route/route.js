const express = require('express');

const route = express.Router()

route.get('/', () => {
    console.log("Route is working properly ༼ つ ◕_◕ ༽つ");
})

module.exports = route