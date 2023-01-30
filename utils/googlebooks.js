const axios = require('axios')

module.exports = async (phrase) => {
    try {
        const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                format: 'json',
                q: `${phrase}`
            }
        });

        // Create a formatted object
        var formattedObj = {
            data: results.data,
            status: results.status,
            statusText: results.statusText,
            headers: results.headers,
            requestHeader: results.config.headers
        }

        // Return the formatted object
        return formattedObj;
    } catch (error) {
        // Handle any error that may occur
        console.error(error);
    }
}

