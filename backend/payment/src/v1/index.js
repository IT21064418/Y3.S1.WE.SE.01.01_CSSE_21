const axios = require('axios');

module.exports.publishDeliveryEvent = async(payload) => {

    axios.post('http://localhost:8000/delivery/app-events', {
        payload
    });

}