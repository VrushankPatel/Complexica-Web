import Util from "../utilities/Util"
var axios = require('axios');

const uploadImageRequest = (img, updateImage, stopProgressSim) => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('image', img);

    var config = {
        method: 'post',
        url: Util.getUrlByGMT(),
        data: data
    };

    axios(config)
        .then(function (response) {
            updateImage(response.data);
            stopProgressSim();
        })
        .catch(function (error) {
            alert("Unable to convert image, please try again later..");
        });
}

export default uploadImageRequest;