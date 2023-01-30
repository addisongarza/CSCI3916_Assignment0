const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', config {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //
    // return a formattedObj
    let customObject = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }

    //return the formattedObject
    return customObject;
}
